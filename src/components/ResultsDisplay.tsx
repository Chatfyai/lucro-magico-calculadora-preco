
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ResultsProps {
  results: {
    finalCost: number;
    costWithDiscount: number;
    basePrice: number;
    totalTaxes: number;
    totalFixedExpenses: number;
    totalAdditionalExpenses: number;
    totalExpenses: number;
    finalPrice: number;
    profit: number;
    profitMargin: number;
    chartData: any[];
    barChartData: any[];
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ResultsDisplay: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="space-y-6">
      {/* Resumo dos Resultados */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-green-800">
            Resultados da Precificação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Custo Final</p>
              <p className="text-lg font-bold text-blue-800">
                R$ {results.costWithDiscount.toFixed(2)}
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Preço de Venda</p>
              <p className="text-lg font-bold text-green-800">
                R$ {results.finalPrice.toFixed(2)}
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">Lucro</p>
              <p className="text-lg font-bold text-purple-800">
                R$ {results.profit.toFixed(2)}
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="text-sm text-orange-600 font-medium">Margem Real</p>
              <p className="text-lg font-bold text-orange-800">
                {results.profitMargin.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Detalhamento dos Custos:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Custo com desconto:</span>
                <span>R$ {results.costWithDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Impostos:</span>
                <span>R$ {results.totalTaxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Despesas fixas:</span>
                <span>R$ {results.totalFixedExpenses.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Despesas adicionais:</span>
                <span>R$ {results.totalAdditionalExpenses.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total de despesas:</span>
                <span>R$ {results.totalExpenses.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de Pizza - Composição do Preço */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Composição do Preço de Venda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={results.chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {results.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfico de Barras - Comparativo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Análise Comparativa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={results.barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
