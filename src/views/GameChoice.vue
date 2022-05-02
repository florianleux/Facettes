<template>
  <v-container>
    <v-row>
      <v-btn
          class="d-block mt-16 mb-4 mx-auto"
          @click="startGame('easy')"
      >
        Facile
      </v-btn>
    </v-row>
    <div class="game-mode mt-2 mb-8 d-block text-center mx-auto">10 oeuvres au hasard parmi les 40 tableaux plus populaires de la galerie : idéal pour se mettre en jambes ! </div>

    <v-row>
      <v-btn
          class="d-block my-4 mx-auto"
          @click="startGame('medium')"
      >
        Moyen
      </v-btn>
    </v-row>
    <div class="mt-2 mb-8 game-mode d-block text-center mx-auto">15 oeuvres au hasard parmi les 80 tableaux plus populaires de la galerie : on ne rigole plus ! </div>

    <v-row>
      <v-btn
          class="d-block my-4 mx-auto"
          @click="startGame('hard')"
      >
        Difficile
      </v-btn>

    </v-row>
    <div class="game-mode  mt-2 mb-8 d-block text-center mx-auto">20 oeuvres au hasard parmi les toute la galerie : le défi ultime ! </div>

    <!--    <v-row>-->
<!--      <v-btn class="d-block my-4 mx-auto">-->
<!--        Partie Personnalisée-->
<!--      </v-btn>-->
<!--    </v-row>-->
  </v-container>
</template>

<script>

export default {
  name: "GameChoice",

  data: () => ({}),
  methods:{
    startGame(difficulty){
      this.$store.dispatch('setDifficulty', difficulty)
      this.$router.push({ name: "Game" });

    }
  }
};
</script>
<style scoped lang="scss">
.game-mode{
  font-family: Mermaid;
  font-size: 15px;
  font-style: italic;
}
</style>
