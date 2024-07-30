import { InputHTMLAttributes } from 'react'
import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ type, placeholder, ...rest }: InputProps) {
  return <input type={type} placeholder={placeholder} {...rest} />
}
