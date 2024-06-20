
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

function ShopPage({ setCart }) {
  // react states
  const [shopItems, setShopItems] = useState([])

  // side effect that grabs the fakeShopAPI data 
  useEffect(() => {
    getShopItems().then((response) => {
      setShopItems(response)
    })
  }, [])

  // ADD ITEM TO CART -- function handler
  const addItemToCart = function addItemToCart(event) {
    // grab the item id from the button the user clicked
    const itemId = event.currentTarget.id;

    // find the item in the array of shop items 
    const selectedItem = shopItems.find((item) => item.id == itemId)

    // add the selected item to the current cart
    setCart(selectedItem)
  }

  return (
    <div className='shop-catalog'>
      {shopItems && shopItems.map((item) => {
        return (
          <ShopItem 
            key={item.id}
            id={item.id}
            name={item.title}
            cost={item.price}
            imgSrc={item.image}
            buttonText={'+ Add to Cart'}
            onClick={addItemToCart}
          />
        )
      })}
    </div>
  )
}

export default ShopPage
