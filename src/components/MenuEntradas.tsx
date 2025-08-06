'use client';

import { useRouter } from 'next/navigation';

export default function MenuEntradas() {
  const router = useRouter();

  const buttons = [
    { label: 'Entradas (Sistema)', path: '/entradas/sistema', color: 'bg-yellow-300' },
    { label: 'Previsão de Vendas', path: '/entradas/previsao', color: 'bg-pink-300' },
    { label: 'Empréstimos', path: '/entradas/emprestimos', color: 'bg-pink-300' },
    { label: 'Venda de Imobilizado', path: '/entradas/imobilizado', color: 'bg-yellow-300' },
    { label: 'Resgate de Aplicações Fin.', path: '/entradas/aplicacoes', color: 'bg-yellow-300' },
    { label: 'Total das Entradas', path: '/entradas/total', color: 'border-2 border-yellow-400' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">LANÇAMENTO ENTRADAS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {buttons.map(({ label, path, color }) => (
          <button
            key={path}
            onClick={() => router.push(path)}
            className={`py-2 px-4 rounded-md text-black font-semibold ${color} hover:opacity-80 transition`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
