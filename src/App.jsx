
// packages / libraries
import { useState } from 'react'

// react components
import NavBar from './NavBar';

// styling
import './App.css'

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
    </div>
  )
}

export default App
