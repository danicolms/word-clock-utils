import { expect } from "chai";
import { matrix } from "../src/matrix";
import {
  getEntryPositionByParam,
  getVerb,
  getPronoun,
  getHour,
  getConjunction,
  getMinutes,
  getTwelveHourFormatHour,
} from "../src/utils";

describe("Get entry position by parameter tests", () => {
  it("Should get the 'es' entry", () => {
    const expected: number[][] = [
      [0, 0],
      [0, 1],
    ];
    const actual: number[][] = getEntryPositionByParam(matrix, "es");

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'seis' entry", () => {
    const expected: number[][] = [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ];
    const actual: number[][] = getEntryPositionByParam(
      matrix,
      undefined,
      true,
      6
    );

    expect(expected).deep.equal(actual);
  });
});

describe("Verb tests", () => {
  it("Should get the 'es' verb", () => {
    let date: Date = new Date();
    const hour: number = 13;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(matrix, "es");
    const actual: number[][] = getVerb(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'son' verb", () => {
    let date: Date = new Date();
    const hour: number = 14;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(matrix, "son");
    const actual: number[][] = getVerb(date, matrix);

    expect(expected).deep.equal(actual);
  });
});

describe("Pronoun tests", () => {
  it("Should get the 'la' pronoun", () => {
    let date: Date = new Date();
    const hour: number = 13;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(matrix, "la");
    const actual: number[][] = getPronoun(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'las' pronoun", () => {
    let date: Date = new Date();
    const hour: number = 14;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(matrix, "las");
    const actual: number[][] = getPronoun(date, matrix);

    expect(expected).deep.equal(actual);
  });
});

describe("Hour tests", () => {
  it("Should get the 'dos' hour", () => {
    let date: Date = new Date();
    const hour: number = 14;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);
    const expected: number[][] = getEntryPositionByParam(
      matrix,
      undefined,
      true,
      getTwelveHourFormatHour(date)
    );
    const actual: number[][] = getHour(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'ocho' hour", () => {
    let date: Date = new Date();
    const hour: number = 8;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(
      matrix,
      undefined,
      true,
      hour
    );
    const actual: number[][] = getHour(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'doce' hour", () => {
    let date: Date = new Date();
    const hour: number = 0;
    const minutes: number = 0;
    date.setHours(hour);
    date.setMinutes(minutes);

    const expected: number[][] = getEntryPositionByParam(
      matrix,
      undefined,
      true,
      hour
    );
    const actual: number[][] = getHour(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'tres' hour", () => {
    let date: Date = new Date();
    const hour: number = 14;
    const minutes: number = 45;
    date.setHours(hour);
    date.setMinutes(minutes);
    
    const expected: number[][] = getEntryPositionByParam(
      matrix,
      undefined,
      true,
      getTwelveHourFormatHour(date)
    );
    const actual: number[][] = getHour(date, matrix);

-

    expect(expected).deep.equal(actual);
  });
});

describe("Conjunction tests", () => {
  it("Should get the 'y' conjunction", () => {
    let date: Date = new Date();
    date.setMinutes(15);

    const expected: number[][] = getEntryPositionByParam(matrix, "y");
    const actual: number[][] = getConjunction(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'menos' conjunction", () => {
    let date: Date = new Date();
    date.setMinutes(45);

    const expected: number[][] = getEntryPositionByParam(matrix, "menos");
    const actual: number[][] = getConjunction(date, matrix);

    expect(expected).deep.equal(actual);
  });
});

describe("Minutes tests", () => {
  it("Should get the 'diez' minute", () => {
    let date: Date = new Date();
    date.setMinutes(10);

    const expected: number[][] = getEntryPositionByParam(matrix, "diez");
    const actual: number[][] = getMinutes(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'cuarto' minute", () => {
    let date: Date = new Date();
    date.setMinutes(18);

    const expected: number[][] = getEntryPositionByParam(matrix, "cuarto");
    const actual: number[][] = getMinutes(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'veinte' minute", () => {
    let date: Date = new Date();
    date.setMinutes(41);

    const expected: number[][] = getEntryPositionByParam(matrix, "veinte");
    const actual: number[][] = getMinutes(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'veinticinco' minute", () => {
    let date: Date = new Date();
    date.setMinutes(28);

    const expected: number[][] = getEntryPositionByParam(matrix, "veinticinco");
    const actual: number[][] = getMinutes(date, matrix);

    expect(expected).deep.equal(actual);
  });
  it("Should get the 'media' minute", () => {
    let date: Date = new Date();
    date.setMinutes(32);

    const expected: number[][] = getEntryPositionByParam(matrix, "media");
    const actual: number[][] = getMinutes(date, matrix);

    expect(expected).deep.equal(actual);
  });

});