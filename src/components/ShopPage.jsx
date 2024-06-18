
// packages / libraries
import { useState, useEffect } from 'react'

// react components
import ShopItem from './ShopItem';

// styling
import '../styles/ShopPage.css'

async function getShopItems() {
  try {
    const fakeShopProducts = await fetch('https://fakestoreapi.com/products')
    return fakeShopProducts.json()
  } catch (error) {
    console.log(error)
  }
}

function ShopPage({  }) {
  const [shopItems, setShopItems] = useState([])

  // side effect that grabs the fakeShopAPI data 
  useEffect(() => {
    getShopItems().then((response) => {
      setShopItems(response)
    })
  }, [])

  return (
    <div className='shop-catalog'>
      {shopItems && shopItems.map((item) => {
        return (
          <ShopItem 
            key={item.id}
            name={item.title}
            cost={item.price}
            imgSrc={item.image}
            onClick={() => {}}
          />
        )
      })}
    </div>
  )
}

export default ShopPage
