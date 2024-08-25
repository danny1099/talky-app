import { Button, Icon } from '@/modules/common/components'

export const CardFooter = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-4 py-2">
      <div className="w-full flex flex-row items-center gap-x-4 text-accent-foreground">
        <Icon icon="star" className="size-4" />
        <Icon icon="files" className="size-4" />
        <Icon icon="trash" className="size-4" />
      </div>

      <Button size="icon" variant="tertiary">
        <Icon icon="arrow-right" className="size-4" />
      </Button>
    </div>
  )
}
