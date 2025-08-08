'use client';

import { useRouter } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';

export default function EntradasSistemaPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/');
  };

  return (
    <AuthGuard>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Total das Entradas
        </h1>

        <div className="flex gap-6 mt-4">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-800"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/pages/custosV')}
            className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600"
          >
            Voltar
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}
