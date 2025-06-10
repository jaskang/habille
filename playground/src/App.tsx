import { AlertCircleIcon } from 'lucide-react'
import { Alert, Button } from '../../src'

export function App() {
  return (
    <>
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          sm size
        </Button>
        <Button variant="outline" size="default">
          default size
        </Button>
        <Button variant="outline" size="lg">
          lg size
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Alert icon={<AlertCircleIcon />} title="Alert title">
          Alert description
        </Alert>
        <Alert variant="destructive" icon={<AlertCircleIcon />} title="Alert title">
          Alert description
        </Alert>
      </div>
    </>
  )
}
