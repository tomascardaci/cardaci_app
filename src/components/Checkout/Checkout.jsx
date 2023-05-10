import './Checkout.css'
import { Card } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { Link} from 'react-router-dom'

const Checkout = ({orderId}) => {

    const { cartList } = useCartContext()

    console.log(cartList)
  return (
        <Card className='Checkout'>

            <Card.Title className='CheckoutTitle'>¡Gracias por su compra!</Card.Title>
            <p className='CheckoutId'>ID de compra: {orderId}</p>
            <Link to='/'><button className='CheckoutButton'>Volver al inicio</button></Link>

        </Card>
  )
}

export default Checkout