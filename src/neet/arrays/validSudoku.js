// https://leetcode.com/problems/valid-sudoku/
export default function isValidSudoku(board) {
  try {
    const columnMap = new Array(9).fill(1).map(() => ({}));
    const rowMap = new Array(9).fill(1).map(() => ({}));
    const boxes = new Array(9).fill(1).map(() => ({}));
    const boxMap = {
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 1,
      '14': 1,
      '15': 1,
      '16': 2,
      '17': 2,
      '18': 2,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 1,
      '24': 1,
      '25': 1,
      '26': 2,
      '27': 2,
      '28': 2,
      '30': 3,
      '31': 3,
      '32': 3,
      '33': 4,
      '34': 4,
      '35': 4,
      '36': 5,
      '37': 5,
      '38': 5,
      '40': 3,
      '41': 3,
      '42': 3,
      '43': 4,
      '44': 4,
      '45': 4,
      '46': 5,
      '47': 5,
      '48': 5,
      '50': 3,
      '51': 3,
      '52': 3,
      '53': 4,
      '54': 4,
      '55': 4,
      '56': 5,
      '57': 5,
      '58': 5,
      '60': 6,
      '61': 6,
      '62': 6,
      '63': 7,
      '64': 7,
      '65': 7,
      '66': 8,
      '67': 8,
      '68': 8,
      '70': 6,
      '71': 6,
      '72': 6,
      '73': 7,
      '74': 7,
      '75': 7,
      '76': 8,
      '77': 8,
      '78': 8,
      '80': 6,
      '81': 6,
      '82': 6,
      '83': 7,
      '84': 7,
      '85': 7,
      '86': 8,
      '87': 8,
      '88': 8,
      '00': 0,
      '01': 0,
      '02': 0,
      '03': 1,
      '04': 1,
      '05': 1,
      '06': 2,
      '07': 2,
      '08': 2,
    };

    for (let i = 0; i < 9; i++) {
      const val = board[i][i];
      if (val !== '.') {
        if (
          rowMap[i][val] ||
          columnMap[i][val] ||
          boxes[boxMap[`${i}${i}`]][val]
        ) {
          throw new Error('found');
        }

        columnMap[i][val] = true;
        rowMap[i][val] = true;
        boxes[boxMap[`${i}${i}`]][val] = true;
      }

      for (let j = i + 1; j < 9; j++) {
        const colValue = board[i][j];
        const colBoxIndex = boxMap[`${i}${j}`];
        const rowValue = board[j][i];
        const rowBoxIndex = boxMap[`${j}${i}`];

        if (colValue !== '.') {
          if (
            rowMap[i][colValue] ||
            columnMap[j][colValue] ||
            boxes[colBoxIndex][colValue]
          ) {
            throw new Error('duplicated');
          }

          rowMap[i][colValue] = true;
          columnMap[j][colValue] = true;
          boxes[colBoxIndex][colValue] = true;
        }

        if (rowValue !== '.') {
          if (
            rowMap[j][rowValue] ||
            columnMap[i][rowValue] ||
            boxes[rowBoxIndex][rowValue]
          ) {
            throw new Error('duplicated found');
          }

          rowMap[j][rowValue] = true;
          columnMap[i][rowValue] = true;
          boxes[rowBoxIndex][rowValue] = true;
        }
      }
    }

    return true;
  } catch (e) {
    return false;
  }
}

// export function generateBoxMap() {
//   const result = {};
//   const max = 9;
//   let counter = 0;
//   let boxId = 0;
//   for (let row = 0; row < max; row++) {
//     for (let column = 0; column < max; column++) {
//       if (counter === 2) {
//         counter = 0;
//         boxId++;
//       }
//
//       result[`${row}${column}`] = boxId;
//       counter++;
//     }
//   }
//
//   return result;
// }
