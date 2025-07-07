import type { ComponentProps, ReactNode } from 'react'
import type { PrettifyProps } from '@/lib/types'
import {
  Alert as UIAlert,
  AlertDescription as UIAlertDescription,
  AlertTitle as UIAlertTitle,
} from '../components/ui/alert'

type UIAlertProps = PrettifyProps<typeof UIAlert>

export type AlertProps = {
  variant?: UIAlertProps['variant']
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
