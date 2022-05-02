<template>
  <v-container>
    <v-row>
      <v-col class="pt-16">
        <v-btn @click="startQuickGame" class="ma-auto d-block">
          Nouvelle Partie
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    startQuickGame() {
      this.$router.push({ name: "GameChoice" });
    },
  },
};
</script>
