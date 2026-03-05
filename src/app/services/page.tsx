'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe, Wheat, Map, Droplet, Leaf, ArrowRight, Target, Layers, Ruler, Sprout, FlaskConical, TreePine, Mountain, Factory, HardHat } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  {
    id: 'mining',
    name: 'Mineração e Recursos Minerais',
    icon: Pickaxe,
    color: 'falcon-red',
    services: [
      {
        name: 'Estudos de Viabilidade',
        description: 'Estudos técnicos, económicos e ambientais para abertura ou expansão de explorações mineiras.',
        icon: Target,
      },
      {
        name: 'Modelação Geológica',
        description: 'Cálculo de reservas e planeamento de lavra a curto, médio e longo prazo.',
        icon: Layers,
      },
      {
        name: 'Cálculo de Volumes',
        description: 'Cálculo de volumes de stockpiles, cortes e aterros com alta precisão.',
        icon: Ruler,
      },
      {
        name: 'Monitorização de Lavra',
        description: 'Acompanhamento do progresso, mapeamento de pit e relatórios periódicos.',
        icon: Target,
      },
    ],
  },
  {
    id: 'agriculture',
    name: 'Agricultura e Pecuária',
    icon: Wheat,
    color: 'falcon-cyan',
    services: [
      {
        name: 'Agricultura de Precisão',
        description: 'Análise NDVI, monitorização de saúde das culturas e otimização de inputs.',
        icon: Sprout,
      },
      {
        name: 'Estudos de Aptidão Agro-ecológica',
        description: 'Avaliação do potencial do solo e clima para culturas específicas.',
        icon: Wheat,
      },
      {
        name: 'Gestão de Irrigação',
        description: 'Planeamento e análise de eficiência de sistemas de irrigação.',
        icon: Droplet,
      },
      {
        name: 'Monitorização de Colheitas',
        description: 'Estimativa de yield e planeamento de colheita.',
        icon: Wheat,
      },
    ],
  },
  {
    id: 'geomatics',
    name: 'Geomática',
    icon: Map,
    color: 'falcon-red',
    services: [
      {
        name: 'Levantamentos Topográficos',
        description: 'Levantamentos de alta precisão com Drones/UAV e tecnologia LiDAR.',
        icon: Ruler,
      },
      {
        name: 'Sistemas de Informação Geográfica (SIG)',
        description: 'Implementação e gestão de bases de dados espaciais para apoio à decisão.',
        icon: Map,
      },
      {
        name: 'Cartografia Temática',
        description: 'Produção de mapas especializados (geologia, uso do solo, risco).',
        icon: Map,
      },
      {
        name: 'Modelação 3D',
        description: 'Criação de modelos digitais de terreno e superfície para análise volumétrica.',
        icon: Layers,
      },
      {
        name: 'Ortofotomapas',
        description: 'Produção de ortofotomapas de alta resolução.',
        icon: Map,
      },
    ],
  },
  {
    id: 'hydrogeology',
    name: 'Hidrogeologia',
    icon: Droplet,
    color: 'falcon-cyan',
    services: [
      {
        name: 'Prospecção de Água',
        description: 'Estudos para localização e dimensionamento de furos de captação de água subterrânea.',
        icon: Droplet,
      },
      {
        name: 'Monitorização da Qualidade',
        description: 'Programas de amostragem e análise físico-química de águas.',
        icon: FlaskConical,
      },
      {
        name: 'Modelação Hidrogeológica',
        description: 'Simulação matemática do fluxo e transporte de contaminantes em aquíferos.',
        icon: Droplet,
      },
      {
        name: 'Gestão de Recursos Hídricos',
        description: 'Planos de uso eficiente e sustentável da água em projetos agro-industriais.',
        icon: Droplet,
      },
    ],
  },
  {
    id: 'environment',
    name: 'Impacto e Gestão Ambiental',
    icon: Leaf,
    color: 'falcon-red',
    services: [
      {
        name: 'Estudos de Impacte Ambiental (EIA)',
        description: 'Elaboração e coordenação de processos de avaliação de impacte ambiental.',
        icon: TreePine,
      },
      {
        name: 'Auditorias Ambientais',
        description: 'Verificação da conformidade legal e due diligence ambiental.',
        icon: Mountain,
      },
      {
        name: 'Licenciamento Ambiental',
        description: 'Acompanhamento de processos de licenciamento industrial e ambiental.',
        icon: Factory,
      },
      {
        name: 'Recuperação Ambiental',
        description: 'Planos de encerramento e reabilitação paisagística de áreas mineiras.',
        icon: TreePine,
      },
      {
        name: 'Monitorização Ambiental',
        description: 'Acompanhamento contínuo do cumprimento ambiental.',
        icon: Leaf,
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-falcon-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-falcon-dark to-falcon-black">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-sm font-bold text-falcon-red uppercase tracking-[0.4em] mb-4">
              Nossos Serviços
            </h2>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-falcon-white">
              Soluções <span className="text-gradient-red">Geoespaciais</span> Completas
            </h1>
            <p className="text-xl text-falcon-gray max-w-3xl mx-auto leading-relaxed">
              Oferecemos serviços especializados em geoinformação, drones e análise espacial 
              para mineração, agricultura, meio ambiente e infraestrutura em Moçambique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section-padding bg-falcon-black relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        
        <div className="container-custom relative z-10">
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-16 h-16 bg-falcon-${category.color}/20 rounded-2xl flex items-center justify-center`}>
                    <category.icon size={32} className={`text-falcon-${category.color}`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-falcon-white">
                    {category.name}
                  </h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.05 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group p-6 card-falcon rounded-xl hover:border-falcon-red/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-falcon-red/0 via-falcon-red/5 to-falcon-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
                      
                      {/* Icon */}
                      <div className={`w-10 h-10 bg-falcon-${category.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon size={20} className={`text-falcon-${category.color}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-falcon-white mb-3 group-hover:text-falcon-red transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-falcon-gray leading-relaxed group-hover:text-falcon-silver transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Bottom Highlight Line */}
                      <div className={`h-0.5 w-0 bg-falcon-${category.color} group-hover:w-full transition-all duration-500 mt-4`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-falcon-black to-falcon-dark relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-falcon-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-falcon-gray mb-10 leading-relaxed">
              Entre em contacto connosco para discutir o seu projeto e receber um orçamento personalizado.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-red hover:shadow-glow-red text-falcon-white font-bold rounded-lg transition-all duration-300 text-lg group"
            >
              Solicitar Orçamento
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Footer from '@/components/layout/Footer';
