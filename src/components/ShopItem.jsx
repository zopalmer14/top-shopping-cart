
// styling
import '../styles/ShopItem.css'

function ShopItem({ id, name, cost, imgSrc, buttonText, onClick }) {
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
        <button id={id} onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default ShopItem
