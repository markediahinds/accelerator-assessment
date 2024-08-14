function Anime({ anime }) {
  return (
    <div className="anime-item">
      <p>{anime.name}</p>
      <p>{anime.description}</p>
    </div>
  );
}

export default Anime;
