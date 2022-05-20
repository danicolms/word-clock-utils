import { IMatrixItem } from "./matrix";

/**
 * Get 12 hour format hour value in date.
 * @param {Date} date the date from which the hour will be parsed.
 * @returns {number} the hour number in 12 hour format.
 */
export const getTwelveHourFormatHour = (date: Date): number => {
  const hour = date.getHours();
  const minutes = date.getMinutes();


  if (minutes >= 35) {
    return (hour + 1) < 12 ? (hour + 1) : (hour + 1) - 12
  } else {
    return hour < 12 ? hour : hour - 12
  }
};

/**
 * Find an entry in the matrix by the word attribute.
 * @param {IMatrixItem[]} matrix the matrix containing all the entries.
 * @param {string} [word] the word to be filtered in the matrix entries.
 * @param {boolean} [hasNumber] asserts if the filter is a word or a number.
 * @param {number} [number] the number to be filtered in the matrix entries.
 * @returns {number[][]} the entry positions of the selected word or number.
 */
export const getEntryPositionByParam = (
  matrix: IMatrixItem[],
  word?: string,
  hasNumber: boolean = false,
  number?: number
): number[][] => {
  try {
    const entry = matrix.find((entry) => {


      if (hasNumber) {
        // const twelveHourFormatNumber = number <= 12 ? number : number - 12;
        if (entry.number === number) {
          return entry;
        }
      } else if (entry.word === word && entry.number === undefined) {
        return entry;
      } else {
        return undefined;
      }
    });

    return entry.position;
  } catch (error: any) {
    throw error;
  }
};

/**
 * Get the correct verb for the selected date.
 * @param {Date} date the date from which the verb will be selected.
 * @returns {number[][]} the position of the verb in the matrix.
 */
export const getVerb = (date: Date, matrix: IMatrixItem[]): number[][] => {
  try {
    return getTwelveHourFormatHour(date) === 1
      ? getEntryPositionByParam(matrix, "es")
      : getEntryPositionByParam(matrix, "son");
  } catch (error: any) {
    console.error("Error: Couldn't find the verb for the selected date.");
    console.error("----");
    console.error(error);
  }
};

/**
 * Get the correct pronoun for the selected date.
 * @param {Date} date the date from which the pronoun will be selected.
 * @param {IMatrixItem[]} matrix the matrix containing all the entries.
 * @returns {number[][]} the position of the pronoun in the matrix.
 */
export const getPronoun = (date: Date, matrix: IMatrixItem[]): number[][] => {
  try {
    return getTwelveHourFormatHour(date) === 1
      ? getEntryPositionByParam(matrix, "la")
      : getEntryPositionByParam(matrix, "las");
  } catch (error: any) {
    console.error("Error: Couldn't find the pronoun for the selected date.");
    console.error("----");
    console.error(error);
  }
};

/**
 * Get the hour for the selected date.
 * @param {Date} date the date from which the hour will be selected.
 * @param {IMatrixItem[]} matrix the matrix containing all the entries.
 * @returns {number[][]} the position of the hour in the matrix.
 */
export const getHour = (date: Date, matrix: IMatrixItem[]): number[][] => {
  try {
    return getEntryPositionByParam(
      matrix,
      undefined,
      true,
      getTwelveHourFormatHour(date)
    );
  } catch (error: any) {
    console.error("Error: Couldn't find the hour for the selected date.");
    console.error("----");
    console.error(error);
  }
};

/**
 * Get the conjunction for the selected date.
 * @param {Date} date the date from which the conjunction will be selected.
 * @param {IMatrixItem[]} matrix the matrix containing all the entries.
 * @returns {number[][]} the position of the conjunction in the matrix.
 */
export const getConjunction = (
  date: Date,
  matrix: IMatrixItem[]
): number[][] => {
  try {
    return date.getMinutes() > 30
      ? getEntryPositionByParam(matrix, "menos")
      : getEntryPositionByParam(matrix, "y");
  } catch (error: any) {
    console.error(
      "Error: Couldn't find the conjunction for the selected date."
    );
    console.error("----");
    console.error(error);
  }
};

/**
 * Get the minutes for the selected date.
 * @param {Date} date the date from which the minutes will be selected.
 * @param {IMatrixItem[]} matrix the matrix containing all the entries.
 * @returns {number[][]} the position of the minutes in the matrix.
 */
export const getMinutes = (
  date: Date,
  matrix: IMatrixItem[]
): number[][] | undefined => {
  try {
    const minutes: number = date.getMinutes();
    let value: string | undefined = undefined;

    if ((minutes >= 10 && minutes < 15) || (minutes >= 50 && minutes <= 59)) {
      value = "diez";
    } else if (
      (minutes >= 15 && minutes < 20) ||
      (minutes >= 45 && minutes < 50)
    ) {
      value = "cuarto";
    } else if ((minutes >= 20 && minutes < 25) || (minutes >= 40 && minutes < 45)) {
      value = "veinte";
    } else if (
      (minutes >= 25 && minutes < 30) ||
      (minutes >= 35 && minutes < 40)
    ) {
      value = "veinticinco";
    } else if (minutes >= 30 && minutes < 35) {
      value = "media";
    }

    if (value) {
      return getEntryPositionByParam(matrix, value);
    } else {
      return;
    }
  } catch (error: any) {
    console.error("Error: Couldn't find the minutes for the selected date.");
    console.error("----");
    console.error(error);
  }
};
