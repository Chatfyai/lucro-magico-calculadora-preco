
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ExpenseForm from './ExpenseForm';
import ResultsDisplay from './ResultsDisplay';
import { calculatePricing } from '@/utils/pricingUtils';

export interface Expense {
  id: string;
  name: string;
  value: number;
  type: 'percentage' | 'fixed';
}

export interface PricingData {
  productCost: number;
  supplierDiscount: number;
  fixedExpenses: number;
  taxes: number;
  profitMargin: number;
  additionalExpenses: Expense[];
}

const PricingCalculator = () => {
  const [data, setData] = useState<PricingData>({
    productCost: 0,
    supplierDiscount: 0,
    fixedExpenses: 0,
    taxes: 0,
    profitMargin: 0,
    additionalExpenses: []
  });

  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [results, setResults] = useState(null);

  const handleInputChange = (field: keyof PricingData, value: number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const addExpense = (expense: Expense) => {
    setData(prev => ({
      ...prev,
      additionalExpenses: [...prev.additionalExpenses, expense]
    }));
    setShowExpenseForm(false);
  };

  const removeExpense = (id: string) => {
    setData(prev => ({
      ...prev,
      additionalExpenses: prev.additionalExpenses.filter(exp => exp.id !== id)
    }));
  };

  useEffect(() => {
    const calculatedResults = calculatePricing(data);
    setResults(calculatedResults);
  }, [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Formulário de Entrada */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Dados do Produto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productCost">Custo do Produto (R$)</Label>
              <Input
                id="productCost"
                type="number"
                step="0.01"
                value={data.productCost || ''}
                onChange={(e) => handleInputChange('productCost', parseFloat(e.target.value) || 0)}
                placeholder="Ex: 100.00"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="supplierDiscount">Desconto do Fornecedor (%)</Label>
              <Input
                id="supplierDiscount"
                type="number"
                step="0.01"
                value={data.supplierDiscount || ''}
                onChange={(e) => handleInputChange('supplierDiscount', parseFloat(e.target.value) || 0)}
                placeholder="Ex: 10"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="profitMargin">Margem de Lucro Desejada (%)</Label>
              <Input
                id="profitMargin"
                type="number"
                step="0.01"
                value={data.profitMargin || ''}
                onChange={(e) => handleInputChange('profitMargin', parseFloat(e.target.value) || 0)}
                placeholder="Ex: 100"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Despesas e Impostos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="taxes">Impostos (%)</Label>
              <Input
                id="taxes"
                type="number"
                step="0.01"
                value={data.taxes || ''}
                onChange={(e) => handleInputChange('taxes', parseFloat(e.target.value) || 0)}
                placeholder="Ex: 15"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="fixedExpenses">Despesas Fixas (R$)</Label>
              <Input
                id="fixedExpenses"
                type="number"
                step="0.01"
                value={data.fixedExpenses || ''}
                onChange={(e) => handleInputChange('fixedExpenses', parseFloat(e.target.value) || 0)}
                placeholder="Ex: 50.00"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 flex justify-between items-center">
              Despesas Adicionais
              <Button
                onClick={() => setShowExpenseForm(true)}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus size={16} />
                Adicionar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.additionalExpenses.length === 0 ? (
              <p className="text-gray-500 text-sm">Nenhuma despesa adicional</p>
            ) : (
              <div className="space-y-2">
                {data.additionalExpenses.map((expense) => (
                  <div key={expense.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">{expense.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {expense.type === 'percentage' ? `${expense.value}%` : `R$ ${expense.value.toFixed(2)}`}
                      </span>
                      <Button
                        onClick={() => removeExpense(expense.id)}
                        variant="destructive"
                        size="sm"
                      >
                        Remover
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {showExpenseForm && (
          <ExpenseForm
            onAdd={addExpense}
            onCancel={() => setShowExpenseForm(false)}
          />
        )}
      </div>

      {/* Resultados */}
      <div>
        {results && <ResultsDisplay results={results} />}
      </div>
    </div>
  );
};

export default PricingCalculator;
