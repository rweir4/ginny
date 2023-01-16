import * as React from 'react'                          
import * as ReactDOM from 'react-dom'                   
                        
// const Hello = (children) => {                                
//   return ({children})                  
// }                                                       

const Hello = () => { 
  console.log('hi')                            
  return (<div>Hello, app here</div>)                  
}                                                       
                                        
// Use it if you don't plan to use "remount"                
document.addEventListener('DOMContentLoaded', () => {     
  console.log('whatever')
  ReactDOM.render(<Hello />, document.getElementById('hello'))                  
})                                                    
                                                        
export default Hello