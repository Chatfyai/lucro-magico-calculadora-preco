import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  Shield, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Users,
  Star,
  Zap,
  ArrowRight,
  PlayCircle,
  Award,
  Rocket,
  Timer
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Ferramenta Nº1 em Precificação
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Descubra o{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Preço Ideal
                  </span>
                  <br />
                  em 30 Segundos
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  A calculadora inteligente que elimina a incerteza e maximiza seus lucros. 
                  Transforme dúvidas em decisões confiantes.
                </p>
              </div>

              {/* Social Proof Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+5.000</div>
                  <div className="text-sm text-muted-foreground">Empreendedores</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30s</div>
                  <div className="text-sm text-muted-foreground">Para Resultado</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/calculadora">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Calculator className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Calcular Preço Ideal
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ver Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  100% Gratuito
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sem Cadastro
                </div>
                <div className="flex items-center gap-1">
                  <Timer className="h-4 w-4 text-green-500" />
                  Resultado Instantâneo
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Card - Calculator Preview */}
              <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-border/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Calculadora de Preços</h3>
                    <p className="text-sm text-muted-foreground">Resultado instantâneo</p>
                  </div>
                </div>

                {/* Mock Form Fields */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm text-muted-foreground">Custo do Produto</label>
                    <div className="bg-muted/50 rounded-lg p-3 mt-1">
                      <span className="text-foreground font-medium">R$ 50,00</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Margem Desejada</label>
                    <div className="bg-muted/50 rounded-lg p-3 mt-1">
                      <span className="text-foreground font-medium">40%</span>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">Preço Ideal Sugerido</div>
                  <div className="text-3xl font-bold text-primary">R$ 125,00</div>
                  <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>+150% lucro otimizado</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Award className="h-6 w-6" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-pulse">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "Aumentei meu faturamento em 40% só ajustando os preços com base na calculadora. 
                A ferramenta é incrível e muito fácil de usar!"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                  MS
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Maria Silva</div>
                  <div className="text-sm text-muted-foreground">E-commerce Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reconhece Alguma Dessas Situações?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Você não está sozinho. Essas são as principais dores de quem precifica produtos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((pain, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-destructive/50 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <pain.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {pain.title}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{pain.description}</p>
                  <div className="bg-destructive/5 p-4 rounded-xl border border-destructive/10">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Solução Que Você Estava Procurando
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa calculadora elimina a incerteza e te dá confiança para precificar corretamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary/50 rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Em 3 passos simples, você terá o preço ideal para seu produto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary/20 -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossos Usuários Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 rounded-2xl group">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                    "{review.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary group-hover:scale-110 transition-transform">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pare de Perder Dinheiro Hoje Mesmo
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já descobriram como precificar corretamente 
            e aumentaram seus lucros
          </p>
          
          <div className="space-y-8">
            <Link to="/calculadora">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl bg-white text-primary hover:bg-white/90 group"
              >
                <Calculator className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Começar Agora - É Gratuito
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                100% Gratuito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Sem Cadastro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
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