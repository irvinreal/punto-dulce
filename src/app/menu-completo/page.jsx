import Navbar from "@/components/Navbar";
import Promocion from "@/components/Promocion";

const eventos = [
    "Postres para el Día",
    "Cumpleaños",
    "Bodas",
    "Eventos grandes",
];

export default function MenuCompleto() {
    return (
        <section className="relative">
            <div className="fixed top-0 left-0 z-40 w-screen">
                <Promocion />
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-teal-300 from-10%  w-full h-screen flex justify-center items-center flex-col gap-8">
                <div className="bg-teal-200 rounded-md shadow-lg mt-10">
                    <div className="text-gray-500 font-medium px-24 py-16 text-3xl shadow-inner">
                        <h1>Variedad para todos tus eventos</h1>
                        {eventos.map((evento)=> (
                            <li key></li>
                        ))}
                        Tartas,<br></br>
                        Galletas,<br></br>
                        Gelatinas,<br></br>
                        Eventos grandes,<br></br>
                        <small className="text-sm">
                            y más.. <br></br>
                        </small>
                    </div>
                </div>
                <div className="w-10 h-10 text-teal-500 hover:cursor-pointer animate-bounce hover:animate-none hover:text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-down-circle fill-current w-8 h-8 rounded-full active:shadow-md active:shadow-gray-400/80"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                        />
                    </svg>
                </div>
            </div>
            <div className="h-screen"></div>
        </section>
    );
}
