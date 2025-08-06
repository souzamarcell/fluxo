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
          <aside className="w-64 bg-[#0d1224] text-white p-4 fixed top-0 left-0 h-full z-40 shadow-lg">
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

            {/* Menu: Category */}
            <div className="mt-4">
              <button
                onClick={() => toggleSubmenu("category")}
                className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded"
              >
                <span>Category</span>
                <span>{submenuOpen["category"] ? "⬆️" : "⬇️"}</span>
              </button>
              {submenuOpen["category"] && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Cat 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400">
                      Cat 2
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
