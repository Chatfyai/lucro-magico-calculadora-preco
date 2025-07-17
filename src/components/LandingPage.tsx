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
  Send,
  Plus,
  CreditCard,
  ArrowRightLeft,
  Star,
  Zap,
  RefreshCw
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

  const actionIcons = [
    { icon: Send, title: "Enviar", color: "bg-primary/20" },
    { icon: Plus, title: "Adicionar", color: "bg-accent/20" },
    { icon: CreditCard, title: "Cartões", color: "bg-primary/15" },
    { icon: ArrowRightLeft, title: "Transferir", color: "bg-accent/15" }
  ];

  const contacts = [
    { name: "Ana Silva", avatar: "AS", value: "R$ 1.250,00", time: "2h", color: "bg-primary/30" },
    { name: "Carlos Freitas", avatar: "CF", value: "R$ 890,50", time: "5h", color: "bg-accent/30" },
    { name: "Mariana Costa", avatar: "MC", value: "R$ 2.100,75", time: "1d", color: "bg-primary/25" },
    { name: "João Santos", avatar: "JS", value: "R$ 450,00", time: "2d", color: "bg-accent/25" }
  ];

  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--gradient-primary)' }}>
      {/* Hero Section Container */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-md mx-auto">
          {/* Container principal com glassmorphism */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-5" style={{ background: 'var(--gradient-accent)' }}>
                <span className="text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                  ✨ Ferramenta Gratuita
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground leading-tight mb-3">
                Descubra o{" "}
                <span className="text-primary">Preço Ideal</span>
                <br />
                para Seu Negócio em 30 Segundos
              </h1>
              
              <p className="text-muted-foreground leading-relaxed">
                A calculadora inteligente que transforma suas dúvidas em preços lucrativos e competitivos. Usada por +5.000 empreendedores.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-around mb-8 p-5 bg-primary/5 rounded-2xl">
              <div className="text-center">
                <span className="block text-xl font-bold text-primary">+5.000</span>
                <span className="text-xs text-muted-foreground">Usuários</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-primary">98%</span>
                <span className="text-xs text-muted-foreground">Satisfação</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-primary">30s</span>
                <span className="text-xs text-muted-foreground">Resultado</span>
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-accent)' }}>
                  <span className="text-white text-lg">💰</span>
                </div>
                <h3 className="font-semibold text-muted-foreground">Seu Preço Ideal</h3>
              </div>
              <div className="text-3xl font-bold text-success mb-2">R$ 24.580,50</div>
              <div className="flex items-center gap-2 text-sm text-success">
                <span>📈</span>
                <span>+12,5% de margem otimizada</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-success/5 rounded-2xl p-5 mb-6 border-l-4 border-l-success">
              <p className="text-sm text-muted-foreground italic mb-3">
                "Aumentei meu faturamento em 40% só ajustando os preços com base na calculadora. Incrível!"
              </p>
              <p className="text-sm font-semibold text-success">
                - Maria Silva, E-commerce
              </p>
            </div>

            {/* CTA Principal */}
            <Link to="/calculadora">
              <Button 
                size="lg" 
                className="w-full text-base py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mb-5"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <span>🚀</span>
                Calcular Meu Preço Ideal Agora
              </Button>
            </Link>

            {/* Features */}
            <div className="flex justify-center gap-5 text-sm text-success font-medium mb-5">
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>Gratuito</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>Sem Cadastro</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>Resultado Instantâneo</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="text-center mb-5">
              <div 
                className="text-white px-5 py-3 rounded-xl text-sm font-semibold animate-pulse" 
                style={{ background: 'var(--gradient-card)' }}
              >
                ⚡ Mais de 200 pessoas usaram hoje!
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="text-center">
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                Ver exemplo de cálculo completo →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-muted/50">
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
              <Card key={index} className="border-l-4 border-l-destructive/50 hover:shadow-lg transition-all rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <pain.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {pain.title}
                      </h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pain.description}</p>
                  <div className="bg-destructive/5 p-4 rounded-2xl border-l-2 border-l-destructive/20">
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

      {/* Solution Benefits */}
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
            {[
              {
                icon: Calculator,
                title: "Cálculo Automático Preciso",
                description: "Considere todos os custos, impostos e margens automaticamente"
              },
              {
                icon: BarChart3,
                title: "Visualização Clara",
                description: "Veja o breakdown completo do seu preço em gráficos intuitivos"
              },
              {
                icon: Shield,
                title: "Evite Prejuízos",
                description: "Nunca mais venda abaixo do custo ou com margens insuficientes"
              },
              {
                icon: Zap,
                title: "Decisões Confiantes",
                description: "Tome decisões de preço baseadas em dados, não em achismos"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all border-t-4 border-t-primary/50 rounded-3xl">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
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
            {[
              {
                step: "1",
                title: "Insira os Custos",
                description: "Digite o custo do produto, impostos, despesas fixas e margem desejada"
              },
              {
                step: "2", 
                title: "Adicione Despesas",
                description: "Inclua comissões, fretes, embalagens e outras despesas específicas"
              },
              {
                step: "3",
                title: "Veja o Resultado", 
                description: "Receba o preço ideal com breakdown completo e visualização em gráfico"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossos Usuários Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Santos",
                role: "Artesã",
                text: "Descobri que estava vendendo 40% abaixo do preço ideal. Em 2 meses aumentei minha margem sem perder clientes!",
                stars: 5
              },
              {
                name: "João Oliveira", 
                role: "E-commerce",
                text: "A calculadora me ajudou a definir preços competitivos. Minhas vendas aumentaram 25% no último trimestre.",
                stars: 5
              },
              {
                name: "Ana Costa",
                role: "Consultora",
                text: "Ferramenta indispensável! Agora tenho segurança total na hora de cotar meus serviços.",
                stars: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full bg-white text-primary hover:bg-white/90"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Começar Agora - É Gratuito
              </Button>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
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