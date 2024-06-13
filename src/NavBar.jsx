
// styling
import './NavBar.css'

function NavBar() {

  return (
    <div className='nav-container'>
        <h2>eShopCenter</h2>
        <nav>
            <div className='link-container'>
                <button>Home</button>
            </div>
            <div className='link-container'>
                <button>Shop</button>
            </div>
            <div className='link-container'>
                <button>Cart</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
