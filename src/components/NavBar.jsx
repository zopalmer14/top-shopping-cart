
// styling
import '../styles/NavBar.css'

function NavBar({ title, links, onClick }) {

  return (
    <div className='nav-container'>
        <h2>{title}</h2>
        <nav>
            {links && links.map((link) => {
                return (
                    <div key={link} className='link-container'>
                        <button onClick={() => onClick(link)}>{link}</button>
                    </div>
                )
            })}
        </nav>
    </div>
  )
}

export default NavBar
