import './social.css'

export function Social({children ,url}){
  return(
    <a href={url} className="social" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}