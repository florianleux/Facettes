<template>
  <v-container>
    <v-row>
      <div class="mt-16 mb-4 mx-auto main">
        <canvas id="Canvas"></canvas>
        <div
          class="timer"
          :class="{
            'animate__animated animate__infinite animate__heartBeat': timer > 0,
          }"
        >
          <template v-if="!success && timer > 0">
            {{ timer }}
          </template>
        </div>
      </div>
    </v-row>
    <v-row class="py-8">
      <v-col>
        <div v-if="success || answerShown">
          <h1 class="text-center">
            {{ pickedPainting.title }}
          </h1>
          <h3 class="text-center">
            {{ pickedPainting.author }}
          </h3>
          <v-btn
            v-if="currentRound < settings.rounds"
            class="mx-auto d-block mt-4"
            @click="loadImage"
          >
            {{ $t("GAME.NEXT") }}
          </v-btn>
          <v-btn
            v-else
            class="mx-auto d-block mt-4"
            @click="$router.push({ name: 'GameEnd' })"
          >
            {{ $t("GAME.SUMMARY") }}
          </v-btn>
        </div>
        <v-form
          autocomplete="off"
          v-else-if="timer > 0"
          class="game-form mx-auto"
          @enter.prevent.stop="submit"
          @submit.prevent.stop="submit"
        >
          <h1 class="mb-6 text-center">
            {{ titleTip }}
          </h1>

          <v-text-field
            solo
            hide-details
            @enter.stop="submit"
            v-model="titleGuess"
            class="guess-input mx-auto d-block"
          />

          <v-snackbar
            class="snackbar"
            v-model="validationMessage.show"
            absolute
            :color="validationMessage.color"
            timeout="1300"
          >
            <div class="text-center">{{ validationMessage.text }}</div>
          </v-snackbar>
        </v-form>
        <div v-else>
          <v-icon class="d-block mx-auto text-center" color="error" large>
            far fa-frown
          </v-icon>
          <div class="error--text main-font d-block mx-auto text-center">
            {{ $t("GAME.TIME_UP") }}
          </div>
          <v-btn
            class="mt-6 mx-auto d-block text-center"
            @click.stop="
              answerShown = true;
              renderImage(1);
            "
          >
            {{ $t("GAME.SOLUTION") }}
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <div class="rounds">
      <div class="text">Round</div>
      <div class="value">{{ currentRound }}/{{ settings.rounds }}</div>
    </div>
    <div class="score">
      <div v-if="points > 0" class="points animate__animated animate__fadeInUp">
        + {{ points }}
      </div>
      <div class="value">{{ playerScore }}</div>
      <div class="text">{{ $tc("POINTS", playerScore) }}</div>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { compareTwoStrings } from "string-similarity";
import { SIMILARITY_THRESHOLDS, IMAGE_RENDERING } from "@/utils/constants";
import { normalizeString, createTitleHint } from "@/utils/stringHelpers";

export default {
  name: "Game",

  data: () => ({
    answerShown: false,
    context: null,
    paintingIndex: null,
    canvas: null,
    image: null,
    percent: 0,
    height: 0,
    pickedPainting: null,
    pickedPaintingIndexes: [],
    success: false,
    currentRound: 0,
    titleGuess: "",
    width: 0,
    timer: 0,
    points: 0,
    titleTip: null,
    renderTimer: null,
    countdownTimer: null,
    validationMessage: {
      text: "",
      color: "",
      show: false,
    },
    imageLoadError: false,
  }),

  created() {
    // Check if game was properly started (not a page refresh)
    if (!this.$store.state.gameStarted) {
      // User refreshed on /game or navigated directly - redirect to home
      this.$router.replace({ name: "Home" });
      return;
    }

    // Reset game state when component is created
    this.currentRound = 0;
    this.pickedPaintingIndexes = [];
    this.success = false;
    this.answerShown = false;
    this.points = 0;
  },

  mounted() {
    this.loadImage();
  },

  beforeDestroy() {
    this.cleanupTimers();
  },

  computed: {
    ...mapState(["playerScore", "gameHistory"]),
    timerInterval() {
      return Math.floor(this.settings.time / IMAGE_RENDERING.TIMER_DIVISIONS);
    },
    settings() {
      return this.$store.state.settings[this.$store.state.difficulty];
    },
  },

  methods: {
    ...mapActions(["incrementScore", "setRoundPoints", "addGameHistory"]),

    cleanupTimers() {
      if (this.renderTimer) {
        clearTimeout(this.renderTimer);
        this.renderTimer = null;
      }
      if (this.countdownTimer) {
        clearTimeout(this.countdownTimer);
        this.countdownTimer = null;
      }
    },
    startRender() {
      if (this.renderTimer) clearTimeout(this.renderTimer);

      if (this.percent < 1 && this.timer > 0) {
        this.renderTimer = setTimeout(() => {
          if (this.percent <= IMAGE_RENDERING.MAX_RENDER_PERCENT) {
            this.percent +=
              this.percent > IMAGE_RENDERING.THRESHOLD
                ? IMAGE_RENDERING.LARGE_INCREMENT
                : IMAGE_RENDERING.SMALL_INCREMENT;
          } else {
            this.percent = IMAGE_RENDERING.FINAL_PERCENT;
          }

          this.renderImage(this.percent);

          if (this.percent < 0.99 && this.timer > 0) {
            this.startRender();
          }
        }, this.timerInterval * 1000);
      }
    },
    renderImage(percent) {
      this.context.drawImage(
        this.image,
        0,
        0,
        this.width * percent,
        this.height * percent
      );

      // Stretch the smaller imagex onto larger context.
      this.context.drawImage(
        this.canvas,
        0,
        0,
        this.width * percent,
        this.height * percent,
        0,
        0,
        this.width,
        this.height
      );
    },
    submit() {
      const normalizedGuess = normalizeString(this.titleGuess);
      const normalizedTitle = normalizeString(this.pickedPainting.title);
      const score = compareTwoStrings(normalizedGuess, normalizedTitle);

      const isLongTitle =
        this.pickedPainting.title.length >
        SIMILARITY_THRESHOLDS.LONG_TITLE_LENGTH;
      const exactMatchThreshold = isLongTitle
        ? SIMILARITY_THRESHOLDS.PARTIAL_MATCH_ADJUSTMENT
        : SIMILARITY_THRESHOLDS.EXACT_MATCH;

      if (score > exactMatchThreshold) {
        this.validationMessage.text = this.$t("VALIDATION.SUCCESS");
        this.validationMessage.color = "success";

        this.points = Math.floor(1 / this.percent / 5) + 1;

        setTimeout(() => {
          if (
            this.currentRound > 0 &&
            this.currentRound <= this.gameHistory.length
          ) {
            this.setRoundPoints({
              roundIndex: this.currentRound - 1,
              points: this.points,
            });
          }
          this.incrementScore(this.points);
        }, 600);

        setTimeout(() => {
          this.points = 0;
        }, 700);

        setTimeout(() => {
          this.renderImage(1);
          this.percent = 1;
          this.success = true;
        }, 700);
      } else if (
        score > SIMILARITY_THRESHOLDS.CLOSE_MATCH ||
        (normalizedTitle.includes(normalizedGuess) &&
          this.titleGuess.length > SIMILARITY_THRESHOLDS.MINIMUM_GUESS_LENGTH)
      ) {
        this.validationMessage.text = this.$t("VALIDATION.CLOSE");
        this.validationMessage.color = "warning";
      } else {
        this.validationMessage.text = this.$t("VALIDATION.WRONG");
        this.validationMessage.color = "error";
      }

      this.validationMessage.show = true;
      setTimeout(() => {
        this.titleGuess = "";
      }, 1000);
    },
    loadImage() {
      this.resetGame();
      const canvas = document.getElementById("Canvas");
      const context = canvas.getContext("2d");

      const image = new Image();
      image.crossOrigin = "anonymous";

      image.onload = () => {
        this.imageLoadError = false;
        this.percent = IMAGE_RENDERING.INITIAL_PERCENT;

        // Only increment round and add to history when image successfully loads
        this.currentRound++;
        this.addGameHistory(this.pickedPainting);

        const ratio = image.width / image.height;
        if (image.height > window.innerHeight * 0.5) {
          image.height = window.innerHeight * 0.5;
          image.width = image.height * ratio;
        }

        const width = image.width;
        const height = image.height;

        canvas.width = width;
        canvas.height = height;

        // Set pixelated rendering style
        canvas.style.imageRendering = "pixelated";

        // Disable image smoothing for all browsers
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        const scaledWidth = width * this.percent;
        const scaledHeight = height * this.percent;

        // Render image smaller
        context.drawImage(image, 0, 0, scaledWidth, scaledHeight);

        // Stretch the smaller image onto larger context
        context.drawImage(
          canvas,
          0,
          0,
          scaledWidth,
          scaledHeight,
          0,
          0,
          width,
          height
        );

        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.image = image;
        this.context = context;

        this.startRender();
      };

      image.onerror = () => {
        console.error("Failed to load image:", image.src);
        this.imageLoadError = true;
        // Try loading next image
        if (this.currentRound < this.settings.rounds) {
          this.loadImage();
        }
      };

      image.src = this.pickPainting(this.settings.maxIndex);
    },
    pickPainting(maxIndex) {
      let index = Math.floor(Math.random() * maxIndex);

      while (this.pickedPaintingIndexes.includes(index)) {
        index = Math.floor(Math.random() * maxIndex);
      }

      this.pickedPainting = this.$store.state.paintingList[index];
      this.titleTip = createTitleHint(this.pickedPainting.title);
      this.pickedPaintingIndexes.push(index);

      return this.$store.state.paintingList[index].imageUrl;
    },

    resetGame() {
      this.timer = this.settings.time;
      this.success = false;
      this.answerShown = false;
      this.startTimer();
    },

    startTimer() {
      if (this.countdownTimer) clearTimeout(this.countdownTimer);

      if (this.timer > 0 && !this.success) {
        this.countdownTimer = setTimeout(() => {
          this.timer--;
          this.startTimer();
        }, 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
canvas {
  //border: 20px #808080 groove;
  border-radius: 5px;
  box-shadow: 0px 7px 30px 0px #000000cf;
  background: black;
}

.game-form {
  position: relative;
}

.snackbar {
  bottom: -70px;
  right: 0;
  left: 0;
  width: 100%;
  font-family: Made;
  * {
    text-align: center;
  }
}

.main {
  position: relative;

  .timer {
    font-family: Made;
    font-size: 40px;
    text-align: center;
    position: absolute;
    right: -70px;
    display: block;
    width: 50px;
    top: -10px;
    text-align: center;
  }
}

.rounds {
  margin-right: 10px;
  transform: rotate(8deg);
  text-align: center;
  font-family: Made;
  position: fixed;
  right: 15px;
  bottom: 110px;

  .value {
    line-height: 1;
    font-size: 25px;
  }
}

.score {
  margin-top: 15px;
  transform: rotate(8deg);
  text-align: center;
  font-family: Made;
  position: fixed;
  right: 20px;
  bottom: 20px;

  .points {
    white-space: nowrap;
    position: absolute;
    left: -60px;
    bottom: 50px;
    font-size: 30px;
  }

  .value {
    font-weight: bold;
    font-size: 75px;
    line-height: 0.8;
  }

  .text {
    text-align: center;
    line-height: 1;
  }
}

h1 {
  font-family: Made;
  font-size: 30px;
}

h3 {
  font-family: Mermaid;
  font-size: 20px;
}

.title-tip {
  font-family: Made;
  word-spacing: 15px;
  letter-spacing: 5px;
  font-size: 15px;
}

.guess-input {
  ::v-deep input {
    text-align: center;
  }
  max-width: 500px;
}
</style>
++
