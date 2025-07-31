import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Mobile */}
      <footer className="w-full bg-white text-[#0A1A23] flex flex-col items-center justify-center px-4 py-6 gap-4 border-t border-gray-200 block md:hidden">
        <img
          src="/logo-azul.png"
          alt="BetaLeasing Logo"
          className="h-16 w-auto mb-2"
        />
        <div className="text-xs text-center flex flex-col gap-1">
          <div className="font-bold mb-1">Oficinas</div>
          Newton 186 Int. 401, Polanco,
          <br />
          CDMX. CP 11560
          <br />
          México
        </div>
        <div className="text-xs flex flex-col gap-1 text-center mt-2">
          <div className="font-bold mb-1">Legal</div>
          <a href="/aviso-privacidad" className="hover:underline">
            Términos y condiciones
          </a>
          <Link href="/aviso-privacidad" className="hover:underline">
            Aviso de privacidad
          </Link>
        </div>
      </footer>

      {/* Footer Desktop */}
      <footer className="w-full bg-white text-[#0A1A23] hidden md:flex flex-row items-start justify-between px-8 py-6 gap-8 border-t border-gray-200 relative overflow-visible">
        {/* Logo y nombre */}
        <div
          className="flex items-start gap-2 min-w-[180px] relative overflow-visible"
          style={{ height: "48px" }}
        >
          <img
            src="/logo-azul.png"
            alt="BetaLeasing Logo"
            className="absolute -top-12 left-0 h-32 md:h-40 w-auto"
            style={{ zIndex: 1 }}
          />
        </div>
        {/* Oficinas */}
        <div className="text-xs text-left flex flex-col justify-start min-w-[220px]">
          <div className="font-bold mb-1">Oficinas</div>
          Newton 186 Int. 401, Polanco,
          <br />
          CDMX. CP 11560
          <br />
          México
        </div>
        {/* Legal */}
        <div className="text-xs flex flex-col gap-1 text-left min-w-[180px]">
          <div className="font-bold mb-1 text-left">Legal</div>
          <a href="/aviso-privacidad" className="hover:underline">
            Términos y condiciones
          </a>
          <Link href="/aviso-privacidad" className="hover:underline">
            Aviso de privacidad
          </Link>
        </div>
      </footer>
    </>
  );
}
