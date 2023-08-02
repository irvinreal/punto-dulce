import Link from "next/link";

const Promocion = () => {
    return (
        <div className="flex justify-center items-center bg-teal-300 md:bg-opacity-90 transition ease-in duration-100 h-10 group hover:bg-opacity-100">
            <Link href={`/promocion`}>
                <h6 className="flex justify-center items-center text-sm md:text-md text-white tracking-wider text-opacity-80 group-hover:text-opacity-90 group-hover:text-black md:group-hover:tracking-widest">
                    Aprovecha Nuestra promoción por apertura
                </h6>
            </Link>
        </div>
    );
};

export default Promocion;
