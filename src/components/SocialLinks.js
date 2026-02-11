import {  socialLinks } from '../data'

const SocialLinks = ( {linkClass} ) => {
  return (
    <>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} 
              target="_blank" 
              rel="noreferrer"
              className={linkClass}>
              <i className={link.icon}></i>
            </a>
          </li> 
        )
      })}
    </>
  )
}
export default SocialLinks