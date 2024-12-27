import BelowHalf from "./BelowHalf"
import TopHalf from "./TopHalf"

function App() {

  const carousel_data = [
    {url : "carousel1.jpg", title : "Unlimited movies, TV shows, and more.", price : "Starts at Rs 250. Cancel anytime."}, 
    {url : "carousel2.jpg", category: "n-film.jpg", name : "do-patti-title.jpg", keywords : ["2024", "16+", "Movie", "Thrillers", "Mysteries", "Dramas"], description : "A puzzling investigation leads a no-nonsense cop down a dark path involving the vicious rivalry between twin sisters and the volatile man they both love."}, 
    {url : "carousel3.jpg", category: "n-series.jpg", name : "kali-kali-ankhen-title.jpg", keywords : ["2024", "16+", "Show", "Thrillers", "Romance"], description : "Relentlessly pursued by a powerful politician's daughter who will do anything to make him hers, a man slips down a dark, risky path to reclaim his life."}
  ]

  return (
    <>
      <TopHalf carousel_data={carousel_data}/>
      <BelowHalf />
    </>
  )
}

export default App
