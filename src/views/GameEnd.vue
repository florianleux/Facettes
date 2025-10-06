<template>
  <v-container class="px-2 mx-12">
    <v-row class="my-4">
      <v-col cols="12">
        <h1>{{ $t("GAME_END.SCORE", { score: playerScore }) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-btn to="/start" class="mx-auto mb-8">
        {{ $t("GAME_END.NEW_GAME") }}
      </v-btn>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>{{ $t("GAME_END.GALLERY") }}</h2>
      </v-col>
    </v-row>
    <v-row style="height: 350px">
      <v-col cols="3">
        <v-col cols="12" v-for="painting in columns[0]" :key="painting.id">
          <v-img :src="painting.imageUrl" />
          <h4 class="d-block text-center mt-4">{{ painting.title }}</h4>
        </v-col>
      </v-col>
      <v-col cols="3">
        <v-col cols="12" v-for="painting in columns[1]" :key="painting.id">
          <v-img :src="painting.imageUrl" />
          <h4 class="d-block text-center mt-4">{{ painting.title }}</h4>
        </v-col>
      </v-col>
      <v-col cols="3">
        <v-col cols="12" v-for="painting in columns[2]" :key="painting.id">
          <v-img :src="painting.imageUrl" />
          <h4 class="d-block text-center mt-4">{{ painting.title }}</h4>
        </v-col>
      </v-col>
      <v-col cols="3">
        <v-col cols="12" v-for="painting in columns[3]" :key="painting.id">
          <v-img :src="painting.imageUrl" />
          <h4 class="d-block text-center mt-4">{{ painting.title }}</h4>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GameEnd",
  created() {
    // Check if user arrived here properly (not via refresh)
    if (!this.$store.state.gameStarted || this.gameHistory.length === 0) {
      // User refreshed or navigated directly - redirect to home
      this.$router.replace({ name: "Home" });
    }
  },
  computed: {
    ...mapState(["gameHistory", "playerScore"]),
    columns() {
      return this.chunkify(this.gameHistory, 4);
    },
  },
  methods: {
    chunkify(arr, numColumns) {
      if (numColumns < 2) return [arr];

      const len = arr.length;
      const out = [];
      let i = 0;
      let size;

      if (len % numColumns === 0) {
        size = Math.floor(len / numColumns);
        while (i < len) {
          out.push(arr.slice(i, (i += size)));
        }
      } else {
        let n = numColumns;
        while (i < len) {
          size = Math.ceil((len - i) / n--);
          out.push(arr.slice(i, (i += size)));
        }
      }

      return out;
    },
  },
};
</script>
<style scoped lang="scss">
h1 {
  display: block;
  margin: auto;
  text-align: center;
}
h2 {
  font-family: Mermaid;
  display: block;
  margin: auto;
  text-align: center;
  font-size: 25px;
}
h4 {
  font-family: Made;
  font-size: 18px;
}

h5 {
  font-family: Mermaid;
  font-size: 13px;
}

.painting {
  -webkit-box-shadow: 0px 0px 18px -6px #000000;
  box-shadow: 0px 0px 18px -6px #000000;
}
</style>
