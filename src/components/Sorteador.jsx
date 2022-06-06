import { useState } from 'react'
import { mega } from '../data/mega'
import { Numeros } from './Numeros'
export function Sorteador() {
  const [numeros, setNumeros] = useState(mega())

  function renderNumeros() {
    return numeros.map(numeros => <Numeros key={numeros} numeros={numeros} />)
  }

  return (
     
    
      
    <div className='w-screen h-screen flex flex-col flex-center justify-center items-center'>
      <div className='border-0 border-zinc-500 shadow-2xl shadow-black rounded-xl p-28'>
         <h1 className="font-bold text-5xl text-center mb-10 ">Mega Sena</h1>  

  
           <div className='flex flex-center justify-center space-x-4 '>
   
            {renderNumeros()}
      
           </div>
           <div className='mt-10 flex flex-center justify-center'>
             <button
             className=' text-lg bg-black hover:bg-gray-900 transition duration-150 ease-out hover:ease-in px-10 py-3 rounded-2xl text-white  '
             onClick={() => setNumeros(mega())} >sortear</button>
           </div>
       </div>
      </div>
     
  )
}
 
