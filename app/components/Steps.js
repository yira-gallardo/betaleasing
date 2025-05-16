export default function Steps() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-40 gap-8 bg-[url('/img-2.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay de texto */}
      <div className="flex-1 flex flex-col gap-4 max-w-lg bg-[#051C2C]/95 rounded-lg p-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Solicita tu{" "}
          <span className="text-[#FF914D] relative inline-block">
            arrendamiento
            <span className='block absolute left-0 -bottom-2 w-full h-3 bg-[url("/brochazo.png")] bg-no-repeat bg-left bg-contain'></span>
          </span>
        </h3>
        <ol className="list-none text-xl mb-6 text-white">
          <li className="mb-4 flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">01</span>
            <span>Llena el formulario online</span>
          </li>
          <li className="mb-4 flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">02</span>
            <span>Recibe una cotización preliminar</span>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">03</span>
            <span>Un asesor te contactará</span>
          </li>
        </ol>
        <a
          href="#contacto"
          className="inline-block bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-8 py-3 rounded font-semibold text-base transition w-max shadow-md"
        >
          Llenar el formulario
        </a>
      </div>
    </section>
  );
}
