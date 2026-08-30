const money = new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
const preciseMoney = new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const number = (selector) => Number(document.querySelector(selector)?.value || 0);
const updateTools = () => {
  const loss = Math.max(0, number('[data-loss-day]')) * Math.max(0, number('[data-open-days]'));
  const food = Math.max(0, number('[data-sales]')) * Math.max(0, number('[data-points]')) / 100;
  const price = Math.max(0, number('[data-price]'));
  const cost = Math.max(0, number('[data-cost]'));
  document.querySelector('[data-loss-result]').textContent = money.format(loss);
  document.querySelector('[data-food-result]').textContent = money.format(food);
  document.querySelector('[data-dish-food]').textContent = price ? `${new Intl.NumberFormat('fr-CA', { maximumFractionDigits: 1 }).format(cost / price * 100)} %` : '—';
  document.querySelector('[data-margin]').textContent = preciseMoney.format(price - cost);
};
document.querySelectorAll('.calculator-card input').forEach((input) => input.addEventListener('input', updateTools));
updateTools();
