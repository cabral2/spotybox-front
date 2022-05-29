import AlbumCard from "../spot-album-card/albumCard";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  favoriteContainer: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1rem',
    marginLeft: '-3.5rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  }
});

export default function FavoriteAlbunsTab() {
  const classes = useStyles();
  const userFavoriteAlbuns = [
    {
      name: 'Stadium Arcadium',
      artist: 'Red hot Chili Peppers',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Clube da Esquina',
      artist: 'Milton Nascimento',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Heresia',
      artist: 'Djonga',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Manual',
      artist: 'Boogarins',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Manual',
      artist: 'Boogarins',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Manual',
      artist: 'Boogarins',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    },
    {
      name: 'Manual',
      artist: 'Boogarins',
      image: 'https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg',
    }
  ]


  return (
    <div className={classes.favoriteContainer}>
      {userFavoriteAlbuns.map((album, index) => (
        <AlbumCard
          key={index}
          title={album.name}
          albumName={album.artist}
          image={album.image}
        />
      ))}
    </div>
  );
}
