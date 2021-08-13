
let number = 0;
let word = '';
module.exports = function toReadable (number) {
  let unit = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if (number < 20){
    return word = unit[number];
  } else if (number === 0){
    return word = '0';
  }
   else if(number >= 20 && number < 100){
      return word = `${tens[Math.trunc(number/10)]} ${unit[number%10]}`;
    } else if(number >=100 && number < 1000){
        if(number%100 > 0 && number%100 < 10){
          return word = `${unit[Math.trunc(number/100)]} hundred ${unit[number%100]}`;
        }else if (number%100 > 9 && number%100 < 20){
          return word = `${unit[Math.trunc(number/100)]} hundred ${unit[number%100]}`;
        }else{
          return word = `${unit[Math.trunc(number/100)]} hundred ${tens[(Math.trunc(number/10))%10]} ${unit[number%10]}`;
        } 
      }
    return word;
}
