import './logo.css'
import {Link} from 'react-router-dom'

export function Logo (){
  return(
    <Link to="/">
      <h1 className='logo'>Jorisson<span className='logo-text'>Yagami</span></h1>
    </Link>
  )
}