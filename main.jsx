import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp() {   //This is a functional component that returns a simple JSX element containing a div with a heading saying "Custom APP".
  return (
    <div>
      <h1>Custom APP</h1>
    </div>
  );
}


const anotherElement = (    //This is a JSX element. It creates an anchor (<a>) tag that links to Google and opens in a new tab. The text displayed for the link is "Visit Google".
  <a href="https://google.com" target="_blank">Visit Google</a>
);


const reactElement = React.createElement(  //This creates the same anchor tag as above, but using React.createElement instead of JSX.
  'a',
  {
    href: "https://google.com",
    target: '_blank'
  },
  '  (hey!click me to visit google)'
);

ReactDOM.createRoot(document.getElementById('root')).render(// This initializes a React root container at the DOM element with the id root.
  <React.StrictMode>
    {anotherElement}
    {reactElement}
    <MyApp />
  </React.StrictMode>
);
//wwe are not able to render react element but we are able to render another element.conversion takes place
//summary
Import necessary React libraries and custom components.
Define a simple functional component (MyApp) that returns some JSX.
Create a JSX element (anotherElement) and a React element (reactElement) that both represent anchor tags linking to Google.
Render the anotherElement, reactElement, and MyApp component to the root DOM element using ReactDOM.createRoot().render().

