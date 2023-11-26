import { useField } from 'formik'

const InputText = ({ erro, label, ...props }) => {
  const [field, meta] = useField(props)
  return (
        <div className="p-2 flex flex-col w-full">
            {meta.touched && meta.error
              ? (
                <div>
                    <div className="ms-3 text-red-800">
                        <label>{label}</label>
                        <span className="ms-2 text-red-400 text-sm">{meta.error}</span>
                    </div>
                    <input
                        {...field}
                        className="outline-none rounded border border-red-800 bg-red-100 w-full px-4 placeholder:text-red-400 placeholder:text-xs"
                    />
                </div>
                )
              : (
                <div>
                    <div className="ms-3">
                        <label>{label}</label>
                    </div>
                    <input
                        {...field}
                        className="outiline-none border border-gray-300 px-3 rounded focus:shadow-md focus:outline-none focus:border-2 w-full"
                        placeholder={label}
                    />
                </div>
                )}
        </div>
  )
}

export default InputText
