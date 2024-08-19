import React from "react";
import ReactDOM from "react-dom/client";
// import { renderToNodeStream } from "react-dom/server";

const heading = React.createElement(
	"h1",
	{ id: "he" },
	"using React.createElement"
);
// ! below is the same as the above code
const JSXHeading = <h1 id="he">using JSX</h1>;

const root = ReactDOM.createRoot(document.querySelector(".root"));
/*

 ! similarly, we can use JSX syntax to create elements
 ? JSX is a syntactic sugar for React.createElement
 *JSX is not a valid JavaScript syntax
 *JSX is a syntax extension for JavaScript
 *JSX is a preprocessor step that adds XML syntax to JavaScript
 *JSX is transformed into JavaScript at runtime
 *JSX is a syntax extension for JavaScript
*/

// root.render(heading);
// root.render(JSXHeading);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// now creating functional component
//! Component Composition
const Title = ()=> <h1>By Akshay Saini</h1> ;
const Heading = () => (
	<div>
		<h1>NAMASTE React</h1>
        <Title/>
	</div>
);

root.render(<Heading/>);
//

const Demo = ()=>(
    <div>
        <h1>This is line one</h1>
        <Heading/>   
        {Heading()} 
        <Heading></Heading>  
        {1000}
        <h1>{1000}</h1>
        <h1>{100+20}</h1>
    </div>
)
root.render(<Demo/>)


