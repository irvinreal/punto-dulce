import ThreeObjects from "./ThreeObjects";

const items = [
    {
        title: "PERSONALIZA TU PEDIDO",
        description:
            "Personaliza de manera de ilimitada: color, formas, objetos, texturas, decoraciones",
    },
    {
        title: "COTIZA EN LÍNEA",
        description: "Ajusta la cotizaciòn a tus necesidades y presupuesto",
    },
    {
        title: "INSPIRATE CON NUESTRAS IDEAS",
        description: "Miles de ideas para todo tipo de eventos",
    },
];

const PresentacionHeader = () => {
    return (
        <div className="md:h-screen flex flex-col">
            <ThreeObjects />
            <div className="h-full flex flex-col md:flex-row justify-center gap-14 md:gap-20 my-24 md:mt-28">
                {items.map((item) => (
                    <div key={item.title} className="w-96">
                        <h3 className="text-xl text-center font-semibold text-teal-400">{item.title}</h3>
                        <p className="text-sm text-center mt-1 text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PresentacionHeader;
