import React from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import { request } from "./../../API/Api";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import { Authcontext } from "../../AuthContext/AuthContext";
import Search from "../Search/Search";
// import { auth } from "../../firebase";

export default function Home() {
  // const au=auth;
  // console.log('au',au)

  const { movie } = useContext(Authcontext);
  console.log(
    "Wallpaper:",
    !movie ? request.discovermovie : request.discovertv
  );

  return (
    <>
      <header>
        {!movie ? (
          <Header wallpaper={request.discovermovie}></Header>
        ) : (
          <Header wallpaper={request.discovertv}></Header>
        )}
      </header>

<Search></Search>
<div className="">
      <section>
        {/* this componante for switch from movies to tv  */}
        <Switch></Switch>
        {!movie ? (
          <Row title="Upcoming " apiUrl={request.upcomingMovies}></Row>
        ) : (
          " "
        )}
        {/* <Row title="Upcoming " apiUrl={request.upcomingMovies}></Row> */}
      </section>

      <section>
        {!movie ? (
          <Row title="Puperler " apiUrl={request.pupolermovies}></Row>
        ) : (
          <Row title="Puperler " apiUrl={request.popularTv}></Row>
        )}
      </section>

      <section>
        {!movie ? (
          <Row title="Trending " apiUrl={request.trendingmovie}></Row>
        ) : (
          <Row title="Trending " apiUrl={request.trendingtv}></Row>
        )}
      </section>
      <section>
        {!movie ? (
          <Row title="NowPlaying " apiUrl={request.nowPlaying}></Row>
        ) : (
          <Row title="Discover " apiUrl={request.discovertv}></Row>
        )}
        {/* <Row title="NowPlaying " apiUrl={request.nowPlaying}></Row> */}
      </section>

      <section>
        {!movie ? (
          <Row title="TopRated " apiUrl={request.topRated}></Row>
        ) : (
          <Row title="TopRated " apiUrl={request.topRatedtv}></Row>
        )}
        {/* <Row title="TopRated " apiUrl={request.topRated}></Row> */}
      </section>
</div>
    </>
  );
}
