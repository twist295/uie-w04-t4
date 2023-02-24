import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Header.css'

const styles: { [key: string]: React.CSSProperties } = {
  bar: {
    position: 'absolute', left: 0, right: 0 
  },
  text: { color: 'white', textAlign: 'center' }
}

function Header() {
  const navigate = useNavigate()

  return (
    <div style={styles.bar}>
      <Button className="store" onClick={() => navigate('/shop')} text='STORE'/>
    </div>
  )
}

export default Header