
// packages / libraries
import { useState, Fragment } from 'react'

// react components
import NavBar from './NavBar';
import ShopPage from './ShopPage';
import CartPanel from './CartPanel';

// styling
import '../styles/App.css'

// default info/states
const pageLinks = ['Home', 'Shop', 'Cart'];

function App() {
  // react states
  const [pageShowing, setPageShowing] = useState('Home');
  
  // derived values
  const cartShowing = pageShowing === 'Cart';

  return (
    <Fragment>
      <CartPanel items={[]} isShowing={cartShowing}/>
      <div className={cartShowing ? 'background' : 'foreground'}>
        <header>
          <NavBar
            title="eShopCenter"
            links={pageLinks}
            onClick={(pageName) => setPageShowing(pageName)}
          />
        </header>
        <main>
          {pageShowing === 'Shop' ? <ShopPage /> : pageShowing}
        </main>
      </div>
    </Fragment>
  )
}

export default App
