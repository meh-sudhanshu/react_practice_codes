

const heading1 = React.createElement("h1",{id:"h1",key:"h1"},"Hello World 1")
const heading2 = React.createElement("h1",{id:"h2",key:"h2"},"Hello World 2")
// console.log(heading);


const child = React.createElement("div",{id:"child",key:"child"},[heading1,heading2])
const parent = React.createElement("div",{id:"parent"},child)




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)