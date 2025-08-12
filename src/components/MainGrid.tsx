// components/MainGrid.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export type Categoria = {
  nome: string;
  total: number;
  cor: string;
  icone: React.ReactNode | string;
  abas?: string;
};

interface MainGridProps {
  categorias: Categoria[];
  onLogout?: () => void;
  backRoute?: string;
  headerOffsetPx?: number; // opcional: altura do header para ajustar padding-top
}

export default function MainGrid({
  categorias,
  onLogout,
  backRoute,
  headerOffsetPx = 70,
}: MainGridProps) {
  const router = useRouter();

  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  return (
    <main
      className="flex-1 flex flex-col items-center justify-start p-1 ml-0 lg:ml-64"
      style={{ paddingTop: `${headerOffsetPx}px` }}
    >
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
          onClick={() => (onLogout ? onLogout() : router.push('/'))}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
        >
          Login
        </button>

        <button
          onClick={() => (backRoute ? router.push(backRoute) : router.push('/pages/menu'))}
          className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Voltar
        </button>
      </div>
    </main>
  );
}
