interface Props {
  params: { id: string }
}

export default function ChatPage({ params: { id } }: Props) {
  return (
    <div>
      <h1>Chat Page</h1>
      <p>id: {id}</p>
    </div>
  )
}
