"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = (props) => {
    const pathname = usePathname();
    return (
        <nav className="bg-white text-sm">
            <ul className="h-12 flex justify-center items-center gap-8 mx-8">
                <li>
                    <Link
                        href={`/`}
                        className={
                            pathname.endsWith("/")
                                ? "text-gray-700 mx-6"
                                : "text-teal-500 transition ease-in duration-300 hover:text-gray-500 mx-6"
                        }
                    >
                        <span>Bienvenida</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/crear-pedido`}
                        className={
                            pathname.startsWith("/crear-pedido")
                                ? "visited:text-gray-700 flex items-center gap-2"
                                : "group/item text-teal-500 transition ease-in duration-300 hover:text-gray-500 flex items-center gap-2"
                        }
                    >
                        <span>Crear pedido</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class={
                                pathname.startsWith("/crear-pedido")
                                    ? "bi bi-bag-fill shadow"
                                    : "bi bi-bag-fill trasition ease-in-out duration-500 shadow opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                            }
                            
                            // "bi bi-bag-fill trasition ease-in-out duration-500 shadow opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/cotizar`}
                        className={
                            pathname.startsWith("/cotizar")
                                ? "visited:text-gray-700 flex items-center gap-2"
                                : "group/item text-teal-500 transition ease-in duration-300 hover:text-gray-500 flex items-center gap-2"
                        }
                    >
                        <span>Cotizar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class={
                                pathname.startsWith("/cotizar")
                                    ? "bi bi-file-text-fill shadow"
                                    : "bi bi-file-text-fill trasition ease-in-out duration-500 shadow opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                            }
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/menu-completo`}
                        className={
                            pathname.startsWith("/menu-completo")
                                ? "visited:text-gray-700 flex items-center gap-2"
                                : "group/item text-teal-500 transition ease-in duration-300 hover:text-gray-500 flex items-center gap-2"
                        }
                    >
                        <span>Menu Completo</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            class={
                                pathname.startsWith("/menu-completo")
                                    ? "bi bi-list shadow"
                                    : "bi bi-list trasition ease-in-out duration-500 shadow opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                            }
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
