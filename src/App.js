import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import AnimaeCard from './AnimaeCard';

const API_URL = "https://www.omdbapi.com?apikey=b2fa1d4e";

function App() {

  const [animaes, setAnimaes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setAnimaes(data.Search);
  }

  useEffect(() => {
    searchMovies('Death Note');
  }, []);

  return (
    <div className="app">
      <h1>ANIMAEVERSE</h1>
      <div className='search'>
        <input placeholder='Search for Animaes' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}></input>
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
      </div>

      {
        animaes.length > 0
          ? (
            <div className='container'>
              {animaes.map((animae) => (
                <AnimaeCard animae={animae} />
              ))}
            </div>
          ) : 
          (
            <div className='container'>
              <h2>No Animaes Found</h2>
            </div>
          )
        
      }
    </div>
  );
}

export default App;
