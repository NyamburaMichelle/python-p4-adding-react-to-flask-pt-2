import React, { useEffect , useState} from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Check the console for a list of movies!</h1>
      <ul>
        { movies && movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      
    </>
  );
}

export default App;