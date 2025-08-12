'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthGuard } from '@/components/AuthGuard';
import { Header } from '@/components/Header';
import MainGrid from '@/components/MainGrid';
import FooterMenu from '@/components/FooterMenu';
import ButtonAside from '@/components/ButtonAside';
import ButtonSubmenu from '@/components/ButtonSubmenu';

export default function FluxoPage() {
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [sidebarOpen, setSidebarOpen] = useState(false); // 👈 controla a sidebar

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/');
  };

  const toggleSubmenu = (id: string) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categorias = [
    {
      nome: 'Pagamento do Pessoal',
      total: 1200,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '💼', // Trabalho / pessoal
      abas: '/pages/custosF/pagamentoPessoal',
    },
    {
      nome: 'Encargos Sociais',
      total: 850,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '📑', // Documentos fiscais
      abas: '/pages/custosF/encargosSociais',
    },
    {
      nome: 'Vale Transporte',
      total: 430,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🚌', // Transporte
      abas: '/pages/custosF/valeTransporte',
    },
    {
      nome: 'Cesta Básica (Benefícios)',
      total: 300,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🛒', // Alimentos / cesta básica
      abas: '/pages/custosF/cestaBasica',
    },
    {
      nome: 'Medicina do Trabalho, Uniforme e Outros',
      total: 270,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '⚕️', // Saúde / trabalho
      abas: '/pages/custosF/medicinaTrabalho',
    },
    {
      nome: 'Despesas Sindicais',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🤝', // Sindicato / acordo
      abas: '/pages/custosF/despesasSindicais',
    },
    {
      nome: 'Prêmios & Bonificações',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏆', // Prêmio
      abas: '/pages/custosF/premiosBonificacoes',
    },
    {
      nome: 'Pró-labore',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '👔', // Pagamento a sócios
      abas: '/pages/custosF/proLabore',
    },
    {
      nome: 'Tarifas Públicas',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '💡', // Contas públicas (energia, água)
      abas: '/pages/custosF/tarifasPublicas',
    },
    {
      nome: 'Contabilidade & Legal',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '⚖️', // Advocacia / contabilidade
      abas: '/pages/custosF/contabilidadeLegal',
    },
    {
      nome: 'Jurídico & Passivos',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '📜', // Acordos / obrigações
      abas: '/pages/custosF/juridicoPassivos',
    },
    {
      nome: 'Aluguel + IPTU',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏠', // Imóvel
      abas: '/pages/custosF/aluguelIPTU',
    },
    {
      nome: 'Material Escritório & Limpeza',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🧹', // Limpeza
      abas: '/pages/custosF/materialEscritorio',
    },
    {
      nome: 'Seguro Equipamentos & Predial',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🛡️', // Proteção / seguro
      abas: '/pages/custosF/seguroEquipamentos',
    },
    {
      nome: 'Royalties & Licenças',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '📄', // Licença
      abas: '/pages/custosF/royaltiesLicencas',
    },
    {
      nome: 'Despesas Bancárias',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏦', // Banco
      abas: '/pages/custosF/despesasBancarias',
    },
    {
      nome: 'Software',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '💻', // Tecnologia
      abas: '/pages/custosF/software',
    },
    {
      nome: 'Gráficas',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🖨️', // Impressão
      abas: '/pages/custosF/graficas',
    },
    {
      nome: 'Manutenção Prediais',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏢', // Prédio
      abas: '/pages/custosF/ManutencaoPrediais',
    },
    {
      nome: 'Manutenção Equipamentos',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '⚙️', // Equipamentos
      abas: '/pages/custosF/ManutencaoEquipamentos',
    },
    {
      nome: 'Acessórios',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🎒', // Acessórios
      abas: '/pages/custosF/acessorios',
    },
    {
      nome: 'Descartáveis & Lavanderia',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🧺', // Lavanderia
      abas: '/pages/custosF/descartaveisLavanderia',
    },
    {
      nome: 'Outras Despesas',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '📦', // Outros
      abas: '/pages/custosF/outras',
    },
    {
      nome: 'Total Despesas & Custos Fixos',
      total: 940,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '📊', // Total consolidado
      abas: '/pages/custosF/total',
    },
  ];

  const custosVariaveisLinks = [
    'Pagamento do Pessoal',
    'Encargos Sociais',
    'Vale Transporte',
    'Cesta Básica (Benefícios)',
    'Medicina do Trabalho, Uniforme e Outros',
    'Despesas Sindicais',
    'Prêmios & Bonificações',
    'Pró-labore',
    'Tarifas Públicas',
    'Contabilidade & Legal',
    'Jurídico & Passivos',
    'Aluguel + IPTU',
    'Material Escritório & Limpeza',
    'Seguro Equipamentos & Predial',
    'Royalties & Licenças',
    'Despesas Bancárias',
    'Software',
    'Gráficas',
    'Manutenção Prediais',
    'Manutenção Equipamentos',
    'Acessórios',
    'Descartáveis & Lavanderia',
    'Outras Despesas',
    'Total Despesas & Custos Fixos',
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        <Header
          setSidebarOpen={setSidebarOpen}
          title="Despesas & Custos Fixos"
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            <ButtonAside titulo="Fluxo" onClose={() => setSidebarOpen(false)} />

            {/* Menu: Despesas & Custos Fixos */}
            <div className="mt-4">
              <ButtonSubmenu
                id="prestadores_produtos"
                label1="Despesas"
                label2="Custos Fixos"
                isOpen={submenuOpen['prestadores_produtos']}
                onToggle={toggleSubmenu}
              />

              {/* custosVariaveisLinks */}
              {submenuOpen['prestadores_produtos'] && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  {custosVariaveisLinks.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="block hover:text-blue-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer do menu */}
            <FooterMenu
              nome="Rodrigo"
              imagem="/image/colaboradores/rodrigo.martins.jpg"
              mensagens={3}
            />
          </aside>
        )}

        {/* Conteúdo Principal */}
        <MainGrid
          categorias={categorias}
          onLogout={handleLogout}
          backRoute="/pages/menu"
          headerOffsetPx={70} // ajuste se seu header for maior/menor
        />
      </div>
    </AuthGuard>
  );
}
