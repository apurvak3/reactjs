import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
return(
  <div>
    <h1>Custom APP</h1>
  </div>
)
}
/*const reactElement = {
  type: 'a',
  props : { 
    href : 'https://google.com',
    target:'_blank',
    
},
children : 'click me to visit google',

}
const anotherElement=(
  <a href ="https://google.com" target='_blank'>Visit google</a>   //object is predefined i.e <any tag, attribute>text
)*/
const anotherElement = 'Welcome to the page'
const reactElement = React.createElement(
  'a',
  {
    href :"https://google.com",target :'_blank'
  },
  'click me to visit google',anotherUser
  )


ReactDOM.createRoot(document.getElementById('root')).
render(
  anotherElement
)
//wwe are not able to render react element but we are able to render another element.conversion takes place
