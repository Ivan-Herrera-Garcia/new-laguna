export default function Contact() {

    function enviarWhats() {
        const nombre = document.querySelector('input[type="text"]').value;
        const correo = document.querySelector('input[type="email"]').value;
        const telefono = document.querySelector('input[type="tel"]').value;
        const mensaje = document.querySelector('textarea').value;

        if (nombre == "") {
            alert('Por favor, ingresa tu nombre');
            return;
        } 

        if (correo == "") {
            alert('Por favor, ingresa tu correo');
            return;
        }

        if (telefono == "") {
            alert('Por favor, ingresa tu teléfono');
            return;
        }

        if (mensaje == "") {
            alert('Por favor, ingresa tu mensaje');
            return;
        }
        
        const url = `https://api.whatsapp.com/send?phone=1234567890&text=Hola, soy ${nombre}. Mi correo es ${correo}, mi teléfono es ${telefono} y me gustaría saber más sobre sus servicios. ${mensaje}`;

        window.open(url, '_blank');
    }


    return (
        <div>
            <form className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Correo" className="p-2 border border-gray-300 rounded-lg" />
                    <input type="tel" placeholder="Teléfono" className="p-2 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Mensaje" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={() => enviarWhats()}>Enviar</button>
            </form>
        </div>
    )
}