import { Button } from '../../src'

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
    </>
  )
}
