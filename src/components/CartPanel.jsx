
// styling
import '../styles/CartPanel.css'

function CartPanel({ items, isShowing }) {
	return (
		<div className={'cart-container' + (!isShowing ? ' hidden' : '')} >
			<h2>Cart</h2>
            <ul className='cart-items'>
                {items && items.map((item) => {
                    return (
                        <li>test</li>
                    )
                })}
            </ul>
		</div>
	)
}

export default CartPanel
