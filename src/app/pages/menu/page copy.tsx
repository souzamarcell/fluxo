"use client";

import { useRouter } from "next/navigation";
import { AuthGuard } from "@/components/AuthGuard";

import MenuEntradas from "@/components/MenuEntradas";

// export default function HomePage() {
//   return <MenuEntradas />;
// }

export default function FluxoPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Bem-vindo, Rodrigo! 🚀
        </h1>

        <MenuEntradas />

        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Sair
        </button>
      </div>
    </AuthGuard>
  );
}
