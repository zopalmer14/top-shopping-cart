
// styling
import '../styles/CartPanel.css'

function CartPanel({ items, isShowing }) {
    const totalCost = 19.98

	return (
		<div className={'cart-container' + (!isShowing ? ' hidden' : '')} >
			<h1>Cart</h1>
            <ul className='cart-items'>
                {items && items.map((item) => {
                    return (
                        <li>test</li>
                    )
                })}
            </ul>
            <div className='checkout-info'>
                <div>
                    <h3>SUBTOTAL</h3>
                    <h2>${totalCost}</h2>
                </div>
                <button>CHECKOUT</button>
            </div>
		</div>
	)
}

export default CartPanel
