'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      (email === 'rodrigo@gmail.com' && senha === '123') ||
      (email === 'marcell@gmail.com' && senha === '123')
    ) {
      setErro('');
      localStorage.setItem('loggedIn', 'true'); // <-- Marca como logado
      router.push('pages/menu');
    } else {
      setErro('E-mail ou senha inválidos.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-sm">
        {/* <h2 className="text-3xl font-bold text-center text-sky-700 dark:text-white mb-6"> */}
        <h2 className="text-3xl font-bold text-center text-sky-700 dark:text-green-500 mb-6">
          GRAFICOSNET
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 dark:text-gray-300 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 dark:text-gray-300 mb-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
          >
            Entrar
          </button>
          <span className="text-[10px] text-gray-600">Versão 1.1.2</span>
        </form>
      </div>
    </div>
  );
}
