// 是否為正整數
function isPositiveInteger(inputAge) {
  const positiveInteger = /^\d+$/;
  return positiveInteger.test(inputAge);
}

// 是否半價
function isHalfPrice(inputAge) {
  return +inputAge <= 6 || +inputAge >= 65;
}

module.exports = { isPositiveInteger, isHalfPrice };
