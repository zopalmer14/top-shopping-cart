
// packages / libraries
import { useState } from 'react'

// react components
import NavBar from './NavBar';
import ShopPage from './ShopPage';

// styling
import '../styles/App.css'

// default info/states
const pageLinks = ['Home', 'Shop', 'Cart'];

function App() {
  // react states
  const [pageShowing, setPageShowing] = useState('Home');

  return (
    <div>
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
  )
}

export default App
