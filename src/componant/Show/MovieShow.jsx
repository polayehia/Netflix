import React from "react";
import Header from './../Header/Header';
import { request } from "../../API/Api";
import Row from "../Row/Row";
import Switch from "../Switch/Switch";
import Search from "../Search/Search";

export default function MovieShow() {
  return (
    <>
    <header>
      <Header wallpaper={request.discovermovie}></Header>
    </header>

    <div className="">
<Search></Search>
  <section>
    <Switch />
    <Row title="Upcoming" apiUrl={request.upcomingMovies} />
  </section>

  <section>
    <Row title="Puperler" apiUrl={request.pupolermovies} />
  </section>

  <section>
    <Row title="Trending" apiUrl={request.trendingmovie} />
  </section>

  <section>
    <Row title="NowPlaying" apiUrl={request.nowPlaying} />
  </section>

  <section>
    <Row title="TopRated" apiUrl={request.topRated} />
  </section>
</div>

    
    </>
    
  );
}
