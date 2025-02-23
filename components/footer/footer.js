import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center gap-10 md:gap-0">
        {/* Logo o Imagen */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/logo.jpg" // Asegúrate de tener la imagen en la carpeta public
            alt="Logo"
            width={120}
            height={40}
            className="rounded-xl"
          />
        </div>

        {/* Información de contacto */}
        <div className="text-center md:text-left flex flex-col md:flex-row gap-10 items-center">
          <div className="flex items-center gap-2 hover:cursor-pointer" onClick={() => window.open("tel:+1234567890")}> 
            <FaPhone size={20} />
            <p className="text-lg font-semibold">+123 456 7890</p>
          </div>
          <div className="flex items-center gap-2 hover:cursor-pointer" onClick={() => window.open("mailto:contacto@ejemplo.com")}>
            <FaEnvelope size={20} />
            <p className="text-lg font-semibold">contacto@ejemplo.com</p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}