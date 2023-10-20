/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './Banner.css'
import Socialicontab from './Socialicontab'
function Banner(props:any) {
  const { html, style, height='50vh', className=''} = props
  return <div className={`bannercont ${className}`} style={{height: height??''}}>
      <div className="banner" style={style}></div>
      <Socialicontab />
      {html}
  </div>
}
export default Banner