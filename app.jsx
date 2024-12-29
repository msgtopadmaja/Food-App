import React from "react";
import { createRoot } from "react-dom/client";

//React.createElement ==> object, when it is render in DOM it is HTML element

const spanEle = <span>Span element</span>;

const element = (
  <div id="ele-container">
    {spanEle}
    <h3 className="head">Namaste React using JSX- react element</h3>
  </div>
);

const TitleComponent = function () {
  return (
    <h2 className="title">Title Component using normal functional component</h2>
  );
};

const number = 100;
const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <TitleComponent></TitleComponent> {/* we can write like this also */}
      {TitleComponent()} {/* we can call a function as well */}
      <h1 className="head">Functional Component</h1>
      <h2>
        {number + 100}
        {
          "we can also include the react element and javascript code inside the componets"
        }
      </h2>
      {element}
    </div>
  );
};

const componentInsideElement = (
  <div id="component">
    <HeadingComponent />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(componentInsideElement);
