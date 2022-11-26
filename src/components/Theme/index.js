import './theme.css'

export function Theme (){
  return(
    <ul>
      <li><input name="input-theme" id="dark" type="radio" defaultChecked={true} /></li>
      <li><input name="input-theme" id="light" type="radio" /></li>
    </ul>
  )
}