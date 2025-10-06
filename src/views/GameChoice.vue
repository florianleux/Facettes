<template>
  <v-container>
    <v-row>
      <v-btn class="d-block mt-16 mb-4 mx-auto" @click="startGame('easy')">
        {{ $t("DIFFICULTY.EASY") }}
      </v-btn>
    </v-row>
    <div class="game-mode mt-2 mb-8 d-block text-center mx-auto">
      {{ $t("DIFFICULTY.EASY_DESC") }}
    </div>

    <v-row>
      <v-btn class="d-block my-4 mx-auto" @click="startGame('medium')">
        {{ $t("DIFFICULTY.MEDIUM") }}
      </v-btn>
    </v-row>
    <div class="mt-2 mb-8 game-mode d-block text-center mx-auto">
      {{ $t("DIFFICULTY.MEDIUM_DESC") }}
    </div>

    <v-row>
      <v-btn class="d-block my-4 mx-auto" @click="startGame('hard')">
        {{ $t("DIFFICULTY.HARD") }}
      </v-btn>
    </v-row>
    <div class="game-mode mt-2 mb-8 d-block text-center mx-auto">
      {{ $t("DIFFICULTY.HARD_DESC") }}
    </div>
  </v-container>
</template>

<script>
export default {
  name: "GameChoice",

  methods: {
    startGame(difficulty) {
      this.$store.dispatch("setDifficulty", difficulty);
      this.$router.push({ name: "Game" });
    },
  },
};
</script>
<style scoped lang="scss">
.game-mode {
  font-family: Mermaid;
  font-size: 15px;
  font-style: italic;
}
</style>
