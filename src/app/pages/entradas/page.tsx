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
      nome: 'Entradas (Sistema)',
      total: 1200,
      cor: 'from-pink-500 to-pink-400',
      icone: '💼', // Representa algo mais corporativo/sistema
      abas: '/pages/entradas/sistema',
    },
    {
      nome: 'Empréstimos',
      total: 850,
      cor: 'from-pink-500 to-pink-400',
      icone: '💰', // Dinheiro em empréstimo
      abas: '/pages/entradas/emprestimos',
    },
    {
      nome: 'Resgate de aplicações Financeiras',
      total: 430,
      cor: 'from-pink-500 to-pink-400',
      icone: '🏦', // Banco ou aplicações financeiras
      abas: '/pages/entradas/aplicacoes',
    },
    {
      nome: 'Previsão de Vendas',
      total: 300,
      cor: 'from-pink-500 to-pink-400',
      icone: '📈', // Gráfico de crescimento
      abas: '/pages/entradas/previsao',
    },
    {
      nome: 'Venda de Imobilizado',
      total: 270,
      cor: 'from-pink-500 to-pink-400',
      icone: '🏠', // Imóvel ou bem físico
      abas: '/pages/entradas/imobilizado',
    },
    {
      nome: 'Total das Entradas',
      total: 940,
      cor: 'from-pink-500 to-pink-400',
      icone: '🧾', // Documento com totais ou consolidação
      abas: '/pages/entradas/total',
    },
  ];

  const custosVariaveisLinks = [
    'Entradas (Sistema)',
    'Empréstimos',
    'Previsão Vendas',
    'Venda Imobilizado',
    'Resgate Financeiro',
    'Total Entradas',
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* <Header setSidebarOpen={setSidebarOpen} /> */}
        <Header
          setSidebarOpen={setSidebarOpen}
          title="Lançamentos de Entradas"
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            <ButtonAside titulo="Fluxo" onClose={() => setSidebarOpen(false)} />

            {/* Menu: LANÇAMENTO ENTRADAS */}
            <div className="mt-4">
              <ButtonSubmenu
                id="prestadores_produtos"
                label1="lancamento"
                label2=""
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
