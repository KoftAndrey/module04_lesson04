'use strict';

{
  const convertToRub = (price = 0, euro = 1.2, dollar = 73) => {
    return price * euro * dollar;
  };

  let price = prompt('Укажите сумму покупки в евро.');

  console.log(`Сумма покупки в рублях: ${convertToRub(price)}₽.`);
}
