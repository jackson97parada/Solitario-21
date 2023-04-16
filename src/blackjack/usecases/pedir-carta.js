/**
 * crea una nueva carta
 * @param {Array<String>} deck Ejemplo: ["AC", "AD", "AH", "AS"]
 * @returns {String} retorna una nueva carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("No hay cartas en el deck");
  }
  return deck.pop();
};
