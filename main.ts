export const initGrid = (x:number, y:number) => {
  return Array.from({ length: x }, () => Array(y).fill(false));
}

//function to find the second largest number in an array
const findSecondLargest = (arr: number[]) => {
  let first = -Infinity;
  let second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if(num < first && num > second) {
      second = num;
    }
  }
  return second;
}