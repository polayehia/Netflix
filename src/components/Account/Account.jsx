import React from 'react';
import SavedShow from '../SavedShow/SavedShow';

export default function Account() {
  return (
  <>
    <div className='relative h-screen w-full'>
      <div className="h-[50%] bg-red-400 relative  w-full">
        <img
          className="object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/EG-en-20250120-TRIFECTA-perspective_73283b29-ae52-4aae-99e4-f58e9478f41b_small.jpg"
          alt="netflix-background"
        />
      </div>
      <div className="absolute h-[50%] w-full inset-0 bg-gradient-to-r bg-black/55 ">
      <p className='text-white absolute  text-3xl md:text-4xl  font-bold top-[50%] left-[5%]'>My Shows</p>
      </div>
      
    <SavedShow ></SavedShow>
    
    </div>
  </>
  
  );
}
