/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from './Dropdown/Dropdown'

function NavBarLink(props:any) {
  const {link} = props
  return (
    <div>
    {/* <NavHashLink 
    to={link.link+'#top'} 
    exact={link.exact}
    activeClassName='activelink'
    onClick={()=>{clickEvent && clickEvent()}}
    isActive={(match, location)=> {if(match) return true}}
   > */}
   <a>
      <span>{link.text}</span>
      <div className="dot"></div>
    {/* </NavHashLink> */}</a>
       {
        link.dropdown
        &&
          <Dropdown dropdown={link.dropdown} link={link}/>
        }
    </div>
  )
}
export default NavBarLink