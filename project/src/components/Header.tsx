import { Menu, X } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function Header({
  onMenuToggle,
  menuOpen,
}: HeaderProps) {
  return (
   <header
  className={`fixed top-0 w-full bg-white shadow-sm transition-all ${
    menuOpen ? "z-0 opacity-0" : "z-50 opacity-100"
  }`}
>
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center">

        <button onClick={onMenuToggle} className="p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <img
          src="/new pharmos logo.png"
          alt="PHARMOS"
          className="h-12 ml-3"
        />

      </div>
    </header>
  );
}