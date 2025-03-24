
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'
import Batsman from './batsman'

function App() {

  const hendelClick = () => {
    alert("Button Clicked!")
  }

  const handelNumber = (num) => {
    alert(num + 10)
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">

        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <button onClick={hendelClick}>Click Me</button>
      <button onClick={() => handelNumber(22)}>Click to Show number</button>
      <Counter></Counter>
      <Batsman></Batsman>


    </>
  )
}

export default App
