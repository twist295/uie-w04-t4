import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import './Cart.css'

function Cart() {
  const navigate = useNavigate()

  return (
    <div>
      <Button className="checkout" onClick={() => navigate('/order/complete')} text='CHECKOUT'/>
    </div>
  )
}

export default Cart