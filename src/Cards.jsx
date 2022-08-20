import {useState, useEffect } from 'react'
import Characters from './Characters'


const Cards = () => {
    const [ characters, setCharacters] = useState([]);
    const initUrl = 'https://rickandmortyapi.com/api/character';
    const fetchCharacters = (initUrl) => {
        fetch(initUrl)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(err => console.error(err));
    }
    
    
    useEffect(() =>{
        fetchCharacters(initUrl)
    }, [])


    return (
      <>
        <div className="container bg-blue"></div>
        <Characters features={characters}/>
      </>
    )
};
  
export default Cards;