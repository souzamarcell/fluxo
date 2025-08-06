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

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/");
  };

  const toggleSubmenu = (id: string) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-[#0d1224] text-white p-4">
          {/* Logo + Fechar */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-blue-400">Fluxo</div>
            <button
              onClick={() => alert("Você clicou em fechar")}
              className="text-white text-xl"
            >
              ✕
            </button>
          </div>

          <hr className="border-gray-700 mb-4" />

          {/* Menu Home */}
          <div>
            <button
              onClick={() => toggleSubmenu("home")}
              className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800"
            >
              <span>LANÇAMENTO ENTRADAS</span>
              <span>{submenuOpen["home"] ? "⬆️" : "⬇️"}</span>
            </button>
            {submenuOpen["home"] && (
              <ul className="ml-4 mt-2 space-y-1">
                <li>
                  <a href="#" className="block hover:text-blue-400">
                    Entradas (Sistema)
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-blue-400">
                    Homepage - 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-blue-400">
                    Homepage - 3
                  </a>
                </li>
                <li>
                  <a href="#" className="block hover:text-blue-400">
                    Homepage - 4
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Menu Category */}
          <div className="mt-4">
            <button
              onClick={() => toggleSubmenu("category")}
              className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-800"
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

          {/* Footer */}
          <div className="mt-10 flex items-center space-x-3 border-t border-gray-700 pt-4">
            <Image src="/image/colaboradores/rodrigo.martins.jpg" width={40} height={40} alt="Avatar" />
            <div>
              <p className="text-sm font-semibold text-blue-400">
                Hello Steven !
              </p>
              <p className="text-xs text-gray-400">You have 3 new messages</p>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindo, Rodrigo! 🚀
          </h1>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Sair
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}
