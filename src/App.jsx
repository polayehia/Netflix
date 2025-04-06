// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componant/Home/Home'
import Register from './componant/Register/Register';
import Login from './componant/Login/Login';
import Layout from './componant/Layout/Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContextProvider } from './AuthContext/AuthContext';
import NotFound from './componant/NotFound/NotFound';
import ProtactedRout from './componant/Protacted/ProtactedRout';
import Account from './componant/Account/Account';
import Details from './componant/Details/Details';
import ActorsDetails from './componant/Details/Actors/ActorsDetails';
import ActorsMovies from './componant/Details/Actors/ActorsMovies';
import Category from './componant/Category/Category';
import AllSeasons from './componant/Episode Groups/Seasons/AllSeasons/AllSeasons';
import EpisodeDetails from './componant/Episode Groups/episodeDetails/episodeDetails';
import CategoryList from './componant/Category/CategoryList/CategoryList';



function App() {
let router =createBrowserRouter([{

  path: '/',element:<Layout></Layout>,children:[
   {path:'/',element:<ProtactedRout><Home></Home></ProtactedRout> },
   {path:'/account',element:<ProtactedRout><Account></Account></ProtactedRout>},
  //  {path:'/home',element:<ProtactedRout><Home></Home></ProtactedRout> },
   {path:'/categorylist',element:<ProtactedRout><CategoryList></CategoryList></ProtactedRout>},
   {path:'/register',element:<Register></Register>},
   {path:'/login',element:<Login></Login>},
   {path:'/login',element:<Login></Login>},
   {path:'/details/:id',element:<ProtactedRout><Details></Details></ProtactedRout>},
   {path:'/actorsdetails/:id',element:<ProtactedRout><ActorsDetails></ActorsDetails></ProtactedRout>},
   {path:'/actorsmovies/:id',element:<ProtactedRout><ActorsMovies></ActorsMovies></ProtactedRout>},
   {path:`/allseasons/:id/season/:id/episode/:id`,element:<ProtactedRout><AllSeasons></AllSeasons></ProtactedRout>},
   {path:`/category/:id`,element:<ProtactedRout><Category></Category></ProtactedRout>},
   {path:`/episodedetails/:id/season/:season/episode/:episode`,element:<ProtactedRout><EpisodeDetails></EpisodeDetails></ProtactedRout>},

   {path:'*',element:<NotFound></NotFound>},

    
  ]

  
}])
  return (
    <>
     <AuthContextProvider>

     <RouterProvider router={router}></RouterProvider>

     </AuthContextProvider>
    </>
  )
}

export default App
