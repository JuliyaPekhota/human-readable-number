module.exports = function toReadable (number) {
  const a = ['zero','one','two','three','four', 'five','six','seven','eight','nine', 'ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const b = ['zero','ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  let result = "";
  let fillArray = [...Array(3).fill("0"), ...number.toString()];

if (number === 0) result = "zero";

fillArray = fillArray.slice(-3);

if (Number(fillArray[0]) !== 0) {
  result += `${a[Number(fillArray[0])]} hundred `;
}
if (Number(fillArray[1]) !== 0 && Number(fillArray[1]) > 1) {
  result += `${b[Number(fillArray[1])]} `;
} 
if (Number(fillArray[1]) !== 0 && Number(fillArray[1]) === 1) {
  result += `${a[Number(`${fillArray[1]}${fillArray[2]}`)]} `;
}
if (Number(fillArray[2]) !== 0 && (Number(fillArray[1]) > 1 || Number(fillArray[1]) === 0)) {
  result += `${a[Number(fillArray[2])]}`;
}
      
     return result.trim();
}

