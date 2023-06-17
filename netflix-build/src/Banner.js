import React from 'react'
import './Banner.css'

function Banner() {

  //elipsis is used to shorten the description
  //here we using elipsis func

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`Movie Description lorem34   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae similique neque, placeat accusamus sapiente. Beatae, ab a? Illo minus non molestias quod similique saepe culpa sunt odio sit veritatis?`,200)} </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner