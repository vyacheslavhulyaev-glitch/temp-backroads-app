import logo from '../images/logo.svg'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          <PageLinks linkClass="nav-link" />
        </ul>

        <ul className="nav-icons">
          <SocialLinks linkClass="nav-icon" />
          
      
        </ul>
      </div>
    </nav>
  )
}

export default Navbar