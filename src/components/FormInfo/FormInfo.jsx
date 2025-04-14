import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../AuthContext/AuthContext'

export default function FormInfo({btn,logo,goto,linkName,fn,email,setEmail,password,setPassword}) {
  const {err}=useContext(Authcontext)
  
  return (
    <>
    <div className="h-screen flex justify-center items-center">
      <img
        className="hidden sm:block object-cover absolute top-0 left-0 w-full h-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/EG-en-20250120-TRIFECTA-perspective_73283b29-ae52-4aae-99e4-f58e9478f41b_small.jpg"
        alt="netflix-background"
      />
      <div className="fixed bg-gradient-to-t bg-black/60 inset-0 w-full h-full"></div>
      <div className="fixed w-[70%] sm:w-1/2 md:w-1/2 lg:w-1/3 mt-5 h-[75%] sm:h-[80%] bg-black mx-auto text-white">
        <h2 className="font-bold text-3xl py-16 pl-8">{logo}</h2>
        <form onSubmit={fn} className=" w-full flex justify-center flex-col">
          <input
            className="p-3 my-2 mx-auto bg-gray-700  rounded w-[80%] "
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 my-2 mx-auto bg-gray-700  rounded w-[80%] "
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="text-white bg-red-600 p-3 rounded block w-[80%] mx-auto my-4">
            {btn}
          </button>
          <div className="flex w-[80%] mx-auto justify-between m-2">
            {/* <p>
              <input type="checkbox" /> Remomber Me
            </p>
            <p>Need Any Help</p> */}
          </div>
          <p className="w-[80%] text-center text-gray-600 my-6 mx-auto">
            Already Subscrib To Netflix
            <Link to={`/${goto}`}>
              <span className="text-white pl-3">{linkName}</span>
            </Link>
          </p>
        </form>
        {err? <p className='text-red-600 text-1xl text-center'>{err}</p>:null}
      </div>
    </div>
  </>
  )
}
