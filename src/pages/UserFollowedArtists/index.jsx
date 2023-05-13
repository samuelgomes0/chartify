import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skeleton from "../../components/Skeleton";
import { Container, ArtistItem, ArtistList } from "./style";

import handleUserFollowedArtists from "../../services/handleUserFollowedArtists";

export default function UserTopTracks() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleUserFollowedArtists().then((response) => {
      console.log(response);
      setArtists(response);
      setIsLoading(false);
    });
  });

  return (
    <>
      <Header />
      <Container className="user_top_things">
        <div className="user_top_things__header">
          <h2>Followed Artists</h2>
        </div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ArtistList className="artist_list">
            {artists.map((artist, index) => (
              <ArtistItem key={index} className="artist_list__item">
                <div className="image_container">
                  <img
                    src={artist.images[0].url}
                    alt={artist.name}
                    onClick={() => window.open(artist.external_urls.spotify)}
                    title={artist.name}
                  />
                </div>
                <div className="artist_info">
                  <div className="info_container">
                    <span className="track_number">{index + 1}.</span>
                    <h3
                      onClick={() => window.open(artist.external_urls.spotify)}
                      title={artist.name}
                    >
                      {artist.name}
                    </h3>
                  </div>
                  <p className="artist_genre">{artist.genres[0]}</p>
                </div>
              </ArtistItem>
            ))}
          </ArtistList>
        )}
      </Container>
      <Footer />
    </>
  );
}
