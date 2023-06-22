import Link from "next/link";

const Promocion = () => {
    return (
        <div className="flex justify-center align-middle  bg-orange-600 bg-opacity-50 h-10 group hover:bg-opacity-60 hover:shadow-md hover:shadow-white/20">
            <Link
                href={`/promocion`}
                className="flex justify-center align-middle w-screen"
            >
                <h6 className="flex justify-center align-middle items-center text-white text-opacity-80 group-hover:text-opacity-90">
                    Aprovecha Nuestra promoción por apertura
                </h6>
            </Link>
        </div>
    );
};

export default Promocion;
