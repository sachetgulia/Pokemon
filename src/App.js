import React , {useState , useEffect} from 'react'
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon]= useState(["charmander", "pikachu"]);
  const [currUrl, setCurrUrl]= useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl , setNextUrl] = useState("")
  const [prevUrl , setPrevUrl] = useState("")
  const [loading ,setLoading] = useState(true)

  useEffect(() => {
    let cancel
    axios.get(currUrl,{
      cancelToken : new axios.CancelToken(c=> cancel = c)
    })
  .then(res=> {
    setLoading(false)
    setPokemon(res.data.results.map(p=>p.name))
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
  })
   return () =>  cancel() 
  },[currUrl])

  function gotoNextPage(){
    setCurrUrl(nextUrl)
  }
  function gotoPrevPage(){
    setCurrUrl(prevUrl)
  }
  if (loading) return "loading..."
  return (
    <>
      < PokemonList pokemon={pokemon} />
      <Pagination gotoNext={nextUrl ? gotoNextPage : null} gotoPrev={prevUrl ? gotoPrevPage :null}/>
    </>  
  );
}

export default App;
