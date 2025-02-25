import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Contact from "./contact/contact";

export default function Body() {
  const [showScroll, setShowScroll] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "proyectos",
      title: "Proyectos",
      content:
        "Conoce los proyectos en los que estamos trabajando actualmente. Si deseas más información sobre alguno de ellos, no dudes en ponerte en contacto con nosotros.",
    },
    {
      id: "nosotros",
      title: "Nosotros",
      content:
        "Somos una empresa dedicada al ramo inmobiliario con más de 10 años de experiencia en el mercado. Nos especializamos en la venta y renta de inmuebles, así como en la asesoría y gestión de créditos hipotecarios.",
    },
    {
      id: "ubicacion",
      title: "Ubicación",
      content:
        "Estamos ubicados en la ciudad de Torreón, Coahuila, México. A continuación te mostramos nuestra ubicación en el mapa:",
    },
    { id: "contacto", title: "Contacto" },
  ];

  const SectionContent = ({ id }) => {
    if (id === "contacto") return <Contact />;
    if (id === "ubicacion")
      return (
        <iframe
          className="w-full h-96 mt-4"
          src="https://www.google.com/maps/embed?pb=!4v1740443162595!6m8!1m7!1ss7qH73lUld3_Zza2siG7Bg!2m2!1d25.5350949817077!2d-103.4342796972423!3f271.3952523268396!4f0!5f0.7820865974627469"
          width="800"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );
    return null;
  };

  return (
    <main>
      {/* Sección con video */}
      <div className="relative w-full h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-contain" autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            ¿Necesitas información de una propiedad? <br /> ¡Contáctanos y cumple tus sueños!
          </h1>
        </div>
      </div>

      {/* Secciones con animación de aparición */}
      <div className="container mx-auto py-20 space-y-20 p-10">
        {sections.map(({ id, title, content }) => (
          <section
            key={id}
            id={id}
            className={`p-10 bg-gray-100 rounded-lg shadow-lg transition-opacity duration-700 ${
              visibleSections[id] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {content && <p className="text-gray-700">{content}</p>}
            <SectionContent id={id} />
          </section>
        ))}
      </div>

      {/* Navegación
      <nav className="bg-gray-900 text-white py-4 px-6 md:px-12 flex justify-center space-x-6 text-lg">
        {["proyectos", "nosotros", "ubicacion", "contacto"].map((item) => (
          <ScrollLink
            key={item}
            to={item}
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-gray-400"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ScrollLink>
        ))}
      </nav> */}

      {/* Botón para volver arriba */}
      {showScroll && (
        <button
          onClick={() => scroll.scrollToTop()}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </main>
  );
}
