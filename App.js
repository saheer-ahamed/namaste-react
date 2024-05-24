/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>
 *             I'm an h1 Tag!
 *          </h1>
 *          <h2>
 *             I'm an h2 Tag!
 *          </h2>
 *      </div>
 *      <div id="child2">
 *          <h1>
 *             I'm an h1 Tag!
 *          </h1>
 *          <h2>
 *             I'm an h2 Tag!
 *          </h2>
 *      </div>
 * </div>
 */

let parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement(
                    "h1",
                    { id: "heading" },
                    "I'm an h1 Tag!"),
                React.createElement(
                    "h2",
                    { id: "heading" },
                    "I'm an h2 Tag!")
            ]
        ),
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement(
                    "h1",
                    { id: "heading" },
                    "I'm an h1 Tag!"),
                React.createElement(
                    "h2",
                    { id: "heading" },
                    "I'm an h2 Tag!")
            ]
        )
    ]
);

console.log(parent) // Object

// To make the above code simpler => there comes JSX

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)