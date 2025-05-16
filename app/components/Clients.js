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
      text: "Beta Leasing se ha convertido en un socio estratégico para Galdisa, facilitándonos el crecimiento de nuestra flota de vehículos utilitarios y activos productivos sin descapitalizarnos. Además, su apoyo ha sido esencial para ofrecer vehículos como prestación a nuestros colaboradores, fortaleciendo nuestra competitividad y eficiencia operativa. Su profesionalismo y atención personalizada hacen que trabajar con ellos sea siempre una excelente experiencia.",
    },
    {
      logo: "/logo-3.png",
      text: "Como PYME siempre buscas aliados eficientes que no tengan procesos complejos y nos den soluciones sobre necesidades especificas, las soluciones genéricas muchas veces no nos aplican",
    },
    {
      logo: "/logo-4.png",
      text: "Beta Leasing quiero agradecer las atenciones que prestan para con la empresa, servicio muy profesional y altamente calificado, todo en tiempo con gran calidez, profesionalismo, atención personalizada, un servicio muy recomendable",
    },
    {
      logo: "/logo-5.png",
      text: "Hemos trabajado con BETA LEASING desde el año pasado y la experiencia ha sido muy buena. Siempre nos han brindado un servicio puntual, claro y profesional. Además, el trato ha sido cercano y de confianza, siempre pendientes de nuestras necesidades. Sin duda, los recomendamos como una opción confiable.",
    },
    {
      logo: "/logo-6.png",
      text: "COMVIVE es una desarrolladora de vivienda sostenible con presencia en el Valle de México, Morelos y Quintana Roo, reconocida internacionalmente por su compromiso ambiental y social. Desde 2024 hemos colaborado con Beta Leasing, teniendo una experiencia excepcional. Su servicio es profesional, ágil y comprometido con el cliente. Los recomendamos ampliamente como un socio confiable y destacado.",
    },
    {
      logo: "/logo-7.png",
      text: "Beta Leasing ha sido un gran apoyo en la obtención de equipo de transporte con una estrtegia adecuada a las necesidades de Affinitas Education México.",
    },
    {
      logo: "/logo-8.png",
      text: "Ha sido hasta ahora un gran servicio. Todo el personal con el que hemos tratado ha sido además de amable, muy profesional. Sin duda lo recomendamos.",
    },
    {
      logo: "/logo-9.png",
      text: "En el rubro de la construcción cada proyecto tiene sus características particulares. Pero cuidar el flujo de caja para atender las necesidades de acuerdo al programa es básico. Es por esto que Beta Leasing se ha convertido en un aliado estratégico para nosotros, porque nos permite contar con el equipo necesario, permitiéndonos al mismo tiempo atender otras áreas clave de la obra.",
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
            min-height: auto;
            height: auto;
            padding: 1.5rem;
            margin: 0;
          }
          .testimonial-logo-container {
            min-width: auto;
            width: 100%;
            height: 100px;
            margin-bottom: 1rem;
            padding: 0.5rem;
          }
          .testimonial-content {
            padding: 0;
            height: auto;
          }
          .testimonial-text {
            height: auto;
            margin-bottom: 1rem;
            overflow-y: visible;
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
                    <Image
                      src={testimonial.logo}
                      alt="Logo cliente"
                      width={220}
                      height={100}
                      className="object-contain max-h-28 max-w-full"
                    />
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
