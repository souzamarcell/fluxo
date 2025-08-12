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
      nome: 'Agência & Equipe Externa',
      total: 1200,
      cor: 'from-teal-500 to-teal-400',
      icone: '💼', // Representa profissionais ou equipe externa
      abas: '/pages/marketing/agencia',
    },
    {
      nome: 'Ferramentas de Marketing',
      total: 850,
      cor: 'from-teal-500 to-teal-400',
      icone: '🧰', // Representa ferramentas em geral
      abas: '/pages/marketing/ferramentas',
    },
    {
      nome: 'Outra Ação de Marketing',
      total: 430,
      cor: 'from-teal-500 to-teal-400',
      icone: '📣', // Representa campanhas/divulgação
      abas: '/pages/marketing/acao',
    },
    {
      nome: 'Tráfego Pago',
      total: 300,
      cor: 'from-teal-500 to-teal-400',
      icone: '💰', // Representa investimento financeiro
      abas: '/pages/marketing/trafego',
    },
    {
      nome: 'Marketing Offline',
      total: 270,
      cor: 'from-teal-500 to-teal-400',
      icone: '📰', // Representa mídia impressa/offline
      abas: '/pages/marketing/offline',
    },
    {
      nome: 'Total Marketing',
      total: 940,
      cor: 'from-teal-500 to-teal-400',
      icone: '📊', // Total consolidado
      abas: '/pages/marketing/total',
    },
  ];

  const custosVariaveisLinks = [
    'Ferramentas de MKT',
    'Outra ação de MKT',
    'Tráfego Pago',
    'Marketing offline',
    'Total Marketing',
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        <Header
          setSidebarOpen={setSidebarOpen}
          title="Despesas com Marketing"
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            <ButtonAside titulo="Fluxo" onClose={() => setSidebarOpen(false)} />

            {/* Menu: Despesas com Marketing */}
            <div className="mt-4">
              <ButtonSubmenu
                id="prestadores_produtos"
                label1="Despesas Marketing"
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
