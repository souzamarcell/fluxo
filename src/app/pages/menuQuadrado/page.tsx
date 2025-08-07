'use client';

import { useRouter } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';
import { useState } from 'react';
import Image from 'next/image';
import { FaCocktail, FaTicketAlt, FaMusic } from 'react-icons/fa';

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
      nome: 'Lançamento Entradas',
      total: 1200,
      cor: 'from-pink-500 to-pink-400',
      icone: '💸',
    },
    {
      nome: 'Custos Variáveis',
      total: 850,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '📉',
    },
    {
      nome: 'Despesas Marketing',
      total: 430,
      cor: 'from-teal-500 to-teal-400',
      icone: '📢',
    },
    {
      nome: 'Custo Fixo',
      total: 300,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏢',
    },
    {
      nome: 'Imposto & Comissões',
      total: 270,
      cor: 'from-yellow-500 to-yellow-400',
      icone: '📊',
    },
    {
      nome: 'Investimentos',
      total: 940,
      cor: 'from-green-500 to-green-400',
      icone: '📈',
    },
    {
      nome: 'Devoluções',
      total: 150,
      cor: 'from-red-500 to-red-400',
      icone: '🔁',
    },
    {
      nome: 'Financiamentos',
      total: 1100,
      cor: 'from-purple-500 to-purple-400',
      icone: '💳',
    },
    {
      nome: 'Relatórios',
      total: 75,
      cor: 'from-blue-500 to-blue-400',
      icone: '📑',
    },
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-2 left-4 z-50 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            ☰ Menu
          </button>
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

            {/* Menu: Despesas & Custos Fixos */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('custosFixos')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Despesas & Custos Fixos</span>
                <span>{submenuOpen['custosFixos'] ? '⬆️' : '⬇️'}</span>
              </button>

              {submenuOpen['custosFixos'] && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  {[
                    'Pagamento do Pessoal',
                    'Encargos Sociais',
                    'Vale Transporte',
                    'Cesta Básica (Benefícios)',
                    'Medicina do Trabalho, Uniforme e Outros',
                    'Despesas Sindicais',
                    'Prêmios & Bonificações',
                    'Pró-labore',
                    'Tarifas Públicas',
                    'Contábil & Legal',
                    'Passivos Trabalhistas',
                    'Aluguel + IPTU',
                    'Material Escritório & Limpeza',
                    'Seguro Equipamentos & Predial',
                    'Royalties & Licenças',
                    'Despesas Bancárias',
                    'Software',
                    'Gráficas',
                    'Despesas Prediais',
                    'Equipamentos',
                    'Acessórios',
                    'Lavanderia',
                    'Outras Despesas',
                    'Total Custos Fixos',
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className={`block hover:text-blue-500 ${
                          item.includes('Totalx')
                            ? 'font-bold text-blue-700'
                            : ''
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
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
              <div
                key={i}
                style={{ width: '146px', height: '80px' }}
                className={`rounded-xl bg-gradient-to-r ${cat.cor} text-white px-2 py-2 shadow-md flex items-center justify-between`}
              >
                {/* Coluna esquerda: nome e total fixado no final */}
                <div className="flex flex-col justify-between h-full">
                  <h2 className="text-xs font-bold leading-tight">
                    {cat.nome}
                  </h2>
                  <p className="text-xs">Total {formatter.format(cat.total)}</p>
                </div>

                {/* Ícone à direita */}
                <div className="text-xl self-center">{cat.icone}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800"
            >
              Sair
            </button>
            <button
              onClick={() => router.push('/pages/menu')}
              className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600"
            >
              Voltar
            </button>
          </div>
        </main>

        {/* ---- */}
      </div>
    </AuthGuard>
  );
}
