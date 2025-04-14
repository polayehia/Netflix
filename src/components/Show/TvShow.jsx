import React from 'react'
import Header from '../Header/Header'
import { request } from '../../API/Api'
import Row from './../Row/Row';
import Switch from '../Switch/Switch';
import Search from '../Search/Search';

export default function TvShow() {
  return (
    <>
    <header>
    <Header wallpaper={request.discovertv}></Header>
    </header>
        <div className="">
       
  <section>
    <Search></Search>
    <Switch />
    <Row title="Puperler" apiUrl={request.popularTv} />
  </section>

  <section>
    <Row title="Trending" apiUrl={request.trendingtv} />
  </section>

  <section>
    <Row title="Discover" apiUrl={request.discovertv} />
  </section>

  <section>
    <Row title="TopRated" apiUrl={request.topRatedtv} />
  </section>


        </div>
    
    </>
  )
}
