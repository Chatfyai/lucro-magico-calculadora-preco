
import { PricingData } from '@/components/PricingCalculator';

export const calculatePricing = (data: PricingData) => {
  // Custo com desconto do fornecedor
  const discountAmount = (data.productCost * data.supplierDiscount) / 100;
  const costWithDiscount = data.productCost - discountAmount;

  // Cálculo dos impostos sobre o custo do produto (não sobre o preço base)
  const totalTaxes = (costWithDiscount * data.taxes) / 100;

  // Preço base com margem de lucro
  const basePrice = costWithDiscount * (1 + data.profitMargin / 100);

  // Despesas fixas
  const totalFixedExpenses = data.fixedExpenses;

  // Despesas adicionais
  let totalAdditionalExpenses = 0;
  data.additionalExpenses.forEach(expense => {
    if (expense.type === 'percentage') {
      totalAdditionalExpenses += (basePrice * expense.value) / 100;
    } else {
      totalAdditionalExpenses += expense.value;
    }
  });

  // Total de todas as despesas
  const totalExpenses = totalTaxes + totalFixedExpenses + totalAdditionalExpenses;

  // Preço final de venda
  const finalPrice = basePrice + totalExpenses;

  // Lucro real
  const profit = finalPrice - costWithDiscount - totalExpenses;

  // Margem de lucro real
  const profitMargin = ((profit / costWithDiscount) * 100);

  // Dados para gráfico de pizza
  const chartData = [
    { name: 'Custo do Produto', value: costWithDiscount },
    { name: 'Impostos', value: totalTaxes },
    { name: 'Despesas Fixas', value: totalFixedExpenses },
    { name: 'Despesas Adicionais', value: totalAdditionalExpenses },
    { name: 'Lucro', value: profit }
  ].filter(item => item.value > 0);

  // Dados para gráfico de barras
  const barChartData = [
    { name: 'Custo Original', value: data.productCost },
    { name: 'Custo c/ Desconto', value: costWithDiscount },
    { name: 'Preço Base', value: basePrice },
    { name: 'Preço Final', value: finalPrice },
    { name: 'Lucro', value: profit }
  ];

  return {
    finalCost: data.productCost,
    costWithDiscount,
    basePrice,
    totalTaxes,
    totalFixedExpenses,
    totalAdditionalExpenses,
    totalExpenses,
    finalPrice,
    profit,
    profitMargin,
    chartData,
    barChartData
  };
};
