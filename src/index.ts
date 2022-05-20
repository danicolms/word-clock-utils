import { matrix } from "./matrix";
import {
  getVerb,
  getPronoun,
  getHour,
  getConjunction,
  getMinutes,
} from "./utils";

export const getCurrentTimePositions = (date: Date): number[][] => {

  return [
    ...getVerb(date, matrix),
    ...getPronoun(date, matrix),
    ...getHour(date, matrix),
    ...getConjunction(date, matrix),
    ...getMinutes(date, matrix),
  ];
};

