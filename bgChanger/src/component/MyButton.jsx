import React from 'react'

function MyButton({ color='black', setColor, txtColor='white'}) {
    let ButtonText = color.charAt(0).toUpperCase() + color.slice(1);
  return (
    <>
      <button className='outline-none px-4 py-1 rounded-full shadow-xl'
              style={{ backgroundColor: color, textColor: txtColor}} onClick={()=> setColor(color)}>{ ButtonText}</button>
    </>
  )
}

export default MyButton
