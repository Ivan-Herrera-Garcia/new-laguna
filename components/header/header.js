import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={90}
            height={30}
            className="rounded-xl"
          />
        </div>

       {/* Menú para escritorio */}
        <div className="hidden md:flex space-x-6 text-lg">
          {["proyectos", "inmuebles", "nosotros", "servicios", "contacto"].map((item) =>
            item === "inmuebles" ? (
              <Link
                key={item}
                href="https://app.nocnok.com/crm/155882/agents/79954/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-400"
              >
                Inmuebles
              </Link>
            ) : (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={700}
                className="cursor-pointer hover:text-gray-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            )
          )}
        </div>


        {/* Botón menú móvil */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 z-50">
          {['proyectos', 'inmuebles', 'nosotros', 'servicios', 'contacto'].map((item) => (

            item === 'inmuebles' ?
            <Link 
              key={item} 
              href="https://app.nocnok.com/crm/155882/agents/79954/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Inmuebles
            </Link> :
            <ScrollLink 
              key={item} 
              to={item} 
              smooth={true} 
              duration={700} 
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {
                item == 'inmuebles' ? 
                    <Link target="_blank" href={"https://app.nocnok.com/crm/155882/agents/79954/"} alt="Inmuebles">Inmuebles</Link> :
                    item.charAt(0).toUpperCase() + item.slice(1)
               }
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}
