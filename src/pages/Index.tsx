
import PricingCalculator from "@/components/PricingCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Calculadora de Precificação
          </h1>
          <p className="text-lg text-gray-600">
            Calcule o preço ideal dos seus produtos considerando todos os custos e margens
          </p>
        </div>
        <PricingCalculator />
      </div>
    </div>
  );
};

export default Index;
