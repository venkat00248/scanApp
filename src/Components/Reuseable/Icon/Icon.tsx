/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './Icon.css'
import './Socialicon.css'

function Icon(props:any) {
  const {icon, clickEvent} = props

  return (
    <i className={icon +' icon'} onClick={()=>clickEvent && clickEvent()}></i>
  )
}
export default Icon