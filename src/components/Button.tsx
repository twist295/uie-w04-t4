type Props = {
  className?: string
  onClick: () => void
  text: string
  style?: React.CSSProperties
}

function Button({ className, onClick, style, text }: Props) {
  const styles: React.CSSProperties = { ...style, cursor: 'pointer' }

  return (
    <button className={className} onClick={onClick} style={styles}>{text}</button>
  )
}

export default Button