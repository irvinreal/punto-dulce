"use client";
import { useState } from "react";

const FormCrearPedido = () => {
    return (
        <div className="w-full min-h-max flex justify-center items-center flex-col relative me-10">
            <div className="w-full h-10 absolute top-4">
                <div className="bg-gray-500 z-10 w-full rounded flex items-start">
                    <span className="text-white text-lg mb-3 ms-2 ">
                        Personalizar pedido
                    </span>
                </div>
            </div>
            <div className="bg-teal-300 text-gray-400 shadow-lg shadow-black w-full h-5/6 rounded-lg z-20 relative">
                <form>
                    <div className="p-2">
                        <label className="text-white" htmlFor="">
                            Escoge tu pedido{" "}
                        </label>
                        <select className="outline-none">
                            <option value="">-- Seleccione --</option>
                            <option value="">Pastel para Boda</option>
                            <option value="">Pastel para cumpleaños</option>
                            <option value="">Postres para eventos</option>
                            <option value="">Galletas</option>
                            <option value="">Gelatinas</option>
                            <option value="">Pies</option>
                            <option value="">Para el Amor</option>
                        </select>
                    </div>
                    <span className="text-xs text-white px-10 inline-block absolute bottom-5">
                        En caso de no encontrar el pedido deseado puedes
                        comunicarte el Whatassap: 982u3hf84 donde podremos
                        ayudarte para realizar el pedido que nececitas.
                    </span>
                </form>
            </div>
        </div>
    );
};

export default FormCrearPedido;
