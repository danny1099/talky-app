interface Props {
  src?: string
  text?: string
}

export const Avatar = ({ src, text }: Props) => {
  return (
    <div className="relative inline-flex size-9 items-center justify-center rounded-full bg-secondary">
      {src ? (
        <img
          src={src}
          alt="Avatar of user"
          className="h-full w-full rounded-full object-cover"
          loading="eager"
        />
      ) : (
        <p className="text-xs font-medium text-foreground">{text}</p>
      )}
      <span className="absolute bottom-[-1px] right-1 size-2 rounded-full bg-emerald-600 ring-1 ring-white ring-offset-1" />
    </div>
  )
}
