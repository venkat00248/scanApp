/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

function Mappedarray(props:any) {
  const {array} = props
  
  const arrayrow = array?.map((prop:any)=>props.children({
    prop
  }))

  return <>{arrayrow}</>
}
export default Mappedarray