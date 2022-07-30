// https://calculator.swiftutors.com/operating-expenses-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingExpensesRadio = document.getElementById('operatingExpensesRadio');
const marketingExpensesRadio = document.getElementById('marketingExpensesRadio');
const administrativeExpensesRadio = document.getElementById('administrativeExpensesRadio');

let operatingExpenses;
let marketingExpenses = v1;
let administrativeExpenses = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Marketing Expenses';
  variable2.textContent = 'Administrative Expenses';
  marketingExpenses = v1;
  administrativeExpenses = v2;
  result.textContent = '';
});

marketingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expenses';
  variable2.textContent = 'Administrative Expenses';
  operatingExpenses = v1;
  administrativeExpenses = v2;
  result.textContent = '';
});

administrativeExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expenses';
  variable2.textContent = 'Marketing Expenses';
  operatingExpenses = v1;
  marketingExpenses = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingExpensesRadio.checked)
    result.textContent = `Operating Expenses = ${computeOperatingExpenses().toFixed(2)}`;

  else if(marketingExpensesRadio.checked)
    result.textContent = `Marketing Expenses = ${computeMarketingExpenses().toFixed(2)}`;

  else if(administrativeExpensesRadio.checked)
    result.textContent = `Administrative Expenses = ${computeAdministrativeExpenses().toFixed(2)}`;
})

// calculation

function computeOperatingExpenses() {
  return Number(marketingExpenses.value) + Number(administrativeExpenses.value);
}

function computeMarketingExpenses() {
  return Number(operatingExpenses.value) - Number(administrativeExpenses.value);
}

function computeAdministrativeExpenses() {
  return Number(operatingExpenses.value) - Number(marketingExpenses.value);
}