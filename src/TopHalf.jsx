import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./TopHalf.css"
import Carousel from "./Carousel.jsx";
import EmailSub from "./EmailSub.jsx";
import CardSlider from "./CardSlider.jsx";

const TopHalf = ({ carousel_data }) => {

  const [mainBackground, setMainBackground] = useState(carousel_data[0].url);
  const [mainColor, setMainColor] = useState('rgba(38, 23, 32, 0.8)')

  const updateBackground = (mainBackground) => {
    setMainBackground(mainBackground);
  }

  const updateOverlay = (mainColor) => {
    setMainColor(mainColor);
  }

  const cardsTrending = [
      {id : "1", url : "lucky-baskhar.jpg", modalBg : "lucky-baskhar-bg-modal.jpg", title : "lucky-baskhar-title.jpg", keywords : ["2024", "10+", "Movie", "Thrillers"], description: "A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man."}, 

      {id : "2", url : "vicky-vidya.jpg", modalBg : "vicky-vidya-bg-modal.jpg", title : "vicky-vidya-title.jpg", keywords : ["2024", "16+", "Movie", "Comedies"], description: "On the night of their wedding, Vicky and Vidya decide to record a private video. But when the CD is stolen, a panicked hunt for the footage unfolds."},

      {id : "3", url : "sikander-ka-muqadar.jpg", modalBg : "sikander-ka-muqadar-bg-modal.jpg", title : "sikander-ka-muqadar-title.jpg", keywords : ["2024", "13+", "Movie", "Thrillers"], description: "After an unsolved diamond heist, a hard-nosed cop’s pursuit of his key suspect turns into obsession, until they finally face each other — and the truth.", category: "n-film.jpg"}, 

      {id : "4", url : "kapil-show.jpg", modalBg : "kapil-show-bg-modal.jpg", title : "kapil-show-title.jpg", keywords : ["2024", "13+", "Show", "Talk Shows"], description: "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast.", category: "n-series.jpg"}, 

      {id : "5", url : "devara.jpg", modalBg : "devara-bg-modal.jpg", title : "devara-title.jpg", keywords : ["2024", "16+", "Movie", "Action"], description: "A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own."}, 

      {id : "6", url : "jigra.jpg", modalBg : "jigra-bg-modal.jpg", title : "jigra-title.jpg", keywords : ["2024", "16+", "Movie", "Action"], description: "When Ankur is wrongfully imprisoned and sentenced to death in a foreign country, his steely sister Satya is driven by a lethal resolve to break him free."}, 

      {id : "7", url : "money-heist.jpg", modalBg : "money-heist-bg-modal.jpg", title : "money-heist-title.jpg", keywords : ["2021", "18+", "Show", "Thrillers"], description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.", category: "n-series.jpg"}, 

      {id : "8", url : "mismatched.jpg", modalBg : "mismatched-bg-modal.jpg", title : "mismatched-title.jpg", keywords : ["2024", "18+", "Show", "Comedies"], description: "After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.", category: "n-series.jpg"}, 

      {id : "9", url : "kali-kali-ankhen.jpg", modalBg : "kali-kali-ankhen-bg-modal.jpg", title : "kali-kali-ankhen-title.jpg", keywords : ["2024", "16+", "Show", "Thrillers"], description: "Relentlessly pursued by a powerful politician’s daughter who will do anything to make him hers, a man slips down a dark, risky path to reclaim his life.", category: "n-series.jpg"}, 

      {id : "10", url : "vincenzo.jpg", modalBg : "vincenzo-bg-modal.jpg", title : "vincenzo-title.jpg", keywords : ["2021", "16+", "Show", "Comedies"], description: "During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.", category: "n-series.jpg"}, 
    ]

  const cardsOnNetflix = [
      {id : "1", url : "when-the-phone-rings.jpg", modalBg : "when-the-phone-rings-bg-modal.jpg", title : "when-the-phone-rings-title.jpg", keywords : ["2024", "13+", "Show", "Thrillers"], description: "A rising politician and his mute wife's tense marriage begins to unravel after a call from a kidnapper turns their lives upside down."},

      {id : "2", url : "stranger-things.jpg", modalBg : "stranger-things-bg-modal.jpg", title : "stranger-things-title.jpg", keywords : ["2022", "16+", "Show", "Horror"], description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", category: "n-series.jpg"}, 

      {id : "3", url : "doo-patti.jpg", modalBg : "do-patti-bg-modal.jpg", title : "do-patti-title.jpg", keywords : ["2024", "10+", "Movie", "Thrillers"], description: "A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man.", category: "n-film.jpg"}, 

      {id : "4", url : "queen-of-tears.jpg", modalBg : "queen-of-tears-bg-modal.jpg", title : "queen-of-tears-title.jpg", keywords : ["2024", "13+", "Show", "Comedies", "Romance"], description: "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again.", category: "n-series.jpg"}, 

      {id : "5", url : "my-demon.jpg", modalBg : "my-demon-bg-modal.jpg", title : "my-demon-title.jpg", keywords : ["2023", "16+", "Show", "Comedies"], description: "A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities — and his heart.", category: "n-series.jpg"}, 

      {id : "6", url : "itaewon-class.jpg", modalBg : "itaewon-class-bg-modal.jpg", title : "itaewon-class-title.jpg", keywords : ["2020", "18+", "Show", "Dramas"], description: "In a colorful Seoul neighborhood, an ex-con and his friends fight a mighty foe to make their ambitious dreams for their street bar a reality.", category: "n-series.jpg"}, 

      {id : "7", url : "king-of-the-land.jpg", modalBg : "king-of-the-land-bg-modal.jpg", title : "king-of-the-land-title.jpg", keywords : ["2023", "13+", "Show", "Comedies"], description: "Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who's known for her irresistible smile — which he cannot stand.", category: "n-series.jpg"}, 

      {id : "8", url : "squid-games.jpg", modalBg : "squid-games-bg-modal.jpg", title : "squid-games-title.jpg", keywords : ["2021", "18+", "Show", "Thrillers", "Dramas"], description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.", category: "n-series.jpg"},

      {id : "9", url : "carry-on.jpg", modalBg : "carry-on-bg-modal.jpg", title : "carry-on-title.jpg", keywords : ["2024", "18+", "Movie", "Thrillers"], description: "An airport security officer races to outsmart a mysterious traveler forcing him to let a dangerous item slip onto a Christmas Eve flight.", category: "n-film.jpg"}, 

      {id : "10", url : "lucifer.jpg", modalBg : "lucifer-bg-modal.jpg", title : "lucifer-title.jpg", keywords : ["2021", "18+", "Show", "Fantasy"], description: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.", category: "n-series.jpg"}, 
    ]

  return (
    <>
      
      <div
        style={{marginTop : "3rem",
            backgroundImage: `linear-gradient(180deg, ${mainColor} 50%, rgba(0, 0, 0, 0.9) 100%), url(${mainBackground})`, 
          filter: "blur(32px)",
          height: "200vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
      
      <div className="main">
        <Navbar />
        <Carousel carousel_data={carousel_data} updateBackground={updateBackground} updateOverlay={updateOverlay}/>
        <EmailSub />
        <CardSlider cards = {cardsTrending} heading={"Trending Now"}/>
        <CardSlider cards = {cardsOnNetflix} heading={"Only On Netflix"}/>
      </div>

    </>
  );
};

export default TopHalf;
