// src/components/FooterMenu.tsx
import Image from "next/image";

interface FooterMenuProps {
  nome: string;
  imagem: string;
  mensagens?: number;
}

export default function FooterMenu({ nome, imagem, mensagens = 0 }: FooterMenuProps) {
  return (
    <div className="mt-10 flex items-center space-x-3 border-t border-gray-700 pt-4">
      <Image
        src={imagem}
        width={40}
        height={40}
        alt={`Avatar ${nome}`}
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-semibold text-blue-400">Olá, {nome}!</p>
        <p className="text-xs text-gray-400">
          {mensagens} novas mensagens
        </p>
      </div>
    </div>
  );
}
