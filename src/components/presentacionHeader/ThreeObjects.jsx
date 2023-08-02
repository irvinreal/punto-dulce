import ObjectThree from "./ObjectThree";
import pastellight from "../../../public/assets/imgs/presentacionheader/pastel-light.jpg";
import pasteldemoras from "../../../public/assets/imgs/presentacionheader/pastel-de-moras.jpg";
import panecitosdeldia from "../../../public/assets/imgs/presentacionheader/panecitos-del-dia.jpg";

const ThreeObjects = () => {
    return (
        <div className="w-screen flex flex-col md:flex-row items-start">
            <ObjectThree
                img={pastellight}
                alt="pastel-ligth"
                titulo="Pastel light"
                descripcion="Pastel desnudo con pan sabor vainilla y frutos coreanos"
            />
            <ObjectThree
                img={pasteldemoras}
                alt="pastel-de-moras"
                titulo="Pastel de moras y canela"
                descripcion="Pastel desnudo con moras, uvas, almendras y chocolate sabor canela"
            />
            <ObjectThree
                img={panecitosdeldia}
                alt="panecitos-del-dia"
                titulo="Panecitos del día"
                descripcion="Pan payés con relleno de piña"
            />
        </div>
    );
};

export default ThreeObjects;
