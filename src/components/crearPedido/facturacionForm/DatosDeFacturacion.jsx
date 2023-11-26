'use client'
import { Form, Formik } from 'formik'
import InputText from './InputText'

const validate = (values) => {
  const errors = {}
  console.log(parseInt(values.cel))

  if (!values.name) {
    errors.name = '*Obligatorio'
  }

  if (!values.lastname) {
    errors.lastname = '*Obligatorio'
  }

  if (!values.cel) {
    errors.cel = '*Obligatorio'
  } else if (
    parseInt(values.cel) !== 'Nan' ||
        parseInt(values.cel).length < 10
  ) {
    errors.cel = '*Ingrese un número correcto'
  }
  if (!values.email) {
    errors.email = '*Obligatorio'
  }

  if (!values.deliveryDay) {
    errors.deliveryDay = '*Obligatorio'
  }

  if (!values.deliveryHour) {
    errors.deliveryHour = '*Obligatorio'
  }

  return errors
}

const DatosDeFacturacion = () => {
  return (
        <Formik
            initialValues={{
              name: '',
              lastname: '',
              cel: '',
              email: '',
              deliveryDay: '',
              deliveryHour: '',
              rfc: ''
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}
        >
            <section className="relative min-h-screen flex justify-center items-center">
                <div className="w-3/6">
                    <h1 className="text-3xl ms-8 text-gray-700 border-b-2 border-dotted border-gray-200 font-normal tracking-widest">
                        Datos de Facturación..{' '}
                    </h1>
                </div>
                <div className="border-2 border-gray-300 bg-opacity-80 shadow-md shadow-gray-300 w-5/6 h-6/6 rounded-lg me-10">
                    <Form className="py-10">
                        <div className="flex mx-5 gap-5">
                            <InputText name="name" label="Nombre" />
                            <InputText name="lastname" label="Apellido" />
                        </div>
                        <div className="flex mx-5 gap-5">
                            <InputText name="cel" label="Celular" />
                            <InputText name="email" label="Correo" />
                        </div>
                        <div className="flex mx-5 gap-5">
                            <div className="p-2 flex flex-col w-full">
                                <label
                                    className="text-gray-600"
                                    htmlFor="dia_de_entrega"
                                >
                                    Día de entrega
                                </label>
                                <input
                                    name="deliveryDay"
                                    type="text"
                                    className="outiline-none border border-gray-300 px-1 rounded focus:shadow-md focus:outline-none focus:border-2"
                                />
                            </div>
                            <div className="p-2 flex flex-col w-full">
                                <label
                                    className="text-gray-600"
                                    htmlFor="hora_de_entrega"
                                >
                                    Hora de entrega
                                </label>
                                <input
                                    name="deliveryHour"
                                    type="text"
                                    className="outiline-none border border-gray-300 px-1 rounded focus:shadow-md focus:outline-none focus:border-2"
                                />
                            </div>
                        </div>
                        <div className="flex mx-5 gap-5">
                            <div className="p-2 flex flex-col w-full">
                                <label className="text-gray-600" htmlFor="rfc">
                                    RFC{' '}
                                    <span className="text-sm text-gray-500 ps-1"></span>
                                </label>
                                <input
                                    placeholder="Introduce tu RFC en caso de necesitar factura"
                                    name="rfc"
                                    type="text"
                                    className="outiline-none border border-gray-300 px-1 rounded focus:shadow-md focus:outline-none focus:border-2 placeholder:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex mx-7 mt-5">
                            <div className=" flex flex-col w-full">
                                <button
                                    type="submit"
                                    className="bg-gray-700 text-white rounded-sm h-7 font-light tracking-wide hover:bg-teal-500 active:bg-teal-400 transition-colors duration-150"
                                >
                                    Realizar Pedido
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </Formik>
  )
}

export default DatosDeFacturacion
