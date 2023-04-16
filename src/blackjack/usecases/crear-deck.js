import { shuffle } from "underscore";

/**
 * crea un nuevo deck
 * @param {Array<String>} tiposCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error("tiposCarta es obligatorio como un arreglo de strings");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error(
      "tiposEspeciales es obligatorio como un arreglo de strings"
    );

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  return shuffle(deck);
};
