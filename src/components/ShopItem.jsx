
// styling
import '../styles/ShopItem.css'

function ShopItem({ name, cost, imgSrc, onClick }) {
  return (
    <div className='shop-item'>
      <div className='img-container'>
        <img src={imgSrc} alt="Shop Item" />
      </div>
      <div className="item-info">
        <div>
          <h3>{name}</h3>
          {cost}
        </div>
        <button onClick={onClick()}>+ Add to Cart</button>
      </div>
    </div>
  )
}

export default ShopItem
