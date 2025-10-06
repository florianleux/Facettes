/**
 * Normalizes a string for comparison by removing accents and converting to lowercase
 * @param {string} str - The string to normalize
 * @returns {string} - The normalized string
 */
export function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Calculates a title hint by randomly replacing characters with underscores
 * @param {string} str - The original title
 * @param {number} probability - Probability of revealing each character (0-1)
 * @param {Array<string>} preservedChars - Characters that should never be hidden
 * @returns {string} - The title with characters replaced by underscores
 */
export function createTitleHint(
  str,
  probability = 0.35,
  preservedChars = [" ", ",", "!", ":", "'"]
) {
  return str
    .split("")
    .map((char) => {
      return Math.random() > probability && !preservedChars.includes(char)
        ? "_"
        : char;
    })
    .join("");
}
