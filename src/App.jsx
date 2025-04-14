


import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContextProvider } from './AuthContext/AuthContext';
import NotFound from './components/NotFound/NotFound';
import ProtactedRout from './components/Protacted/ProtactedRout';
import Account from './components/Account/Account';
import Details from './components/Details/Details';
import ActorsDetails from './components/Details/Actors/ActorsDetails';
import ActorsMovies from './components/Details/Actors/ActorsMovies';
import Category from './components/Category/Category';
import AllSeasons from './components/EpisodeGroups/Seasons/AllSeasons/AllSeasons';
import EpisodeDetails from './components/EpisodeGroups/EpisodeDetails/EpisodeDetails';
import CategoryList from './components/Category/CategoryList/CategoryList';



function App() {
let router =createBrowserRouter([{
  path: '/',element:<Layout></Layout>,children:[
   {index:true, path: '/', element:<ProtactedRout><Home></Home></ProtactedRout> },
   {path:'/account',element:<ProtactedRout><Account></Account></ProtactedRout>},
   {path:'/home',element:<ProtactedRout><Home></Home></ProtactedRout> },
   {path:'/categorylist',element:<ProtactedRout><CategoryList></CategoryList></ProtactedRout>},
  //  {path:'/register',element:<Register></Register>},
  //  {path:'/login',element:<Login></Login>},
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
