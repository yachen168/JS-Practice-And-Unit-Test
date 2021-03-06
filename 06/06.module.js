// 是否皆為英文字
function isEnglishNames(names) {
  const EnglishName = /^[A-z]+$/;
  return names.every((name) => EnglishName.test(name));
}

// 取得奇數字母
function getOddAlphabet(names) {
  let oddAlphabet = "";
  const firstAndThirdName = [names[0], names[2]];
  for (let value of firstAndThirdName) {
    for (let index in value) {
      if (!(index % 2)) {
        oddAlphabet += value[index];
      }
    }
  }
  return oddAlphabet;
}

module.exports = { isEnglishNames, getOddAlphabet };
