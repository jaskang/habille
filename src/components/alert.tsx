import type { ComponentProps, ReactNode } from 'react'
import {
  Alert as UIAlert,
  AlertDescription as UIAlertDescription,
  AlertTitle as UIAlertTitle,
} from '../components/ui/alert'

export type AlertProps = {
  icon?: ReactNode
  title: ReactNode
}

export function Alert(props: ComponentProps<'div'> & AlertProps) {
  const { icon, title, children, ...rest } = props
  return (
    <UIAlert {...rest}>
      {icon && icon}
      {title && <UIAlertTitle>{title}</UIAlertTitle>}
      {children && <UIAlertDescription>{children}</UIAlertDescription>}
    </UIAlert>
  )
}
