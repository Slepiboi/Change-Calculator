document.getElementById('calculate-change').addEventListener('click', () => {
  const amountDue = parseFloat(document.getElementById('amount-due').value) || 0;
  const amountReceived = parseFloat(document.getElementById('amount-received').value) || 0;

  // Convert to total cents to avoid floating-point math issues
  let remainingCents = Math.round((amountReceived - amountDue) * 100);

  if (remainingCents < 0) {
    remainingCents = 0;
  }

  // Calculate denominations
  const dollars = Math.floor(remainingCents / 100);
  remainingCents %= 100;

  const quarters = Math.floor(remainingCents / 25);
  remainingCents %= 25;

  const dimes = Math.floor(remainingCents / 10);
  remainingCents %= 10;

  const nickels = Math.floor(remainingCents / 5);
  remainingCents %= 5;

  const pennies = remainingCents;

  // Update DOM elements
  document.getElementById('dollars-output').innerText = dollars;
  document.getElementById('quarters-output').innerText = quarters;
  document.getElementById('dimes-output').innerText = dimes;
  document.getElementById('nickels-output').innerText = nickels;
  document.getElementById('pennies-output').innerText = pennies;
});
