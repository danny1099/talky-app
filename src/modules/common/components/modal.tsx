'use client'
import { useMediaQuery } from 'usehooks-ts'
import * as Dialog from './dialog'
import * as Drawer from './drawer'

interface Props {
  content: React.ReactNode
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  title?: string
  description?: string
}

export const Modal = ({ title, description, content, isOpen, setIsOpen }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMobile) {
    return (
      <Dialog.Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.DialogContent>
          {title && (
            <Dialog.DialogHeader>
              <Dialog.DialogTitle>{title}</Dialog.DialogTitle>
              {description && <Dialog.DialogDescription>{description}</Dialog.DialogDescription>}
            </Dialog.DialogHeader>
          )}
          <div className="min-h-80">{content}</div>
        </Dialog.DialogContent>
        <Dialog.DialogClose />
      </Dialog.Dialog>
    )
  }

  return (
    <Drawer.Drawer open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.DrawerContent>
        {title && (
          <Drawer.DrawerHeader className="text-left">
            <Drawer.DrawerTitle>{title}</Drawer.DrawerTitle>
            {description && <Drawer.DrawerDescription>{description}</Drawer.DrawerDescription>}
          </Drawer.DrawerHeader>
        )}
        <div className="min-h-80">{content}</div>
      </Drawer.DrawerContent>
      <Drawer.DrawerClose />
    </Drawer.Drawer>
  )
}
