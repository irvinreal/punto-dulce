import Navbar from "@/components/Navbar";
import MainCreaPedido from "@/components/crearPedido/MainCrearPedido";
import DatosDeFacturacion from "@/components/crearPedido/facturacionForm/DatosDeFacturacion";

export default function CrearPedido() {
    return (
        <main className="relative h-screen">
            <Navbar />
            <MainCreaPedido />
            <DatosDeFacturacion />
        </main>
    );
}
