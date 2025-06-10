import type { ComponentProps, ReactNode } from 'react'
import {
  Alert as BaseAlert,
  AlertDescription as BaseAlertDescription,
  AlertTitle as BaseAlertTitle,
} from '../components/ui/alert'

type AlertProps = ComponentProps<typeof BaseAlert> & {
  icon?: ReactNode
  title: ReactNode
  children?: ReactNode
}

function Alert(props: AlertProps) {
  const { icon, title, children, ...rest } = props
  return (
    <BaseAlert {...rest}>
      {icon && icon}
      {title && <BaseAlertTitle>{title}</BaseAlertTitle>}
      {children && <BaseAlertDescription>{children}</BaseAlertDescription>}
    </BaseAlert>
  )
}

export { Alert }
