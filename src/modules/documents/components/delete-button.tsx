'use client'
import { Button, Icon } from '@/modules/common/components'
import { deleteDocument } from '@/modules/documents/actions'

export const DeleteButton = ({ id }: { id: string }) => {
  const handleDelete = async () => {
    await deleteDocument(id)
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleDelete}>
      <Icon icon="trash" className="size-4 text-accent-foreground" />
    </Button>
  )
}
