
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Expense } from './PricingCalculator';

interface ExpenseFormProps {
  onAdd: (expense: Expense) => void;
  onCancel: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState<'percentage' | 'fixed'>('percentage');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && value > 0) {
      onAdd({
        id: Date.now().toString(),
        name: name.trim(),
        value,
        type
      });
      setName('');
      setValue(0);
      setType('percentage');
    }
  };

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg text-blue-800">
          Adicionar Nova Despesa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="expenseName">Nome da Despesa</Label>
            <Input
              id="expenseName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Comissão vendedor"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="expenseType">Tipo</Label>
            <Select value={type} onValueChange={(value: 'percentage' | 'fixed') => setType(value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">Porcentagem (%)</SelectItem>
                <SelectItem value="fixed">Valor Fixo (R$)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="expenseValue">
              {type === 'percentage' ? 'Valor (%)' : 'Valor (R$)'}
            </Label>
            <Input
              id="expenseValue"
              type="number"
              step="0.01"
              value={value || ''}
              onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
              placeholder={type === 'percentage' ? 'Ex: 5' : 'Ex: 25.00'}
              className="mt-1"
              required
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Adicionar
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
