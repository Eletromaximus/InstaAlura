import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles/index'

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  ghost?:boolean;
  variant?: string;
}

export default function button ({ label, ghost, variant }: IProps) {
  return (
    <Button ghost={ghost} variant={variant}>
      {label}
    </Button>
  )
}
