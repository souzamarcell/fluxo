'use client';

import Image from 'next/image';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  title?: string; // prop opcional
}

export function Header({ setSidebarOpen, title = 'Fluxo' }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-1 px-1 shadow-md z-40">
      <div className="mt-0 flex items-start gap-0">
        <div className="mt-0 flex items-center space-x-2 pt-0 flex-grow">
          <Image
            src="/image/colaboradores/rodrigo.martins.jpg"
            width={40}
            height={40}
            alt="Avatar Rodrigo"
            className="rounded-full"
          />
          <div className="mt-0 flex flex-col items-start space-y-1 pt-0">
            <p className="text-sm font-semibold text-blue-400">Rodrigo Virgílio</p>
            <p className="text-xs text-gray-400">CEO GraficosNet</p>
          </div>
        </div>
        <div className="items-center space-x-2">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex flex-col top-0 left-0 p-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            ☰ Menu
          </button>
        </div>
      </div>
      <span className="mt-1 block w-full text-sm bg-gray-900 text-gray-300 text-center rounded-md font-medium">
          {title}
      </span>
    </header>
  );
}
