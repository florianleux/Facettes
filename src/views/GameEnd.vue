<template>
  <v-container class="px-2 mx-12">
    <v-row class="my-4">      <v-col cols="12"><h1>Votre score est de {{playerScore}} {{ $tc("POINTS", playerScore) }} !</h1></v-col></v-row>
   <v-row> <v-btn to="/start" class="mx-auto mb-8">Nouvelle partie !</v-btn></v-row>

    <v-row>      <v-col cols="12"><h2>Galerie de votre partie</h2></v-col></v-row>
    <v-row style="height: 350px;" >
    <v-col cols="3">
      <v-col cols="12" v-for="(painting,index) in columns[0]" v-bind:key="index">
        <v-img :src="painting.imageUrl"/>
        <h4 class="d-block text-center mt-4"> {{painting.title}}</h4>
      </v-col>
    </v-col>
    <v-col cols="3">
      <v-col cols="12" v-for="(painting,index) in columns[1]" v-bind:key="index">
        <v-img :src="painting.imageUrl"/>
        <h4 class="d-block text-center mt-4"> {{painting.title}}</h4>
      </v-col>
    </v-col>
    <v-col cols="3">
      <v-col cols="12" v-for="(painting,index) in columns[2]" v-bind:key="index">
        <v-img :src="painting.imageUrl"/>
        <h4 class="d-block text-center mt-4"> {{painting.title}}</h4>
      </v-col>
    </v-col>
    <v-col cols="3">
      <v-col cols="12" v-for="(painting,index) in columns[3]" v-bind:key="index">
        <v-img :src="painting.imageUrl"/>
        <h4 class="d-block text-center mt-4"> {{painting.title}}</h4>
      </v-col>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "GameEnd",
  computed: {
    ...mapState(["gameHistory","playerScore"]),
    columns(){
      return this.chunkify(this.gameHistory,4)
    }
  },
  methods: {
    chunkify(a, n) {  
      if (n < 2)
        return [a];

      var len = a.length,
          out = [],
          i = 0,
          size;

      if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
          out.push(a.slice(i, i += size));
        }
      } else {
        while (i < len) {
          size = Math.ceil((len - i) / n--);
          out.push(a.slice(i, i += size));
        }
      }

      return out;
    }
  }
};

</script>
<style scoped lang="scss">
h1{
  display: block;
  margin:auto;
  text-align: center;
}
h2{
  font-family: Mermaid;
  display: block;
  margin:auto;
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

.painting{
  -webkit-box-shadow: 0px 0px 18px -6px #000000;
  box-shadow: 0px 0px 18px -6px #000000;
}

</style>
