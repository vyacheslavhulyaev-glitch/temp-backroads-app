import { pageLinks } from '../data'

const PageLinks = ({linkClass}) => {
  return (
    <>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} 
              rel="noopener" 
              className={linkClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </>
  )
}
export default PageLinks