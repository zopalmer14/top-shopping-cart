
// styling
import './ShopItem.css'

function ShopItem({ name, cost, imgSrc, onClick }) {
  return (
    <button className='shop-item' onClick={onClick()}>
      <div className='img-container'>
        <img src={imgSrc} alt="Shop Item" />
      </div>
      <h1>{name}</h1>
    </button>
  )
}

export default ShopItem
