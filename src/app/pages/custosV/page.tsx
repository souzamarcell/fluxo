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
      nome: 'Prestadores de Serviço',
      total: 1200,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '💼', // Profissional / prestador de serviço
      abas: '/pages/custosV/prestadores',
    },
    {
      nome: 'Vestuário para Revenda',
      total: 850,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '👕', // Roupas / vestuário
      abas: '/pages/custosV/vestuario',
    },
    {
      nome: 'Outro Custo Variável',
      total: 430,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '💳', // Custos diversos / cartão
      abas: '/pages/custosV/variavel',
    },
    {
      nome: 'Alimentos para Revenda',
      total: 300,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '🍎', // Alimentos
      abas: '/pages/custosV/alimentos',
    },
    {
      nome: 'Insumos',
      total: 270,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '⚙️', // Equipamento / insumo
      abas: '/pages/custosV/insumos',
    },
    {
      nome: 'Total das Entradas',
      total: 940,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '📊', // Total / gráfico consolidado
      abas: '/pages/custosV/total',
    },
  ];

  const custosVariaveisLinks = [
    'Prestadores de Serviço',
    'Vestuário para Revenda',
    'Outro Custo Variável',
    'Alimentos para Revenda',
    'Insumos',
    'Total Custos Variáveis',
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        <Header
          setSidebarOpen={setSidebarOpen}
          title="Prestadores de Serviço produtos para Revenda"
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            <ButtonAside titulo="Fluxo" onClose={() => setSidebarOpen(false)} />

            {/* Menu: Prestadores de Serviço & Produtos para Revenda */}
            <div className="mt-4">
              <ButtonSubmenu
                id="prestadores_produtos"
                label1="Prestadores de Serviço"
                label2="Produtos para Revenda"
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
