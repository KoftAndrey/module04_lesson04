'use strict';

{
  const greatestCommonDivisor = (num1, num2) => {
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    while (num1 !== num2) {
      num1 = Math.abs(num1);
      num2 = Math.abs(num2);

      if (num1 > num2) {
        num1 = num1 - num2;
      } else {
        num2 = num2 - num1;
      }
    }
    return num1;
  };

  let value1 = +prompt('Введите первое число.');
  console.log(`${value1} – первое число.`);

  let value2 = +prompt('Введите второе число.');
  console.log(`${value2} – второе число.`);

  console.log(`Наибольший общий делитель указанных чисел равен ${greatestCommonDivisor(value1,value2)}.`);
}
