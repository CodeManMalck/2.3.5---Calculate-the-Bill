function calculateBillTotal(total) {
  var tax = total * 0.095;
  var tip = total * 0.2;

  return total + tax + tip;
}

console.log(calculateBillTotal());
