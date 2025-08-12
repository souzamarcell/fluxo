'use client';

import { useRouter } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';
import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';

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
      abas: '/pages/entradas',
    },
    {
      nome: 'Prestadores Serviço, Produtos Revenda',
      total: 850,
      cor: 'from-cyan-500 to-cyan-400',
      icone: '📉',
      abas: '/pages/custosV',
    },
    {
      nome: 'Despesas Marketing',
      total: 430,
      cor: 'from-teal-500 to-teal-400',
      icone: '📢',
      abas: '/pages/marketing',
    },
    {
      nome: 'Despesas & Custos Fixos',
      total: 300,
      cor: 'from-indigo-500 to-indigo-400',
      icone: '🏢',
      abas: '/pages/custosF',
    },
    {
      nome: 'Imposto & Comissões',
      total: 270,
      cor: 'from-yellow-500 to-yellow-400',
      icone: '📊',
      abas: '/pages/impostos',
    },
    {
      nome: 'Investimentos',
      total: 940,
      cor: 'from-green-500 to-green-400',
      icone: '📈',
      abas: '/pages/investimentos',
    },
    {
      nome: 'Devoluções',
      total: 150,
      cor: 'from-red-500 to-red-400',
      icone: '🔁',
      abas: '/pages/devolucoes',
    },
    {
      nome: 'Financiamentos',
      total: 1100,
      cor: 'from-purple-500 to-purple-400',
      icone: '💳',
      abas: '/pages/financiamentos',
    },
    {
      nome: 'Relatórios',
      total: 75,
      cor: 'from-blue-500 to-blue-400',
      icone: '📑',
      abas: '/pages/relatorios',
    },
  ];

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">

        {/* <Header setSidebarOpen={setSidebarOpen} /> */}
        <Header setSidebarOpen={setSidebarOpen} title="Fluxo" />

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-[#0d1224] text-white p-4 overflow-y-auto max-h-screen fixed top-0 left-0 h-full z-40 shadow-lg">
            {/* Logo + Fechar */}
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

            {/* Menu: LANÇAMENTO ENTRADAS */}
            <div>
              <button
                onClick={() => toggleSubmenu('lancamento')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Lançamento Entradas</span>
                <span>{submenuOpen['lancamento'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['lancamento'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Entradas (Sistema)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Empréstimos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Previsão Vendas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Venda Imobilizado
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Resgate Financeiro
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Total Entradas
                    </a>
                  </li>
                </ul>
              )}
            </div>

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

            {/* Menu: Despesas com Marketing */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('marketing')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Despesas Marketing</span>
                <span>{submenuOpen['marketing'] ? '⬆️' : '⬇️'}</span>
              </button>

              {submenuOpen['marketing'] && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Agência & Equipe externa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Ferramentas de MKT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Outra ação de MKT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Tráfego Pago
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Marketing offline
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-500">
                      Total Marketing
                    </a>
                  </li>
                </ul>
              )}
            </div>

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
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className={`block hover:text-blue-500 ${
                          item.includes('Total_Nulo')
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

            {/* Menu: impostos_comissoes */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('impostos_comissoes')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Impostos & Comissões</span>
                <span>{submenuOpen['impostos_comissoes'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['impostos_comissoes'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Impostos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Comissões
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Menu: Investimentos */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('investimentos')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Investimentos</span>
                <span>{submenuOpen['investimentos'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['investimentos'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Compras de Ativos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Melhorias
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Treinamentos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Aplicações Financeia
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Total Investimentos
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Menu: Devoluções */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('Devolucoes')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Devoluções</span>
                <span>{submenuOpen['Devolucoes'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['Devolucoes'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Cheque Devolvidos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Devoluções
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Menu: Financiamentos */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('financiamentos')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Financiamentos</span>
                <span>{submenuOpen['financiamentos'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['financiamentos'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Juros Bancários
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Parcelamentos
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Menu: Relatórios */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu('relatorios')}
                className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
              >
                <span>Relatórios</span>
                <span>{submenuOpen['relatorios'] ? '⬆️' : '⬇️'}</span>
              </button>
              {submenuOpen['relatorios'] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Fluxo de Caixa Diário
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Relatório Mensal de Caixa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Análise dos Períodos
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
                <p className="text-sm font-semibold text-blue-400">Rodrigo</p>
                <p className="text-xs text-gray-400">3 novas mensagens</p>
              </div>
            </div>
          </aside>
        )}

        {/* Conteúdo Principal */}
        <main className="flex-1 flex flex-col items-center justify-start p-1 pt-[70px] ml-0 lg:ml-64">
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
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
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
