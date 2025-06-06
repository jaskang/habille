import type { ComponentProps, ReactNode } from 'react'
import { Alert as BaseAlert, AlertDescription as BaseAlertDescription, AlertTitle as BaseAlertTitle } from '../ui/alert'

type AlertProps = ComponentProps<typeof BaseAlert> & {
  icon?: ReactNode
  title?: ReactNode
  description?: ReactNode
}

function Alert(props: AlertProps) {
  const { icon, title, description, ...rest } = props
  return (
    <BaseAlert {...rest}>
      {icon ?? icon}
      {title ?? <BaseAlertTitle>{title}</BaseAlertTitle>}
      {description ?? <BaseAlertDescription>{description}</BaseAlertDescription>}
    </BaseAlert>
  )
}

export { Alert }
