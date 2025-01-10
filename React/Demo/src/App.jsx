
import viteLogo from '/vite.svg'
import './App.css'
import MessageName from './MessageName'
import AmazonCard from './AmazonCard'
import LikeButton from './LikeButton'
import Todo from './Todo'

function App () {
  return (
    <div>
      <MessageName name="Hari" text="white"/>
      <AmazonCard/>
      <LikeButton/>
      <Todo/>
    </div>
  )
}

export default App