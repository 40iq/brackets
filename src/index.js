 module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracketsConfigOpenClosed = [];
  bracketsConfig.forEach((item) => {
    bracketsConfigOpenClosed.push(`${item[0]}${item[1]}`);
  })

  for (let i = 0; i < str.length; i++) {
    let eachTwoSymbleOfStr = str.slice(i, i + 2);
    
    if (str.length === 2) {eachTwoSymbleOfStr = str}
    
    let isEqual = 0;
    
    bracketsConfigOpenClosed.map((item) => {
      if (item === eachTwoSymbleOfStr) {isEqual = true};
    });

    if (isEqual) {
      if (str.length === 2) {
        str = str.slice(0, 0)
      } else {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
      }
      i = 0;
    }  
  }
  if (str === '') {return true}
  else {return false}
}