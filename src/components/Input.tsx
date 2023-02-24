type Props = {
  placeholder: string
  style?: React.CSSProperties
}

function Input({ placeholder, style }: Props) {
  return (
    <input placeholder={placeholder} style={style}/>
  )
}

export default Input