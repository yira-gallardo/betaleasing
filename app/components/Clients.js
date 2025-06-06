"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

export default function Clients() {
  const testimonials = [
    {
      logo: "/logo-2.png",
      text: '"Beta Leasing se ha convertido en un socio estratégico para Galdisa, facilitándonos el crecimiento de nuestra flota de vehículos utilitarios y activos productivos sin descapitalizarnos. Además, su apoyo ha sido esencial para ofrecer vehículos como prestación a nuestros colaboradores, fortaleciendo nuestra competitividad y eficiencia operativa. Su profesionalismo y atención personalizada hacen que trabajar con ellos sea siempre una excelente experiencia."',
      url: "https://galdisa.com/",
    },
    {
      logo: "/logo-3.png",
      text: '"Como PYME, siempre estamos en busca de aliados eficientes, que entiendan nuestras necesidades específicas y no nos compliquen con procesos largos o soluciones genéricas que no aplican a nuestra realidad. En Beta Leasing encontramos justo eso: un equipo que escucha, simplifica y propone alternativas hechas a la medida."',
      url: "https://boutiquedearquitectura.com/",
    },
    {
      logo: "/logo-4.png",
      text: '"Agradecemos a Beta Leasing por las atenciones brindadas a nuestra empresa. Su servicio es altamente profesional, puntual y cálido, con una atención personalizada que realmente marca la diferencia. Sin duda, una empresa muy recomendable."',
      url: "https://nbfmarket.com/",
    },
    {
      logo: "/logo-5.png",
      text: '"Hemos trabajado con BETA LEASING desde el año pasado y la experiencia ha sido muy buena. Siempre nos han brindado un servicio puntual, claro y profesional. Además, el trato ha sido cercano y de confianza, siempre pendientes de nuestras necesidades. Sin duda, los recomendamos como una opción confiable."',
      url: "https://trepex.com.mx/",
    },
    {
      logo: "/logo-6.png",
      text: '"Desde 2024 hemos colaborado con Beta Leasing, teniendo una experiencia excepcional. Su servicio es profesional, ágil y comprometido con el cliente. Los recomendamos ampliamente como un socio confiable y destacado"',
      url: "https://comvive.mx/",
    },
    {
      logo: "/logo-7.png",
      text: '"Beta Leasing ha sido un gran apoyo en la obtención de equipo de transporte con una estrategia adecuada a las necesidades de Affinitas Education México."',
      url: "https://www.affinitasedu.com/",
    },
    {
      logo: "/logo-8.png",
      text: '"Ha sido hasta ahora un gran servicio. Todo el personal con el que hemos tratado ha sido además de amable, muy profesional. Sin duda lo recomendamos."',
      url: "https://bvhome.mx/",
    },
    {
      logo: "/logo-9.png",
      text: '"En el rubro de la construcción cada proyecto tiene sus características particulares. Pero cuidar el flujo de caja para atender las necesidades de acuerdo al programa es básico. Es por esto que Beta Leasing se ha convertido en un aliado estratégico para nosotros, porque nos permite contar con el equipo necesario, permitiéndonos al mismo tiempo atender otras áreas clave de la obra."',
      url: "https://www.gruposibo.com/",
    },
    {
      logo: "/logo-10.png",
      text: '"Beta leasing es mucho más que una arrendadora, es un asesor financiero que encuentra la manera de solucionar problemas manteniendo el riesgo controlado. Es uno de los socios estratégicos que nos acompañan siempre."',
      url: "https://tenet.com.mx/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplaySpeed: 4000,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="dots-wrapper">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dot" />,
  };

  return (
    <>
      <style>{`
        .custom-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #FF914D;
          background: transparent;
          transition: background 0.2s, border 0.2s;
          box-sizing: border-box;
        }
        .slick-dots {
          top: 6rem;
        }
        .slick-dots li.slick-active .custom-dot {
          background: #FF914D;
          border: 2px solid #FF914D;
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .testimonial-ribbon {
          position: absolute;
          left: -20px;
          bottom: 0;
          height: 120px;
          z-index: 1;
          background: transparent;
        }
        .slick-slider, .slick-list {
          overflow: visible !important;
        }
        .slick-track {
          overflow: visible !important;
        }
        .slick-slide {
          padding: 0 8px;
        }
        .slick-list {
          margin: 0 -8px;
        }
        .testimonial-ribbon-absolute {
          position: absolute;
          left: -16px;
          bottom: -33px;
          height: 140px;
          z-index: 2;
          background: transparent;
          pointer-events: none;
        }
        .testimonial-card {
          min-height: 340px;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          margin: 0 auto;
        }
        .testimonial-logo-container {
          min-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .testimonial-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
        }
        .testimonial-text {
          flex: 1;
          display: flex;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .testimonial-card {
            min-height: 300px;
          }
        }
        @media (max-width: 768px) {
          .testimonial-card {
            flex-direction: column;
            min-height: 400px;
            height: 400px;
            padding: 1.5rem;
            margin: 0;
            display: flex;
          }
          .testimonial-logo-container {
            min-width: auto;
            width: 100%;
            height: 80px;
            margin-bottom: 1rem;
            padding: 0.5rem;
          }
          .testimonial-content {
            padding: 0;
            height: calc(100% - 100px);
            display: flex;
            flex-direction: column;
          }
          .testimonial-text {
            height: calc(100% - 40px);
            margin-bottom: 1rem;
            overflow-y: auto;
          }
          .testimonial-text p {
            font-size: 0.875rem;
            line-height: 1.5;
            text-align: left;
          }
          .testimonial-ribbon-absolute {
            display: none !important;
          }
          .slick-slide {
            padding: 0;
          }
          .slick-list {
            margin: 0;
          }
          .dots-wrapper {
            bottom: -30px;
          }
          .slick-dots li {
            margin: 0 4px;
          }
          .custom-dot {
            width: 8px;
            height: 8px;
          }
        }
        .dots-wrapper {
          position: absolute;
          bottom: -40px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
          z-index: 10;
        }
        .dots-wrapper ul {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .slick-dots {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          line-height: 1;
        }
        .slick-dots li {
          position: relative;
          display: inline-block;
          margin: 0 8px;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
      <section className="overflow-x-hidden w-full bg-white text-[#051C2C] py-8 md:py-16 px-4 md:px-8 flex flex-col items-center pb-20 md:pb-40">
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-center">
          Nuestros Clientes
        </h3>
        <div className="w-full mx-auto relative pb-20">
          <Slider {...settings}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <div className="testimonial-card bg-[#F5F6F8] rounded-[8px] relative w-full max-w-full md:max-w-[960px] mx-auto mb-24 box-border">
                  <img
                    src="/cintillo.png"
                    alt="5 estrellas"
                    className="testimonial-ribbon-absolute select-none -mt-20"
                  />
                  <div className="testimonial-logo-container">
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={testimonial.logo}
                        alt="Logo cliente"
                        width={220}
                        height={100}
                        className="object-contain max-h-28 max-w-full"
                      />
                    </a>
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <p className="text-base text-[#222] font-normal leading-relaxed text-left">
                        {testimonial.text}
                      </p>
                    </div>
                    <hr className="border-t border-gray-200 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
