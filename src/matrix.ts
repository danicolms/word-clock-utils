export interface IMatrixItem {
  word: string;
  number?: number;
  position: number[][];
}

const verbs: IMatrixItem[] = [
  {
    word: "es",
    position: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    word: "son",
    position: [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
  },
];

const pronouns: IMatrixItem[] = [
  {
    word: "la",
    position: [
      [0, 5],
      [0, 6],
    ],
  },
  {
    word: "las",
    position: [
      [0, 5],
      [0, 6],
      [0, 7],
    ],
  },
];

const hours: IMatrixItem[] = [
  {
    word: "una",
    number: 1,
    position: [
      [0, 8],
      [0, 9],
      [0, 10],
    ],
  },
  {
    word: "dos",
    number: 2,
    position: [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  },
  {
    word: "tres",
    number: 3,
    position: [
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
    ],
  },
  {
    word: "cuatro",
    number: 4,
    position: [
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ],
  },
  {
    word: "cinco",
    number: 5,
    position: [
      [2, 6],
      [2, 7],
      [2, 8],
      [2, 9],
      [2, 10],
    ],
  },
  {
    word: "seis",
    number: 6,
    position: [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
  },
  {
    word: "siete",
    number: 7,
    position: [
      [3, 5],
      [3, 6],
      [3, 7],
      [3, 8],
      [3, 9],
    ],
  },
  {
    word: "ocho",
    number: 8,
    position: [
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
    ],
  },
  {
    word: "nueve",
    number: 9,
    position: [
      [4, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [4, 8],
    ],
  },
  {
    word: "diez",
    number: 10,
    position: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },
  {
    word: "once",
    number: 11,
    position: [
      [5, 7],
      [5, 8],
      [5, 9],
      [5, 10],
    ],
  },
  {
    word: "doce",
    number: 0,
    position: [
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
    ],
  },
];

const conjuntions: IMatrixItem[] = [
  {
    word: "y",
    position: [[6, 5]],
  },
  {
    word: "menos",
    position: [
      [6, 6],
      [6, 7],
      [6, 8],
      [6, 9],
      [6, 10],
    ],
  },
];

const minutes: IMatrixItem[] = [
  {
    word: "veinte",
    position: [
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
    ],
  },
  {
    word: "diez",
    position: [
      [7, 7],
      [7, 8],
      [7, 9],
      [7, 10],
    ],
  },
  {
    word: "veinticinco",
    position: [
      [8, 0],
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 4],
      [8, 5],
      [8, 6],
      [8, 7],
      [8, 8],
      [8, 9],
      [8, 10],
    ],
  },
  {
    word: "veinticinco",
    position: [
      [8, 0],
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 4],
      [8, 5],
      [8, 6],
      [8, 7],
      [8, 8],
      [8, 9],
      [8, 10],
    ],
  },
  {
    word: "media",
    position: [
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
      [9, 4],
    ],
  },
  {
    word: "cuarto",
    position: [
      [9, 5],
      [9, 6],
      [9, 7],
      [9, 8],
      [9, 9],
      [9, 10],
    ],
  },
];

export const matrix: IMatrixItem[] = [
  ...verbs,
  ...pronouns,
  ...hours,
  ...conjuntions,
  ...minutes,
];
