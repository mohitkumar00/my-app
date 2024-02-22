import { queryAllByPlaceholderText } from '@testing-library/react'

export default function Alert(props) {
    const capitalize = (type)=>{
        let lower = type.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}
