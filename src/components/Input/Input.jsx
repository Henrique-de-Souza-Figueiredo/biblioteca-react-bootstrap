import css from "./Input.module.css"

export default function Input({ label, type="text", placeholder, value, onChange }) {
    return (
        <div className={`mb-3 ${css.inputGroup}`}>

            <label className={`form-label ${css.label}`}>
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`form-control ${css.input}`}
            />

        </div>
    )
}