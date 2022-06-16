// class Channel extends React.Component {
//     //Channel class you should have attributes and behavior as React.Component class

//     //bare minimum can implement a render() {} method, method that 
//     //gets called by React runtime that tells runtime exactly what to happen when
//     //this class component is used. 
//     //IN short, how Component should be displayed visually and how
//     //Component should react to events
//     //  
//     render() {
//         return (
//             <li>Cannel name</li>
//technically could do React.createElement("li", null, "Channel Name")
//This is a way but it wouldn't be as easy or memerable to write. 
//So better to use HTML format for jsx to describe in a declerative way
//JSX embeds markup in our code then conerts to function calls as part of build step        
//easier to understand at a glance and in the end they are JS function calls       
//       )
//     }
// }
//ReactDom.render(<Channel />, document.getElementByID('app'));
//Channel will later be transpiled into js function by babel
//serve command available from npm to serve a page
//now just use yarn start


//above is class way, long time ago now just use functional components
// and no need to import React anymore but you can if you want
import React from 'react'
const Channel = (props) => {
return (
    <>
    <li onClick={()=> {console.log('I was clicked')}}>
        {props.name}
    </li>
    <p>This is {props.crazy}</p>
    </>
)
}
export default Channel