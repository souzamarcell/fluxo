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
      nome: 'Compras de Ativos',
      total: 99200,
      cor: 'from-green-500 to-green-400',
      icone: '💼', // Representa algo mais corporativo/sistema
      abas: '/pages/investimentos/comprasAtivos',
    },
    {
      nome: 'Melhorias',
      total: 8850,
      cor: 'from-green-500 to-green-400',
      icone: '💰', // Dinheiro em empréstimo
      abas: '/pages/investimentos/melhorias',
    },
    {
      nome: 'Treinamentos',
      total: 2850,
      cor: 'from-green-500 to-green-400',
      icone: '💰', // Dinheiro em empréstimo
      abas: '/pages/investimentos/treinamentos',
    },
    {
      nome: 'Aplicações Financeiras',
      total: 8850,
      cor: 'from-green-500 to-green-400',
      icone: '💰', // Dinheiro em empréstimo
      abas: '/pages/investimentos/aplicacoesFinanceiras',
    },
    {
      nome: 'Total Investimentos',
      total: 8850,
      cor: 'from-green-500 to-green-400',
      icone: '💰', // Dinheiro em empréstimo
      abas: '/pages/investimentos/total',
    },
  ];

  const custosVariaveisLinks = [
    'Compras de Ativos',
    'Melhorias',
    'Treinamentos',
    'Aplicações Financeiras',
    'Total Investimentos',
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* <Header setSidebarOpen={setSidebarOpen} /> */}
        <Header
          setSidebarOpen={setSidebarOpen}
          title="Investimentos"
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            <ButtonAside titulo="Fluxo" onClose={() => setSidebarOpen(false)} />

            {/* Menu: Investimentos */}
            <div className="mt-4">
              <ButtonSubmenu
                id="prestadores_produtos"
                label1="Investimentos"
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
