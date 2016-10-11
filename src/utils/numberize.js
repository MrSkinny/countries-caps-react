export default function(num) {
  let numStr = parseInt(num, 10).toString();
  let i = 1, currentChar = numStr.length - 1;

  while (currentChar > 0) {
    if (i % 3 === 0) numStr = numStr.slice(0, currentChar) + ',' + numStr.slice(currentChar);
    currentChar--;
    i++
  }

  return numStr;
};
