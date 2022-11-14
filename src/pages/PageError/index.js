import './pageError.css'
import {Link} from 'react-router-dom'
import {Logo} from '../../components/Logo'

export default function PageError (){
  return (
    <div className='error'>
      <Logo />
      <h1>Pagina Não Encontrada!</h1>
      <p>Está página que está procurando não existe.</p>

      <Link className='link' to="/"> 
        Voltar para Home
      </Link>
    </div>
  )
}