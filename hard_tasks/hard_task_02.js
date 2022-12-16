'use strict';

{
  const maxNumber = (num1, num2) => {
    const max = (num1 + num2 + Math.abs(num1 - num2)) / 2;
    return max;
  };

  const value1 = +prompt('Введите первое число.');
  console.log(`${value1} – первое число.`);

  const value2 = +prompt('Введите второе число.');
  console.log(`${value2} – второе число.`);

  console.log(`${maxNumber(value1, value2)} – наибольшее число.`);
}
