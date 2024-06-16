
// react components
import ShopItem from './ShopItem';

// styling
import './ShopPage.css'

function ShopPage({ items }) {
  console.log(items)
  return (
    <div className='shop-catalog'>
      {items && items.map((item) => {
        return (
          <ShopItem 
            id={item.name}
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
