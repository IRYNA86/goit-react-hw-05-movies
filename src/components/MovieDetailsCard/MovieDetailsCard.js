
function MovieDetailsCard({movies}) {
    const { id, poster_path, original_title, overview, vote_average
      // ,       genres 
    } =
    movies;
    console.log(movies)

  const baseImgURl = 'https://image.tmdb.org/t/p/w300';
    const defaultImgUrl =
    'https://st.depositphotos.com/1808604/1386/i/600/depositphotos_13860360-stock-photo-three-balalaika.jpg';
   
    return (
        <div key={id}>
          <img
            src={poster_path ? `${baseImgURl}${poster_path}` : `${defaultImgUrl}`}
            alt={original_title}
          />
          <div>
            <h2>{original_title}</h2>
            <p>
              User score:
               {vote_average}
            </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>

{/* {genres.map(genre => {
  <li key={genre.id}>
    <p>{genre.name}</p>
  </li>
})} */}
            </ul>
          </div>
        </div>
      );
}



export default MovieDetailsCard