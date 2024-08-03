import { Title, Text, Input } from '@/modules/common/components'

export default function MyDocuments() {
  return (
    <section className="size-full flex flex-col">
      <div className="w-full flex flex-col p-4 md:px-24">
        <Title text="Hello, Danny " />
        <Text text="These are your documents in this workspace" />
        <span className="w-full flex mt-3 ml-[-2px]">
          <Input placeholder="Type something to search..." slot="end" icon="search" />
        </span>
      </div>

      <article className="size-full flex flex-col bg-zinc-50 md:bg-white md:px-24"></article>
    </section>
  )
}
