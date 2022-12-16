'use strict';

{
  const calculate = (cartTotal = 0, productQuantity = 0, promoCode = '') => {
    if (productQuantity > 10) {
      cartTotal *= 0.97;
    }

    if (cartTotal > 30000) {
      cartTotal = (cartTotal - 30000) * 0.85 + 30000;
    }

    if (promoCode === 'METHED') {
      cartTotal *= 0.9;
    }

    if (promoCode === 'G3H2Z1' && cartTotal > 2000) {
      cartTotal -= 500;
    }

    return cartTotal;
  };

  console.log(calculate(300000, 12, 'G3H2Z1'));
}
