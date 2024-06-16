
// react components
import ShopItem from './ShopItem';

// styling
import '../styles/ShopPage.css'

function ShopPage({ items }) {
  return (
    <div className='shop-catalog'>
      {items && items.map((item, index) => {
        return (
          <ShopItem 
            key={index}
            name={item.name}
            cost={item.cost}
            imgSrc={item.img}
            onClick={() => {}}
          />
        )
      })}
    </div>
  )
}

export default ShopPage
