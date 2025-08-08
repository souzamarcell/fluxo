'use client';

import { useRouter } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';
import { useState } from 'react';
import Image from 'next/image';

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

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

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


  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        {!sidebarOpen && (
          <div className="fixed top-4 left-4 z-50 flex items-center space-x-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className=" top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              ☰ Menu
            </button>
            <span className="text-sm text-gray-600 font-medium">
              Prestadores de Serviço <br /> produtos para Revenda
            </span>
          </div>
        )}

        {/* Sidebar */}
        {sidebarOpen && (
          // <aside className="w-64 bg-[#0d1224] text-white p-4 fixed top-0 left-0 h-full z-40 shadow-lg">
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
            {/* <div className="flex items-center justify-between mb-6"> */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-blue-400">Fluxo</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white text-xl hover:text-red-400"
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            <hr className="border-gray-700 mb-4" />

            {/* Menu: Prestadores de Serviço & Produtos para Revenda */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('prestadores_produtos')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>
                  Prestadores de Serviço
                  <br />
                  Produtos para Revenda
                </span>
                <span>{submenuOpen['prestadores_produtos'] ? '⬆️' : '⬇️'}</span>
              </button>

              {submenuOpen['prestadores_produtos'] && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Prestadores de Serviço
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Vestuário para Revenda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Outro Custo Variável
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Alimentos para Revenda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Insumos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Total Custos Variáveis
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Footer do menu */}
            <div className="mt-10 flex items-center space-x-3 border-t border-gray-700 pt-4">
              <Image
                src="/image/colaboradores/rodrigo.martins.jpg"
                width={40}
                height={40}
                alt="Avatar Rodrigo"
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  Olá, Rodrigo!
                </p>
                <p className="text-xs text-gray-400">3 novas mensagens</p>
              </div>
            </div>
          </aside>
        )}

        {/* Conteúdo Principal */}
        <main className="flex-1 flex flex-col items-center justify-center p-1 ml-0 lg:ml-64">
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
            {categorias.map((cat, i) => (
              <button
                key={i}
                type="button"
                onClick={() => cat.abas && router.push(cat.abas)}
                style={{ width: '146px', height: '80px' }}
                className={`rounded-xl bg-gradient-to-r ${cat.cor} text-white px-2 py-2 shadow-md flex items-center justify-between transition transform hover:scale-105 active:scale-95`}
              >
                <div className="flex flex-col justify-between h-full text-left">
                  <h2 className="text-xs font-bold leading-tight">
                    {cat.nome}
                  </h2>
                  <p className="text-xs">Total {formatter.format(cat.total)}</p>
                </div>
                <div className="text-xl self-center">{cat.icone}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-6 mt-4">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-800"
            >
              Login
            </button>
            <button
              onClick={() => router.push('/pages/menu')}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600"
            >
              Voltar
            </button>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
