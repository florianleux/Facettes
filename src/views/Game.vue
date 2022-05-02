<template>
  <v-container>
    <v-row>
      <div class="mt-16 mb-4 mx-auto main">
        <canvas id="Canvas">
        </canvas>
        <div
            class=" timer"
            :class="{'animate__animated animate__infinite	animate__heartBeat' : timer >0}"
        >
          <template v-if="!success && timer>0">
            {{ timer }}
          </template>
<!--          <v-icon-->
<!--              v-else-if="success"-->
<!--              color="#ffc800"-->
<!--              large-->
<!--          >-->
<!--            fa-trophy-->
<!--          </v-icon>-->

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
          <v-btn v-if="currentRound<settings.rounds" class="mx-auto d-block mt-4" @click="loadImage">
            Suivant
          </v-btn>
          <v-btn v-else class="mx-auto d-block mt-4" @click="$router.push({ name: 'GameEnd' })">
            Bilan de la partie
          </v-btn>
        </div>
        <v-form
            autocomplete="off"
            v-else-if="timer > 0"
            class="game-form mx-auto"
            @enter.prevent.stop="submit"
            @submit.prevent.stop="submit"
        >
            <h1 class=" mb-6 text-center">
              {{titleTip}}
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
          <v-icon
              class="d-block mx-auto text-center"
              color="error"
              large
          >
            far fa-frown
          </v-icon>
          <div class="error--text main-font d-block mx-auto text-center">
            Oh non, temps écoulé !
          </div>
          <v-btn
              class="mt-6 mx-auto d-block text-center"
              @click.stop="
            answerShown = true;
            renderImage(1)
            "
          >
            Solution
          </v-btn>
        </div>

      </v-col>
    </v-row>

    <div class="rounds">
      <div class="text">Round</div>
      <div class="value">{{ currentRound }}/{{ settings.rounds }}</div>
    </div>
    <div class="score">
      <div v-if="points > 0" class="points animate__animated animate__fadeInUp">+ {{ points }}</div>
      <div class="value">{{ playerScore }}</div>
      <div class="text">{{ $tc("POINTS", playerScore) }}</div>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { compareTwoStrings } from "string-similarity";

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
    titleTip:null,
    validationMessage: {
      text: "",
      color: "",
      show: false
    }
  }),
  mounted() {
    this.loadImage();
  },
  computed: {
    ...mapState(["playerScore"]),
    timerInterval() {
      return Math.floor(this.settings.time / 11);
    },
    settings() {
      return this.$store.state.settings[this.$store.state.difficulty];
    }
  },
  methods: {
    ...mapActions(["incrementScore"]),
    replace(str) {
      return str.split("").map(char => {
       return Math.random() > 0.35 && ![" ", ",", "!",":", "'"].includes(char) ? "_" : char
      }).join("");
    },
    startRender() {
      var _this = this;

      if (this.percent < 1 && this.timer > 0) {
        setTimeout(
            function() {
              if (_this.percent <= 0.8) {
                _this.percent +=
                    _this.percent > 0.1 ? 0.1 : 0.01;
              } else {
                _this.percent = 1;
              }

              _this.renderImage(_this.percent);

              if (_this.percent < 0.99 && _this.timer > 0) {
                _this.startRender();
              }
            },
            this.timerInterval * 1000
        );
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
      let score = compareTwoStrings(
          this.titleGuess
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""),
          this.pickedPainting.title
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
      );

      if (
          score > 0.7 ||
          (this.pickedPainting.title.toLowerCase().length > 30 && score > 0.6)
      ) {
        this.validationMessage.text = "Bravo !";
        this.validationMessage.color = "success";

        this.points = Math.floor((1 / this.percent) / 5) + 1;

        setTimeout(() => {
          this.$store.state.gameHistory[this.currentRound-1].points =this.points;
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
          score > 0.5 ||
          (this.pickedPainting.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(
                      this.titleGuess
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                  ) &&
              this.titleGuess.toLowerCase().length > 5)
      ) {
        this.validationMessage.text = "Presque...";
        this.validationMessage.color = "warning";
      } else {
        this.validationMessage.text = "Non !";
        this.validationMessage.color = "error";
      }

      this.validationMessage.show = true;
      setTimeout(() => {
        this.titleGuess = "";
      }, 1000);
    },
    loadImage() {
      this.resetGame();
      let canvas, context;

      canvas = document.getElementById("Canvas");
      context = canvas.getContext("2d");

      // This is what gives us that blocky pixel styling, rather than a blend between pixels.

      let image = new Image();

      let _this = this;

      image.onload = function() {
        _this.percent = 0.01;

        let ratio = image.width / image.height;

        if (image.height > window.innerHeight * 0.5) {
          image.height = window.innerHeight * 0.5;
          image.width = image.height * ratio;
        }

        // Get the dimensions of loaded image.
        var width = image.width;
        var height = image.height;

        canvas.width = width;
        canvas.height = height;

        canvas.style.cssText =
            "image-rendering: optimizeSpeed;" + // FireFox < 6.0
            "image-rendering: -moz-crisp-edges;" + // FireFox
            "image-rendering: -o-crisp-edges;" + // Opera
            "image-rendering: -webkit-crisp-edges;" + // Chrome
            "image-rendering: crisp-edges;" + // Chrome
            "image-rendering: -webkit-optimize-contrast;" + // Safari
            "image-rendering: pixelated; " + // Future browsers
            "-ms-interpolation-mode: nearest-neighbor;"; // IE

        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        // Calculate the scaled dimensions.
        var scaledWidth = width * _this.percent;
        var scaledHeight = height * _this.percent;

        // Render image smaller.
        context.drawImage(image, 0, 0, scaledWidth, scaledHeight);

        // Stretch the smaller image onto larger context.
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

        _this.width = width;
        _this.height = height;

        _this.canvas = canvas;
        _this.image = image;
        _this.context = context;

        _this.startRender();
      };

      image.src = _this.pickPainting(
          _this.settings.maxIndex
      );
      // image.src = "https://avalon.fabiosacdn.com/image/d3783d23-d946-41ea-ac41-d1acac3e8332.jpg"
    },
    pickPainting(maxIndex) {
      let index = -1;

      index = Math.floor(Math.random() * maxIndex);

      while (this.pickedPaintingIndexes.includes(index)) {
        index = Math.floor(Math.random() * maxIndex);
      }

      this.pickedPainting = this.$store.state.paintingList[index];
      this.titleTip = this.replace(this.pickedPainting.title);
      this.pickedPaintingIndexes.push(index);

      this.currentRound++;
      this.$store.state.gameHistory.push(
          this.$store.state.paintingList[index]
      )
      return this.$store.state.paintingList[index].imageUrl;
    },
    resetGame(){
      this.timer = this.settings.time;      this.success = false;      this.answerShown = false;
     this.gamePaused = false;
      this.startTimer();
    },
    startTimer() {
      this.timer--;
      let _this = this;
      if (this.timer > 0 & !this.success) {
        setTimeout(() => {
          _this.startTimer();
        }, 1000);
      }
    }
  }
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
  *{text-align: center  ;}
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

.guess-input{
  ::v-deep input{text-align: center;}
  max-width: 500px;
}
</style>
++
