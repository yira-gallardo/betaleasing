export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#0A1A23] flex flex-col md:flex-row items-center justify-between px-8 py-8 gap-8 border-t border-gray-200">
      {/* Logo y nombre */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img
          src="/logo-azul.png"
          alt="BetaLeasing Logo"
          className="h-48 w-auto"
        />
      </div>
      {/* Oficinas */}
      <div className="text-xs text-center md:text-left">
        <div className="font-bold mb-1">Oficinas</div>
        Newton 186 Int. 401, Polanco,
        <br />
        CDMX. CP 11560
        <br />
        México
      </div>
      {/* Legal */}
      <div className="text-xs flex flex-col gap-1 text-center md:text-right">
        <a href="#" className="hover:underline">
          Términos y condiciones
        </a>
        <a href="#" className="hover:underline">
          Aviso de privacidad
        </a>
      </div>
    </footer>
  );
}
