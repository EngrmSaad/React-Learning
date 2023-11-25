import { useState } from 'react'
import MyButton from './component/MyButton'

function App() {
  const [bgColor, setBgColor] = useState('black')

  return (
    <>
      <div className='w-full h-screen duration-200 '
        style={{backgroundColor: bgColor}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <MyButton color='red' setCeolor={setBgColor}/>
            <MyButton color='green' setColor={setBgColor}/>
            <MyButton color='blue' setColor={setBgColor}/>
            <MyButton color='olive' setColor={setBgColor}/>
            <MyButton color='yellow' setColor={setBgColor} txtColor='black'/>
            <MyButton color='black' setColor={setBgColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
