// src/components/ButtonSubmenu.tsx
interface ButtonSubmenuProps {
  id: string;
  label1?: string;
  label2?: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function ButtonSubmenu({
  id,
  label1,
  label2,
  isOpen,
  onToggle,
}: ButtonSubmenuProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="w-full flex justify-between items-center px-2 py-0 hover:bg-gray-800 rounded"
    >
      <span className="text-left">
        {label1 && <>{label1}</>}
        {label2 && (
          <>
            <br />
            {label2}
          </>
        )}
      </span>
      <span>{isOpen ? '⬆️' : '⬇️'}</span>
    </button>
  );
}
