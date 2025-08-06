"use client";

import { useRouter } from "next/navigation";
import { AuthGuard } from "@/components/AuthGuard";
import { useState } from "react";
import Image from "next/image";

export default function FluxoPage() {
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [sidebarOpen, setSidebarOpen] = useState(false); // 👈 controla a sidebar

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/");
  };

  const toggleSubmenu = (id: string) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        {/* Botão para abrir Sidebar */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
              <h2 className="text-2xl font-bold text-blue-400">Fluxo2</h2>
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
                onClick={() => toggleSubmenu("lancamento")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Lançamento Entradas</span>
                <span>{submenuOpen["lancamento"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["lancamento"] && (
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
                onClick={() => toggleSubmenu("prestadores_produtos")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Prestadores de Serviço & Produtos para Revenda</span>
                <span>{submenuOpen["prestadores_produtos"] ? "⬆️" : "⬇️"}</span>
              </button>

              {submenuOpen["prestadores_produtos"] && (
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
                onClick={() => toggleSubmenu("marketing")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Despesas Marketing</span>
                <span>{submenuOpen["marketing"] ? "⬆️" : "⬇️"}</span>
              </button>

              {submenuOpen["marketing"] && (
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
                onClick={() => toggleSubmenu("custosFixos")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Despesas & Custos Fixos</span>
                <span>{submenuOpen["custosFixos"] ? "⬆️" : "⬇️"}</span>
              </button>

              {submenuOpen["custosFixos"] && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  {[
                    "Pagamento do Pessoal",
                    "Encargos Sociais",
                    "Vale Transporte",
                    "Cesta Básica (Benefícios)",
                    "Medicina do Trabalho, Uniforme e Outros",
                    "Despesas Sindicais",
                    "Prêmios & Bonificações",
                    "Pró-labore",
                    "Tarifas Públicas",
                    "Contábil & Legal",
                    "Passivos Trabalhistas",
                    "Aluguel + IPTU",
                    "Material Escritório & Limpeza",
                    "Seguro Equipamentos & Predial",
                    "Royalties & Licenças",
                    "Despesas Bancárias",
                    "Software",
                    "Gráficas",
                    "Despesas Prediais",
                    "Equipamentos",
                    "Acessórios",
                    "Lavanderia",
                    "Outras Despesas",
                    "Total Custos Fixos",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className={`block hover:text-blue-500 ${
                          item.includes("Totalx")
                            ? "font-bold text-blue-700"
                            : ""
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
                onClick={() => toggleSubmenu("impostos_comissoes")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Impostos & Comissões</span>
                <span>{submenuOpen["impostos_comissoes"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["impostos_comissoes"] && (
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
                onClick={() => toggleSubmenu("investimentos")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Investimentos</span>
                <span>{submenuOpen["investimentos"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["investimentos"] && (
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
                onClick={() => toggleSubmenu("Devolucoes")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Devoluções</span>
                <span>{submenuOpen["Devolucoes"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["Devolucoes"] && (
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
                onClick={() => toggleSubmenu("financiamentos")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Financiamentos</span>
                <span>{submenuOpen["financiamentos"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["financiamentos"] && (
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
                onClick={() => toggleSubmenu("relatorios")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Relatórios</span>
                <span>{submenuOpen["relatorios"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["relatorios"] && (
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
                <p className="text-sm font-semibold text-blue-400">
                  Olá, Rodrigo!
                </p>
                <p className="text-xs text-gray-400">3 novas mensagens</p>
              </div>
            </div>
          </aside>
        )}

        {/* Conteúdo Principal */}
        <main className="flex-1 flex flex-col items-center justify-center p-8 ml-0 lg:ml-64">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindo, Rodrigo! 🚀
          </h1>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Sair
          </button>
        </main>
      </div>
    </AuthGuard>
  );
}
