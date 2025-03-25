
import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './Counter';
import Batsman from './batsman';
import User from './User';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


const friends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
const posts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}


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

      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends friends={friends()}></Friends>
      </Suspense>
      <button onClick={hendelClick}>Click Me</button>
      <button onClick={() => handelNumber(22)}>Click to Show number</button>

      <Counter></Counter>
      <Batsman></Batsman>
      <Suspense fallback={<h3>Posts Comming soon</h3>}>
        <Posts posts={posts()}></Posts>
      </Suspense>

    </>
  )
}

export default App
