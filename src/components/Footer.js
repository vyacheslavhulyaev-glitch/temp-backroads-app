  import SocialLinks from './SocialLinks'
  import PageLinks from './PageLinks'

  const Footer = () => {
    return (
      <footer className="section footer">
        <ul className="footer-links">

          <PageLinks linkClass="footer-link" />
        
        </ul>
        <ul className="footer-icons">
          <SocialLinks linkClass="footer-icon" />
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    )
  }
  export default Footer