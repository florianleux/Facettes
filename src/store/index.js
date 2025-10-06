import Vue from "vue";
import Vuex from "vuex";
import paintingList from "@/data/paintings.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paintingList,
    gameHistory: [],
    playerScore: 0,
    difficulty: "easy",
    gameStarted: false, // Flag to track if game was properly started
    settings: {
      easy: {
        rounds: 10,
        maxIndex: 40,
        time: 30,
      },
      medium: {
        rounds: 15,
        maxIndex: 80,
        time: 30,
      },
      hard: {
        rounds: 20,
        maxIndex: 230,
        time: 30,
      },
      custom: {
        rounds: null,
        maxIndex: null,
        time: null,
      },
    },
  },
  mutations: {
    INCREMENT_SCORE: (state, value) => {
      state.playerScore += value;
    },
    SET_DIFFICULTY: (state, value) => {
      state.difficulty = value;
      state.playerScore = 0;
      state.gameHistory = [];
      state.gameStarted = true; // Mark game as started
    },
    SET_ROUND_POINTS: (state, { roundIndex, points }) => {
      if (state.gameHistory[roundIndex]) {
        state.gameHistory[roundIndex].points = points;
      }
    },
    ADD_GAME_HISTORY: (state, painting) => {
      state.gameHistory.push(painting);
    },
    RESET_GAME_HISTORY: (state) => {
      state.gameHistory = [];
    },
  },
  actions: {
    incrementScore({ commit }, value) {
      commit("INCREMENT_SCORE", value);
    },
    setDifficulty({ commit }, value) {
      commit("SET_DIFFICULTY", value);
    },
    setRoundPoints({ commit }, payload) {
      commit("SET_ROUND_POINTS", payload);
    },
    addGameHistory({ commit }, painting) {
      commit("ADD_GAME_HISTORY", painting);
    },
    resetGameHistory({ commit }) {
      commit("RESET_GAME_HISTORY");
    },
  },
  modules: {},
});
