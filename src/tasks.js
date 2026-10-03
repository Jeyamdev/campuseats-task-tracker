// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
  "Test checkout flow",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    throw new TypeError("price and quantity must be valid numbers");
  }

  if (price < 0 || quantity < 0) {
    throw new RangeError("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// Secrets must be provided through environment variables,
// e.g. process.env.API_KEY — never hard-coded.

module.exports = { calculateTotal };