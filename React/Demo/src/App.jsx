
import viteLogo from '/vite.svg'
import './App.css'
import MessageName from './MessageName'
import AmazonCard from './AmazonCard'
import LikeButton from './LikeButton'

function App () {
  return (
    <div>
      <MessageName name="Hari" text="white"/>
      <AmazonCard/>
      <LikeButton/>
    </div>
  )
}

export default App