const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
    total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {

  if (typeof discountRate === 'number' && discountRate > 0 && discountRate < 1) {
    return total - total * discountRate; // Bug: Missing validation for discountRate
  }

  return total;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  if (typeof total !== 'number') {
    receipt += "Total: Invalid total\n";
  } else{
    receipt += `Total: $${total.toFixed(2)}`;
  }
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


/*Document the errors you found and how you fixed them in comments within your GitHub Repo.
1. In the calculateTotal function, the loop condition was changed from i <= cartItems.length to i < cartItems.length to prevent accessing an undefined index.
2. In the applyDiscount function, a validation check was added to ensure that discountRate is a number and it is present between 0 and 1 before applying the discount.
3. In the generateReceipt function, a check was added to ensure that total is a number before calling toFixed on it, preventing potential runtime errors.
*/

/*Explain how debugging tools helped you locate and resolve issues in comments within your GitHub Repo.
1. Console Logs: Added console.log statements to track the flow of data and identify where the values were not as expected.
2. Browser Developer Tools: Used the browser's developer tools to inspect variables and step through the code to see where it deviated from expected behavior.
3. Error Messages: Paid attention to error messages in the console which pointed directly to the lines of code causing issues, making it easier to identify and fix bugs.
*/
