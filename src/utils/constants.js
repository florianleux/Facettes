// Game scoring and similarity thresholds
export const SIMILARITY_THRESHOLDS = {
  EXACT_MATCH: 0.7,
  PARTIAL_MATCH_ADJUSTMENT: 0.6,
  CLOSE_MATCH: 0.5,
  LONG_TITLE_LENGTH: 30,
  MINIMUM_GUESS_LENGTH: 5,
};

// Title hint configuration
export const TITLE_HINT = {
  CHARACTER_REVEAL_PROBABILITY: 0.35,
  PRESERVED_CHARACTERS: [" ", ",", "!", ":", "'"],
};

// Image rendering configuration
export const IMAGE_RENDERING = {
  INITIAL_PERCENT: 0.01,
  MAX_RENDER_PERCENT: 0.8,
  FINAL_PERCENT: 1,
  SMALL_INCREMENT: 0.01,
  LARGE_INCREMENT: 0.1,
  THRESHOLD: 0.1,
  TIMER_DIVISIONS: 11,
};

// Pixel hint probability for title masking
export const PIXEL_HINT_PROB = 0.65;
