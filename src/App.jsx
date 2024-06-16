
// packages / libraries
import { useState } from 'react'

// react components
import NavBar from './NavBar';
import ShopPage from './ShopPage';

// styling
import './App.css'

// default info/states
const pageLinks = ['Home', 'Shop', 'Cart'];

const shopItems = [
  {
    name: "umbrella",
    cost: 20,
    img: "placeholder"
  },
  {
    name: "umbrella",
    cost: 20,
    img: "placeholder"
  },
  {
    name: "umbrella",
    cost: 20,
    img: "placeholder"
  },
];

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
        {pageShowing === 'Shop' ? <ShopPage items={shopItems} /> : pageShowing}
      </main>
    </div>
  )
}

export default App
