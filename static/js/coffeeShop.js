"use strict";

const addItemToCart = (evt) => {
  const item = $(evt.target);
  const itemId = item.attr('id');
  console.log('Added item!', evt)
  $('#cart-items').append(`
    <tr>
      <td>${evt.target.parentElement.parentNode.children[0].innerHTML}</td>
    </tr>
  `);
};

const button = $('.add-to-order') 

button.on('click', addItemToCart);

//   button.on('click', (evt) => {
//   console.log(itemId)
// });






const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
