import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Contact from "./contact/contact";

export default function Body() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <main>
      {/* Video con texto centrado */}
      <div className="relative w-full h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-contain" autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            ¿Necesitas información de una propiedad? <br/>Contactanos y cumple tus sueños!
          </h1>
        </div>
      </div>
      
      {/* Secciones */}
      <div className="container mx-auto py-20 space-y-20 p-10">
        {[{ id: "proyectos", title: "Proyectos" },
          { id: "nosotros", title: "Nosotros" },
          { id: "servicios", title: "Servicios" },
          { id: "contacto", title: "Contacto" },
        ].map((section) => (
          <section key={section.id} id={section.id} className="p-10 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-gray-700">¿Necesitas información de una propiedad? Contactanos y cumple tus sueños!</p>
            {
                section.id == 'contacto' && <Contact />
            }
          </section>
        ))}
      </div>

      {/* Navegación superior */}
      <nav className="bg-gray-900 text-white py-4 px-6 md:px-12 flex justify-center space-x-6 text-lg">
        {["proyectos", "inmuebles", "nosotros", "servicios", "contacto"].map((item) => (
          <ScrollLink key={item} to={item} smooth={true} duration={700} className="cursor-pointer hover:text-gray-400">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ScrollLink>
        ))}
      </nav>

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