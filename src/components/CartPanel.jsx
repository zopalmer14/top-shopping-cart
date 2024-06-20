
// components
import ShopItem from './ShopItem'

// styling
import '../styles/CartPanel.css'

function CartPanel({ items, isShowing }) {
  const totalCost = 19.98

  return (
    <div className={'cart-container' + (!isShowing ? ' hidden' : '')} >
      <h1>Cart</h1>
      <div className='cart-items'>
        {items && items.map((item) => {
          return (
            <ShopItem 
              key={item.id}
              id={item.id}
              name={item.title}
              cost={item.price}
              imgSrc={item.image}
              onClick={() => {}}
            />
          )
        })}
      </div>
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
