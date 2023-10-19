import Image from "next/image";
import Link from "next/link";
import puntoDulceLogo from "../../public/assets/imgs/punto-dulce.svg";
const Footer = () => {
    return (
        <footer className="bg-white h-80 flex justify-between items-center w-full px-16 text-xs">
            <div className="w-2/5 h-2/3  flex flex-col justify-start">
                <div className="flex flex-col md:flex-row justify-start w-full text-gray-500">
                    <Image
                        src={puntoDulceLogo}
                        width={90}
                        height={90}
                        alt="punto dulce logotipo"
                        className="bg-white p-1 rounded-full me-5"
                    />
                    <div className="flex items-center mx-4 my-2">
                        <Link href={`/contacto`} className="">
                            Contacto
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={`/aviso-de-privacidad`}
                            className=""
                        >
                            Aviso de Privacidad
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={`/terminos-y-condiciones`}
                            className=""
                        >
                            Terminos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-2/5 h-2/3 bg-teal-300 bg-opacity-30 flex items-center justify-center">
                
            </div>
        </footer>
    );
};

export default Footer;
