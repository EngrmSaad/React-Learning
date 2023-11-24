import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let Channel = {
    ChannelName: 'Chai Aur Code',
    Instructor: 'Hitesh Chaudhry',
    Image: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    ChannelLink: 'https://www.youtube.com/c/HiteshChoudharydotcom'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card channel={Channel} />

    </>
  )
}

export default App
