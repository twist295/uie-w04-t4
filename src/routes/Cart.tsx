import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import './Cart.css'

function Cart() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <tr>
          <td/>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
        </tr>
      </table>
      <Button
        className="checkout" onClick={() => navigate('/order/complete')} text='CHECKOUT'/>
    </div>
  )
}

export default Cart