import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Shield, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Users,
  Lightbulb,
  Zap
} from 'lucide-react';

const LandingPage = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Incerteza sobre estratégia de precificação",
      description: "Não sabe se deve usar custo, valor percebido ou preços dos concorrentes?",
      example: "Um artesão hesita entre cobrar R$50 ou R$100 pelo mesmo produto"
    },
    {
      icon: TrendingUp,
      title: "Falta de confiança no valor do produto",
      description: "Subestima o valor e perde receita potencial com preços baixos",
      example: "Vendedor online acha que seu produto é 'comum' e cobra muito pouco"
    },
    {
      icon: Users,
      title: "Medo de perder clientes ao aumentar preços",
      description: "Receio de que preços mais altos afastem clientes, mesmo quando justificado",
      example: "Lojista teme perder vendas ao subir preços em apenas 10%"
    },
    {
      icon: Target,
      title: "Dificuldade em entender o que clientes pagam",
      description: "Determinar o preço que os clientes aceitam é complexo",
      example: "Inovador não sabe quanto cobrar por um produto único no mercado"
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Cálculo Automático Preciso",
      description: "Considere todos os custos, impostos e margens automaticamente"
    },
    {
      icon: BarChart3,
      title: "Visualização Clara dos Resultados",
      description: "Veja o breakdown completo do seu preço em gráficos intuitivos"
    },
    {
      icon: Shield,
      title: "Evite Prejuízos",
      description: "Nunca mais venda abaixo do custo ou com margens insuficientes"
    },
    {
      icon: Zap,
      title: "Decisões Rápidas e Confiantes",
      description: "Tome decisões de preço baseadas em dados, não em achismos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Pare de{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Precificar no Escuro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A calculadora de precificação que transforma suas dúvidas em preços lucrativos e competitivos
              </p>
            </div>

            {/* Pain Point Highlight */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-destructive mb-2">
                    Você está perdendo dinheiro agora mesmo?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    87% dos pequenos empreendedores precificam seus produtos incorretamente, 
                    resultando em prejuízos ou vendas perdidas por preços muito altos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Link to="/calculadora">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Meu Preço Agora
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                ✅ Gratuito • ✅ Sem cadastro • ✅ Resultado instantâneo
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reconhece Alguma Dessas Situações?
            </h2>
            <p className="text-xl text-muted-foreground">
              Você não está sozinho. Essas são as principais dores de quem precifica produtos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => (
              <Card key={index} className="border-l-4 border-l-destructive/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <pain.icon className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {pain.title}
                      </h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{pain.description}</p>
                  <div className="bg-destructive/5 p-3 rounded border-l-2 border-l-destructive/20">
                    <p className="text-sm text-muted-foreground italic">
                      💡 {pain.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Solução Que Você Estava Procurando
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa calculadora elimina a incerteza e te dá confiança para precificar corretamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow border-t-4 border-t-primary/50">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Em 3 passos simples, você terá o preço ideal para seu produto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Insira os Custos
              </h3>
              <p className="text-muted-foreground">
                Digite o custo do produto, impostos, despesas fixas e margem desejada
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Adicione Despesas
              </h3>
              <p className="text-muted-foreground">
                Inclua comissões, fretes, embalagens e outras despesas específicas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Veja o Resultado
              </h3>
              <p className="text-muted-foreground">
                Receba o preço ideal com breakdown completo e visualização em gráfico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Pain Points */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Outros Desafios Que Resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Gestão Multi-Canal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">
                  Preços diferentes no site e loja física geram confusão e reclamações.
                </p>
                <p className="text-xs text-primary font-medium">
                  ✓ Mantenha consistência entre todos os canais
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Volatilidade de Custos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">
                  Inflação e mudanças nos custos forçam revisão constante de preços.
                </p>
                <p className="text-xs text-primary font-medium">
                  ✓ Recalcule rapidamente quando necessário
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  Prevenção de Subcotação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">
                  Preços baixos demais podem levar a problemas de fluxo de caixa.
                </p>
                <p className="text-xs text-primary font-medium">
                  ✓ Garanta sempre uma margem segura
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pare de Perder Dinheiro Hoje Mesmo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de empreendedores que já descobriram como precificar corretamente
          </p>
          
          <div className="space-y-6">
            <Link to="/calculadora">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Calculator className="mr-2 h-5 w-5" />
                Começar Agora - É Gratuito
              </Button>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                100% Gratuito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Sem Cadastro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Resultado Instantâneo
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;