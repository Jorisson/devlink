import './logo.css'
import {Link} from 'react-router-dom'

export function Logo (){
  return(
    <Link to="/">
      <h1 className='logo'>Jori<span className='logo-text'>Sson</span></h1>
    </Link>
  )
}