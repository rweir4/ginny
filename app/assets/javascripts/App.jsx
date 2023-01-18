import * as React from 'react'                          
import * as ReactDOM from 'react-dom'                                 

const Hello = () => {
  console.log('whatever')                            
  return (<div>Hello, app here</div>)                  
}

// Use it if you don't plan to use "remount"           
document.addEventListener('DOMContentLoaded', () => {     
  ReactDOM.render(<Hello />, document.getElementById('hello'))                  
})
                                                      
export default Hello