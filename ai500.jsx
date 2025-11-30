import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  CreditCard, 
  Database, 
  Globe, 
  Layers, 
  LayoutDashboard, 
  LineChart, 
  Lock, 
  PieChart, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  User, 
  Wallet, 
  Zap,
  Bell,
  Search,
  Filter,
  Download,
  Settings,
  LogOut,
  X,
  Cpu,
  Network
} from 'lucide-react';

// --- Components ---

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 ${className}`}>
    {children}
  </span>
);

const BuildingIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="9" y2="22.01"></line>
    <line x1="15" y1="22" x2="15" y2="22.01"></line>
    <line x1="9" y1="18" x2="9" y2="18.01"></line>
    <line x1="15" y1="18" x2="15" y2="18.01"></line>
    <line x1="9" y1="14" x2="9" y2="14.01"></line>
    <line x1="15" y1="14" x2="15" y2="14.01"></line>
    <line x1="9" y1="10" x2="9" y2="10.01"></line>
    <line x1="15" y1="10" x2="15" y2="10.01"></line>
    <line x1="9" y1="6" x2="9" y2="6.01"></line>
    <line x1="15" y1="6" x2="15" y2="6.01"></line>
  </svg>
);

const SectionHeading = ({ badge, title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"} max-w-4xl mx-auto`}>
    {badge && <Badge className="mb-4">{badge}</Badge>}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-emerald-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-300">
            <Sparkles size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">SmartSpend AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button onClick={() => scrollToSection('problem')} className="hover:text-emerald-600 transition-colors">Problem</button>
          <button onClick={() => scrollToSection('solution')} className="hover:text-emerald-600 transition-colors">Solution</button>
          <button onClick={() => scrollToSection('demo')} className="hover:text-emerald-600 transition-colors">Demo</button>
          <button onClick={() => scrollToSection('team')} className="hover:text-emerald-600 transition-colors">Team</button>
          <button onClick={() => scrollToSection('demo')} className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20 flex items-center gap-2">
            Демонстрация <ArrowRight size={16} />
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Layers />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-emerald-100 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-fade-in-up">
          <button onClick={() => scrollToSection('problem')} className="text-left text-slate-600 font-medium py-2">Problem</button>
          <button onClick={() => scrollToSection('solution')} className="text-left text-slate-600 font-medium py-2">Solution</button>
          <button onClick={() => scrollToSection('demo')} className="text-left text-slate-600 font-medium py-2">Demo</button>
          <button onClick={() => scrollToSection('team')} className="text-left text-slate-600 font-medium py-2">Team</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateChart(true), 500);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/60 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-800">Будущее банковского интеллекта</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          SmartSpend AI — <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
            The Intelligent Assistant
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
          ИИ-аналитика, точное прогнозирование расходов и персональные рекомендации банковских продуктов, которые помогают расти и клиентам, и банку.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button onClick={() => document.getElementById('demo').scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 group">
            Попробовать Демо <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => document.getElementById('solution').scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all">
            Узнать больше
          </button>
        </div>

        {/* Hero Visual - Abstract Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] border border-slate-200 p-2 md:p-4 overflow-hidden">
            {/* Header Mockup */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-2 w-32 bg-slate-100 rounded-full" />
            </div>
            
            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-50/50">
              {/* Left Col - Balance & Spending */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Общий Баланс</p>
                      <h3 className="text-3xl font-bold text-slate-900">24,593,000 сўм</h3>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <TrendingUp size={14} /> +12%
                    </span>
                  </div>
                  {/* CSS Chart */}
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                      <div key={i} className="w-full bg-emerald-50 rounded-t-sm relative group overflow-hidden" style={{ height: '100%' }}>
                        <div 
                          className="absolute bottom-0 w-full bg-emerald-500 transition-all duration-1000 ease-out group-hover:bg-emerald-600" 
                          style={{ height: animateChart ? `${h}%` : '0%' }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-3">
                        <Zap size={20} />
                      </div>
                      <p className="text-sm text-slate-500">Прогноз расходов</p>
                      <p className="text-xl font-bold text-slate-900">-2,140,000 сўм</p>
                      <p className="text-xs text-orange-500 mt-1">Ожидается на след. неделе</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                        <Target size={20} />
                      </div>
                      <p className="text-sm text-slate-500">Цель: Отпуск</p>
                      <p className="text-xl font-bold text-slate-900">8,400,000 сўм</p>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2">
                        <div className="w-[70%] h-full bg-green-500 rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              {/* Right Col - AI Insights */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-colors" />
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={18} className="text-emerald-200 animate-pulse" />
                    <span className="font-semibold text-sm text-emerald-100">Совет ИИ</span>
                  </div>
                  <p className="text-lg font-medium leading-snug mb-4">
                    "Вы тратите на такси на 20% больше. Карта 'Авто-Плюс' даст вам 10% кэшбэка."
                  </p>
                  <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg py-2 text-sm font-medium transition-colors">
                    Оформить в 1 клик
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-4">Предстоящие платежи</h4>
                  <div className="space-y-4">
                    {[
                      { icon: Globe, color: "bg-orange-100 text-orange-600", name: "Netflix", date: "Завтра", amount: "-120,000 сўм" },
                      { icon: Wallet, color: "bg-emerald-100 text-emerald-600", name: "Зарплата", date: "25 Июня", amount: "+5,450,000 сўм" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                            <item.icon size={14} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{item.name}</p>
                            <p className="text-xs text-slate-500">{item.date}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-semibold ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="hidden md:block absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] animate-bounce border border-slate-100 max-w-[200px]" style={{animationDuration: '3s'}}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                <Brain size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Умное уведомление</p>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">Подписка на сервисы подорожала на 15%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section id="problem" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading 
        badge="Проблема"
        title="The Challenge"
        subtitle="Разрыв между возможностями банков и пониманием пользователей создает потери для обеих сторон."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* User Problem */}
        <Card className="p-10 relative overflow-hidden group border-l-4 border-l-orange-400 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8 transform group-hover:rotate-6 transition-transform">
              <User size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Проблемы Клиента</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5"><span className="text-xs font-bold">✕</span></div>
                <p className="text-slate-600">Непонимание структуры расходов и хаос</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5"><span className="text-xs font-bold">✕</span></div>
                <p className="text-slate-600">Отсутствие прогноза будущих трат</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5"><span className="text-xs font-bold">✕</span></div>
                <p className="text-slate-600">Потеря кэшбэка и скрытые комиссии</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5"><span className="text-xs font-bold">✕</span></div>
                <p className="text-slate-600">Ненужные кредиты из-за плохого планирования</p>
              </li>
            </ul>
          </div>
        </Card>

        {/* Bank Problem */}
        <Card className="p-10 relative overflow-hidden group border-l-4 border-l-emerald-400 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 transform group-hover:rotate-6 transition-transform">
              <BuildingIcon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Проблемы Банка</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><span className="text-xs font-bold">!</span></div>
                <p className="text-slate-600">Низкая активация финансовых продуктов</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><span className="text-xs font-bold">!</span></div>
                <p className="text-slate-600">Слабая персонализация и шаблонные офферы</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><span className="text-xs font-bold">!</span></div>
                <p className="text-slate-600">Низкая конверсия в депозиты и кредиты</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5"><span className="text-xs font-bold">!</span></div>
                <p className="text-slate-600">Уход клиентов в сторонние PFM-приложения</p>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading 
        badge="Решение"
        title="The Solution"
        subtitle="SmartSpend AI анализирует поведение пользователя, чтобы строить персональные бюджеты и рекомендовать самые выгодные продукты."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: BarChart3,
            color: "text-blue-600",
            bg: "bg-blue-50",
            title: "Анализ Транзакций",
            desc: "Автоматическая категоризация, детекция трат и распознавание глубоких паттернов поведения."
          },
          {
            icon: LineChart,
            color: "text-purple-600",
            bg: "bg-purple-50",
            title: "Прогноз Будущего",
            desc: "ИИ-модель прогнозирования ежемесячных расходов, алерты рисков и анализ сезонности."
          },
          {
            icon: Sparkles,
            color: "text-amber-600",
            bg: "bg-amber-50",
            title: "Умные Рекомендации",
            desc: "Предлагает лучшую карту, депозит или кредит, идеально подходящий под ваши доходы."
          },
          {
            icon: Target,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            title: "Оптимизация Здоровья",
            desc: "Автоматические бюджетные планы, бустеры накоплений и еженедельные инсайты."
          }
        ].map((feature, i) => (
          <Card key={i} className="p-8 hover:border-emerald-200 transition-all hover:-translate-y-2 hover:shadow-lg duration-300">
            <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center ${feature.color} mb-6 transform transition-transform group-hover:scale-110`}>
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const BankProfits = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Триггер анимации при попадании в зону видимости (упрощенно - через таймер)
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #34d399 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-6">Бизнес Ценность</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как Банк Зарабатывает со SmartSpend AI</h2>
            <p className="text-emerald-100/70 text-lg mb-8">
              Превращаем сырые данные в прибыль. Помогая клиентам преуспевать, банк открывает новые каналы монетизации.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/30 transition-colors group-hover:scale-110 duration-300">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Рост Продаж Продуктов</h4>
                  <p className="text-emerald-100/60">ИИ находит идеальный момент для предложения кредита или карты. Конверсия растет в 5-7 раз.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/30 transition-colors group-hover:scale-110 duration-300">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Высокая Активность</h4>
                  <p className="text-emerald-100/60">Пользователи концентрируют траты на рекомендованных картах, увеличивая интерчейндж и комиссии.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/30 transition-colors group-hover:scale-110 duration-300">
                  <Lock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Платная Премиум Аналитика</h4>
                  <p className="text-emerald-100/60">Подписка "Smart Analytics Pro" для продвинутых пользователей, желающих глубокого прогнозирования.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <div className="bg-emerald-800 rounded-2xl p-8 border border-emerald-700 relative hover:border-emerald-500 transition-colors duration-300">
              <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold">Прогноз Выручки</h3>
                  <span className="text-emerald-900 bg-emerald-400 px-3 py-1 rounded-full text-sm font-bold animate-bounce">+240% Рост</span>
              </div>
              
              {/* Dynamic visual graph with values */}
              <div className="h-64 flex items-end justify-between gap-4 relative border-b border-emerald-700 pb-2">
                 {/* Grid lines (optional but adds "realness") */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-px bg-emerald-700/30"></div>
                    <div className="w-full h-px bg-emerald-700/30"></div>
                    <div className="w-full h-px bg-emerald-700/30"></div>
                    <div className="w-full h-px bg-emerald-700/30"></div>
                </div>

                {[
                  { h: 30, label: 'Q1', value: '160M' },
                  { h: 45, label: 'Q2', value: '280M' },
                  { h: 60, label: 'Q3', value: '410M' },
                  { h: 90, label: 'Q4', value: '545M' }
                ].map((bar, i) => (
                  <div key={i} className="w-full flex flex-col justify-end gap-2 group relative z-10">
                     {/* Value Tooltip/Label */}
                     <div 
                        className={`text-center text-xs font-bold text-white mb-1 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {bar.value}
                    </div>

                    <div className="w-full bg-emerald-900/50 rounded-t-lg relative overflow-hidden h-full flex items-end">
                      <div 
                        className="w-full bg-emerald-400 hover:bg-emerald-300 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(52,211,153,0.5)] cursor-pointer" 
                        style={{ height: animate ? `${bar.h}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-center text-emerald-400/70 text-sm font-medium">{bar.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-emerald-700 flex justify-between text-sm">
                <div>
                  <p className="text-emerald-400/70">Текущий MRR</p>
                  <p className="text-2xl font-bold text-white">160 млн сўм</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400/70">Прогноз MRR</p>
                  <p className="text-2xl font-bold text-white">545 млн сўм</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Fully Interactive Demo Component ---
const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [notification, setNotification] = useState(null);
  const [animateGraphs, setAnimateGraphs] = useState(false);

  useEffect(() => {
    setAnimateGraphs(false);
    setTimeout(() => setAnimateGraphs(true), 100);
  }, [activeTab]);

  const showNotification = (text) => {
    setNotification(text);
    setTimeout(() => setNotification(null), 3000);
  };

  const menuItems = [
    { id: 'Overview', label: 'Обзор', icon: LayoutDashboard },
    { id: 'Transactions', label: 'Транзакции', icon: CreditCard },
    { id: 'Forecast', label: 'Прогноз', icon: LineChart },
    { id: 'Products', label: 'Продукты', icon: Zap },
    { id: 'Settings', label: 'Настройки', icon: Settings },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'Transactions':
        return (
          <div className="animate-fade-in-up">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">История Операций</h3>
                <div className="flex gap-2">
                   <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-emerald-600 hover:border-emerald-200 transition-all"><Filter size={18} /></button>
                   <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-emerald-600 hover:border-emerald-200 transition-all"><Search size={18} /></button>
                   <button onClick={() => showNotification("Выписка отправлена на почту")} className="flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20 active:scale-95 transform">
                      <Download size={16} /> Скачать PDF
                   </button>
                </div>
             </div>
             <div className="space-y-3">
                {[
                   { name: 'Korzinka.uz', cat: 'Продукты', amount: '-450,000 сўм', date: 'Сегодня, 14:30', icon: Wallet },
                   { name: 'Yandex Go', cat: 'Транспорт', amount: '-25,000 сўм', date: 'Сегодня, 09:15', icon: Globe },
                   { name: 'UzCard Перевод', cat: 'Входящие', amount: '+1,500,000 сўм', date: 'Вчера', icon: ArrowRight, income: true },
                   { name: 'Netflix Subscription', cat: 'Развлечения', amount: '-120,000 сўм', date: '28 Мая', icon: Smartphone },
                   { name: 'Black Bear Kofi', cat: 'Рестораны', amount: '-45,000 сўм', date: '28 Мая', icon: Zap },
                   { name: 'MediaPark', cat: 'Электроника', amount: '-2,450,000 сўм', date: '25 Мая', icon: Smartphone },
                ].map((tx, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${tx.income ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                            <tx.icon size={18} />
                         </div>
                         <div>
                            <p className="font-semibold text-slate-800">{tx.name}</p>
                            <p className="text-xs text-slate-500">{tx.cat} • {tx.date}</p>
                         </div>
                      </div>
                      <span className={`font-bold ${tx.income ? 'text-emerald-600' : 'text-slate-900'}`}>{tx.amount}</span>
                   </div>
                ))}
             </div>
          </div>
        );
      case 'Forecast':
        return (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Прогноз Денежного Потока</h3>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 mb-6 relative overflow-hidden shadow-sm">
               <div className="absolute top-4 right-4 flex gap-2">
                 <Badge className="bg-red-50 text-red-600 border-red-100 animate-pulse">Риск кассового разрыва</Badge>
               </div>
               {/* Dynamic Forecast Chart */}
               <div className="h-64 flex items-end gap-2 mt-8">
                  {[40, 35, 55, 60, 45, 30, 20, 15, 40, 50, 65, 70].map((h, i) => (
                     <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer h-full">
                        <div className="relative w-full h-full flex items-end">
                            <div 
                                className={`w-full rounded-t-md transition-all duration-1000 ease-out hover:opacity-80 ${i > 7 ? 'bg-emerald-300 border-t-2 border-emerald-500 border-dashed' : 'bg-emerald-500'}`} 
                                style={{ height: animateGraphs ? `${h}%` : '0%' }}
                            ></div>
                        </div>
                        <span className="text-[10px] text-center text-slate-400 mt-2">{i+1} нед</span>
                     </div>
                  ))}
               </div>
               <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div> Факт</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-300 rounded-full"></div> Прогноз ИИ</div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
                  <p className="text-xs text-orange-600 font-bold uppercase mb-1 flex items-center gap-1"><CheckCircle2 size={12}/> Внимание</p>
                  <p className="text-sm text-slate-700">В конце месяца ожидается крупный платеж по страховке (500,000 сўм).</p>
               </div>
               <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 hover:shadow-md transition-shadow">
                  <p className="text-xs text-emerald-600 font-bold uppercase mb-1 flex items-center gap-1"><Brain size={12}/> Совет</p>
                  <p className="text-sm text-slate-700">Отложите 50,000 сўм сегодня, чтобы сгладить нагрузку.</p>
               </div>
            </div>
          </div>
        );
      case 'Products':
        return (
           <div className="animate-fade-in-up space-y-4">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Рекомендованные Продукты</h3>
              
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-lg group">
                 <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-colors"></div>
                 <div className="relative z-10 flex justify-between items-center">
                    <div>
                       <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={16} className="text-emerald-400 animate-pulse" />
                          <span className="text-xs font-bold text-emerald-400 uppercase">Лучший выбор (98% match)</span>
                       </div>
                       <h4 className="text-2xl font-bold mb-1">Карта "Travel Premium"</h4>
                       <p className="text-slate-300 text-sm mb-4">Идеально для ваших частых поездок в Yandex Go.</p>
                       <ul className="text-sm space-y-1 mb-6 text-slate-300">
                          <li>• 15% кэшбэк на такси</li>
                          <li>• Бесплатные переводы</li>
                          <li>• Страховка в путешествиях</li>
                       </ul>
                       <button onClick={() => showNotification("Заявка на карту отправлена!")} className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">Оформить карту</button>
                    </div>
                    <CreditCard size={120} className="text-white/10 rotate-12 group-hover:rotate-[15deg] transition-transform duration-500" />
                 </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white flex justify-between items-center hover:border-emerald-200 transition-all hover:shadow-md hover:-translate-y-1">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Database size={20} /></div>
                    <div>
                       <h5 className="font-bold text-slate-800">Депозит "Копилка"</h5>
                       <p className="text-xs text-slate-500">До 21% годовых • Ежедневная выплата</p>
                    </div>
                 </div>
                 <button className="text-emerald-600 text-sm font-bold px-4 py-2 hover:bg-emerald-50 rounded-lg transition-colors">Подробнее</button>
              </div>
           </div>
        );
      case 'Settings':
         return (
            <div className="animate-fade-in-up">
               <h3 className="text-xl font-bold text-slate-800 mb-6">Настройки Профиля</h3>
               <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                     <div className="flex items-center gap-3">
                        <Bell className="text-slate-400" />
                        <div>
                           <p className="font-semibold text-slate-800">Умные уведомления</p>
                           <p className="text-xs text-slate-500">Push-алерты о перерасходе бюджета</p>
                        </div>
                     </div>
                     <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow">
                     <div className="flex items-center gap-3">
                        <Globe className="text-slate-400" />
                        <div>
                           <p className="font-semibold text-slate-800">Валюта</p>
                           <p className="text-xs text-slate-500">Основная валюта отображения</p>
                        </div>
                     </div>
                     <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500">
                        <option>UZS (сўм)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                     </select>
                  </div>

                  <button onClick={() => showNotification("Данные успешно сброшены")} className="w-full py-3 border border-red-200 text-red-500 rounded-xl font-medium hover:bg-red-50 flex items-center justify-center gap-2 transition-colors active:scale-95 transform">
                     <LogOut size={18} /> Сбросить данные
                  </button>
               </div>
            </div>
         );
      default: // Overview
        return (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Финансовый Обзор</h3>
                <p className="text-slate-500">С возвращением, Алишер</p>
              </div>
              <button onClick={() => showNotification("Отчет формируется...")} className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                Сформировать Отчет
              </button>
            </div>

            {/* AI Banner */}
            <div className="bg-emerald-600 rounded-2xl p-6 text-white mb-8 flex items-center justify-between shadow-lg shadow-emerald-200 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                   <Sparkles size={16} className="text-emerald-200 animate-spin-slow" />
                   <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Персональная рекомендация</span>
                 </div>
                 <h4 className="text-lg font-semibold">Переключитесь на карту "Traveller Gold"</h4>
                 <p className="text-emerald-50 text-sm max-w-lg mt-1">Основываясь на вашей покупке авиабилетов (4,500,000 сўм), вы могли бы получить 225,000 сўм кэшбэка.</p>
               </div>
               <button onClick={() => setActiveTab('Products')} className="bg-white text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition-colors whitespace-nowrap shadow-md">
                 Посмотреть
               </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
               {/* Spending Graph */}
               <Card className="p-6">
                 <div className="flex justify-between mb-6">
                   <h4 className="font-bold text-slate-900">Расходы за месяц</h4>
                   <select className="bg-slate-50 border-none text-xs rounded-md text-slate-500 cursor-pointer"><option>Этот месяц</option></select>
                 </div>
                 <div className="h-48 flex items-end justify-between gap-3">
                   {[35, 45, 30, 60, 75, 50, 65].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-100 rounded-md relative group cursor-pointer hover:bg-slate-200 transition-colors h-full">
                        <div className="w-full h-full flex items-end">
                            <div 
                                className={`w-full rounded-md transition-all duration-700 ${i === 4 ? 'bg-emerald-500' : 'bg-slate-300 group-hover:bg-slate-400'}`} 
                                style={{ height: animateGraphs ? `${h}%` : '0%' }}
                            ></div>
                        </div>
                        {i === 4 && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded shadow-lg animate-bounce">
                            4.5M
                          </div>
                        )}
                      </div>
                   ))}
                 </div>
                 <div className="flex justify-between mt-4 text-xs text-slate-400">
                   <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
                 </div>
               </Card>

               {/* Transactions Short */}
               <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="font-bold text-slate-900">Последние операции</h4>
                     <button onClick={() => setActiveTab('Transactions')} className="text-xs text-emerald-600 font-bold hover:underline">Все</button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Apple Store', cat: 'Электроника', price: '-1,300,000 сўм', icon: Smartphone },
                      { name: 'Starbucks', cat: 'Еда', price: '-45,000 сўм', icon: Zap },
                      { name: 'Зарплата', cat: 'Доход', price: '+6,500,000 сўм', icon: Wallet, green: true },
                      { name: 'Yandex Go', cat: 'Такси', price: '-35,000 сўм', icon: Globe },
                    ].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <tx.icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{tx.name}</p>
                            <p className="text-xs text-slate-500">{tx.cat}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-bold ${tx.green ? 'text-emerald-600' : 'text-slate-900'}`}>{tx.price}</span>
                      </div>
                    ))}
                  </div>
               </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden relative transition-all duration-500">
        {notification && (
           <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-2 rounded-full shadow-lg text-sm font-medium animate-fade-in-up flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400"/> {notification}
           </div>
        )}

        {/* Mock Window Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:scale-110 transition-transform"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400 hover:scale-110 transition-transform"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400 hover:scale-110 transition-transform"></div>
          </div>
          <div className="flex-1 text-center text-sm font-medium text-slate-400">SmartSpend AI - Dashboard</div>
        </div>

        <div className="flex flex-col lg:flex-row h-[700px]">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-slate-50 border-r border-slate-200 p-6 hidden lg:flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-8 px-2 cursor-pointer group" onClick={() => setActiveTab('Overview')}>
               <div className="w-8 h-8 bg-emerald-600 rounded-md shadow-md shadow-emerald-200 group-hover:rotate-12 transition-transform"></div>
               <span className="font-bold text-slate-800">SmartSpend</span>
            </div>
            
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === item.id ? 'bg-white shadow-md text-emerald-600 scale-105' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}
              >
                <item.icon size={18} className={activeTab === item.id ? 'text-emerald-600' : 'text-slate-400'} />
                {item.label}
              </button>
            ))}
            
            <div className="mt-auto bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden group cursor-default">
               <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <p className="text-xs font-medium text-slate-400 mb-1">Цель накопления</p>
              <p className="font-bold mb-2">Chevrolet Cobalt</p>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 w-3/4 h-full rounded-full group-hover:w-[80%] transition-all duration-1000"></div>
              </div>
              <p className="text-[10px] text-right mt-1 text-emerald-400">75%</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 overflow-y-auto bg-slate-50/30 scroll-smooth">
             {renderContent()}
          </div>
        </div>
      </div>
  );
};

const Demo = () => (
  <section id="demo" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <SectionHeading 
        badge="Демо Продукта"
        title="Experience the Intelligence"
        subtitle="Интерактивные макеты, показывающие аналитику транзакций, прогнозы и рекомендации ИИ."
      />
      <InteractiveDemo />
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-20 bg-white border-y border-slate-100">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">ТЕХНОЛОГИИ НОВОГО ПОКОЛЕНИЯ FINTECH</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
        {["React / Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "OpenAI GPT-5.1", "TON Blockchain"].map((tech, i) => (
           <div key={i} className="flex items-center justify-center gap-2 p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:text-emerald-600 hover:shadow-sm transition-all cursor-default group">
             <span className="font-semibold text-slate-700 group-hover:scale-105 transition-transform">{tech}</span>
           </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <SectionHeading title="How The Intelligence Works" subtitle="Глубокое машинное обучение и NLP превращают сырые данные в стратегию." />
      
      <div className="max-w-4xl mx-auto">
        {[
          { 
            step: "01", 
            title: "Парсинг и NLP-анализ", 
            text: "Мы используем LLM (Large Language Models) для семантического анализа описаний транзакций. Даже если чек выглядит как 'IP 12345 market', ИИ распознает категорию 'Продукты', анализируя контекст и MCC-коды." 
          },
          { 
            step: "02", 
            title: "Детекция Паттернов (Clustering)", 
            text: "Алгоритмы кластеризации выявляют ваши регулярные привычки. Система 'понимает', что каждое утро вы берете кофе, а 25-го числа получаете зарплату, создавая профиль вашего финансового поведения." 
          },
          { 
            step: "03", 
            title: "Предиктивная Аналитика (LSTM)", 
            text: "Нейросети на базе LSTM (Long Short-Term Memory) анализируют временные ряды ваших расходов, чтобы предсказать кассовые разрывы за недели до их появления и предупредить вас." 
          },
          { 
            step: "04", 
            title: "Рекомендательный Движок", 
            text: "Коллаборативная фильтрация сопоставляет ваш профиль с тысячами похожих успешных пользователей, чтобы предложить именно тот банковский продукт (депозит или карту), который математически принесет вам максимальную выгоду." 
          },
          { 
            step: "05", 
            title: "Автономная Оптимизация", 
            text: "Система непрерывно обучается (Reinforcement Learning), корректируя бюджеты в реальном времени. Если вы сэкономили на такси, ИИ предложит перевести излишек в копилку." 
          }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 mb-12 relative last:mb-0 group cursor-default">
             {i !== 4 && <div className="absolute left-[19px] top-10 bottom-[-48px] w-0.5 bg-slate-200 group-hover:bg-emerald-300 transition-colors duration-500"></div>}
             <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-600 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0 shadow-sm relative z-10 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
               {item.step}
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
               <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">{item.text}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading title="The Team Behind SmartSpend" subtitle="Создано full-stack инженером с глубокой экспертизой в финтехе." />
      
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left hover:shadow-xl transition-shadow border-emerald-50 hover:border-emerald-200">
          <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-4xl font-bold border-4 border-white shadow-lg overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <span className="relative z-10 text-emerald-600">Z</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Zerosky</h3>
            <p className="text-emerald-600 font-medium mb-4">Founder & Full-Stack Developer</p>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Соло-разработчик, специализирующийся на ИИ-интерфейсах, аналитике данных и финтех UX. 
              Опыт в создании сложных дашбордов, финансовых инструментов и высоконагруженных приложений. 
              Объединяет дизайн, инженерию и продуктовое мышление.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['React', 'Node.js', 'AI Integration', 'Data Analytics', 'TON'].map(skill => (
                <span key={skill} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Why Me Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div className="p-6 hover:bg-slate-50 rounded-2xl transition-colors hover:scale-105 duration-300">
           <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"><LayoutDashboard /></div>
           <h4 className="font-bold mb-2">Эксперт по Дашбордам</h4>
           <p className="text-sm text-slate-500">Глубокий опыт создания сложных аналитических интерфейсов.</p>
        </div>
        <div className="p-6 hover:bg-slate-50 rounded-2xl transition-colors hover:scale-105 duration-300">
           <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"><Database /></div>
           <h4 className="font-bold mb-2">Data & SQL</h4>
           <p className="text-sm text-slate-500">Сильная история анализа SQL и временных рядов.</p>
        </div>
        <div className="p-6 hover:bg-slate-50 rounded-2xl transition-colors hover:scale-105 duration-300">
           <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"><Zap /></div>
           <h4 className="font-bold mb-2">Быстрый Запуск</h4>
           <p className="text-sm text-slate-500">Способность быстро шипить full-stack продукты и итерировать.</p>
        </div>
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
       <SectionHeading title="Roadmap & Trajectory" subtitle="От прототипа до масштабирования банковской экосистемы." />
       
       <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
         <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-700 hidden md:block -z-10"></div>
         
         {[
           { phase: "Фаза 1", title: "Прототип", status: "Текущая", items: ["Полный Веб-сайт", "Классификатор Транзакций", "Дашборд Расходов"] },
           { phase: "Фаза 2", title: "MVP", status: "Скоро", items: ["Real-time Пайплайн", "Модель Прогнозирования", "Аккаунты Пользователей"] },
           { phase: "Фаза 3", title: "Запуск", status: "План", items: ["Мобильное Приложение", "Партнерские Офферы", "Динамический ИИ-скоринг"] },
           { phase: "Фаза 4", title: "Масштаб", status: "Будущее", items: ["B2B Интеграции", "API Gateway", "Корпоративные Дашборды"] },
         ].map((item, i) => (
           <div key={i} className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:bg-slate-750 hover:border-emerald-500/50 transition-colors group">
             <div className={`w-4 h-4 rounded-full border-2 border-slate-900 absolute -top-10 left-1/2 -translate-x-1/2 hidden md:block transition-all duration-300 ${i === 0 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-125' : 'bg-slate-600 group-hover:bg-emerald-400'}`}></div>
             <p className={`text-xs font-bold mb-1 transition-colors ${i === 0 ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`}>{item.phase}</p>
             <h3 className="text-xl font-bold mb-4">{item.title}</h3>
             <ul className="space-y-2">
               {item.items.map((sub, j) => (
                 <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                   <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-slate-500 group-hover:bg-emerald-500'}`}></div> {sub}
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 group cursor-pointer">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Sparkles size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">SmartSpend AI</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Интеллектуальный финансовый помощник для современного банкинга. Помогаем банкам и пользователям расти вместе с ИИ.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Продукт</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Функции</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Безопасность</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Roadmap</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Для Бизнеса</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Компания</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">О нас</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Команда</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Карьера</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Контакты</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Юридическое</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Политика Конфиденциальности</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Условия Использования</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">© 2025 SmartSpend AI. Все права защищены.</p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer hover:scale-110">
            <Globe size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer hover:scale-110">
             {/* Twitter Icon Proxy */}
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  // Inject basic animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <TechStack />
      <Problem />
      <Solution />
      <BankProfits />
      <Demo />
      <HowItWorks />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;