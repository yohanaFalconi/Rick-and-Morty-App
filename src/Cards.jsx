import {useState, useEffect } from 'react'
import Characters from './Characters'
import './index.css';


const Cards = () => {
    const [ characters, setCharacters] = useState([]);
    const initUrl = 'https://rickandmortyapi.com/api/character';
    const fetchCharacters = (initUrl) => {
        fetch(initUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data.results);
          setCharacters(data.results)})
        .catch(err => console.error(err));
    }
    
    
    useEffect(() =>{
        fetchCharacters(initUrl)
    }, [])


    return (
      <>
        <div className="container bg-dark mt-5">
          <section className="row justify-content-center align-items-center">
            <Characters features={characters}/>
          </section>
        </div>
      </>
    )
};
  
export default Cards;