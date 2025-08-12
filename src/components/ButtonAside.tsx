// src/components/MenuHeader.tsx
interface MenuHeaderProps {
  titulo: string;
  onClose: () => void;
}

export default function MenuHeader({ titulo, onClose }: MenuHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-400">{titulo}</h2>
        <button
          onClick={onClose}
          className="text-white text-xl hover:text-red-400"
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </div>
      <hr className="border-gray-700 mb-4" />
    </>
  );
}
