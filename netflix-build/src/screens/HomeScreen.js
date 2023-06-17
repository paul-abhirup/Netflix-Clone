import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Request";
import Row from "../Row";

function homeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />

      {/* Banner  Ads */}
      <Banner />

      {/* Row  for showcasing shows*/}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      {/*
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      <Row
        title="Family Movies"
        fetchUrl={requests.fetchFamilyMovies}
        isLargeRow
      />
      <Row
        title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow
      />
      <Row
        title="Adventure Movies"
        fetchUrl={requests.fetchAdventureMovies}
        isLargeRow
      />

      <Row
        title="Crime Movies"
        fetchUrl={requests.fetchCrimeMovies}
        isLargeRow
      />

      <Row
        title="Mystery Movies"
        fetchUrl={requests.fetchMysteryMovies}
        isLargeRow
      /> */}
    </div>
  );
}

export default homeScreen;
