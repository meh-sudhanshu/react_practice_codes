import { useRef } from "react";
function App() {
  const nameRef = useRef()
  const style={
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    gap:"10px"
  }
  const clickHandler =(e)=>{
    e.preventDefault()
    console.log(nameRef.current.value)
  }
  return (
    <div className="App" >
        <form style={style}>
          <input 
            type="text"
            placeholder="enter your name"
            ref={nameRef}
            />
          <button type="submit" onClick={clickHandler}>Submit your name</button>
        </form>
    </div>
  );
}

export default App;
