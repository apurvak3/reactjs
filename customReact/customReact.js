
//here we are setting attributes multiple tyms.ie here code is repeated
/*function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}*/
function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.children
    for (const prop in reactElement.props) {
       // if(prop === children) continue; //not necessary as there is no children inside prop.
        domElement.setAtrribute(prop,reactElement.props[prop])
         }
    container.appendchild(domElement);
}
     const reactElement ={
    type : 'a',
    props:{
        href:'https://google.com',
        target:'_blank',
        children :'click me to visit google',
    }
 };
 const mainContainer = document.querySelector('#root')
 customRender(reactElement,mainContainer)