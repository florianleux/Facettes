<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col class="pt-8">
          <h1 class="pt-2 game-title text-center">Facettes</h1>
        </v-col>
      </v-row>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>

.main-font,.v-btn{
  font-family: Made;
}
.theme--light.v-application {
  background: repeat url("assets/bg.png") !important;
}

@font-face {
  font-family: "Made";
  src: url("assets/fonts/made.otf") format("truetype");
}
@font-face {
  font-family: "Mermaid";
  src: url("assets/fonts/mermaid.ttf") format("truetype");
}

h1.game-title {
  font-family: Made;
  font-size: 55px;
}

*:not(input) {
  user-select: none;
}
</style>
