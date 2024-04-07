import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 bg-white rounded-2xl px-3 py-3 border-2 border-black">
            <button onClick={() => setColor("red")} className="bg-red-600 text-white rounded-2xl py-2 px-4">Red</button>
            <button onClick={() => setColor("green")} className="bg-green-600 text-white rounded-2xl py-2 px-4">Green</button>
            <button onClick={() => setColor("yellow")} className="bg-yellow-300 text-black rounded-2xl py-2 px-4">Yellow</button>
            <button onClick={() => setColor("blue")} className="bg-blue-600 text-white rounded-2xl py-2 px-4">Blue</button>
            <button onClick={() => setColor("gray")} className="bg-gray-600 text-white rounded-2xl py-2 px-4">Gray</button>
            <button onClick={() => setColor("orange")} className="bg-orange-600 text-white rounded-2xl py-2 px-4">Orange</button>
            <button onClick={() => setColor("pink")} className="bg-pink-300 text-black rounded-2xl py-2 px-4">Pink</button>
            <button onClick={() => setColor("purple")} className="bg-purple-700 text-black rounded-2xl py-2 px-4">Purple</button>
            <button onClick={() => setColor("white")} className="bg-white text-black rounded-2xl py-2 px-4 border-2 border-black">white</button>
          </div>
        </div>
        <div id="para" className=' h-full flex justify-center items-center'>
          <p className='text-5xl' >Bg changed to {color}</p>
        </div>
      </div>
    </>
  )
}

export default App
