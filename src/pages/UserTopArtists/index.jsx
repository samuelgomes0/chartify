import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skeleton from "../../components/Skeleton";
import { Container, ArtistItem, ArtistList } from "./style";

import handleUserTopArtists from "../../services/handleUserTopArtists";

export default function UserTopTracks() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleUserTopArtists(timeRange).then((response) => {
      setArtists(response);
      setIsLoading(false);
    });
  }, [timeRange]);

  return (
    <>
      <Header />
      <Container className="user_top_things">
        <div className="user_top_things__header">
          <h2>Top Artists</h2>
          <select
            name="time_range"
            id="time_range"
            onChange={(event) => setTimeRange(event.target.value)}
          >
            <option value="short_term">Last 4 weeks</option>
            <option value="medium_term">Last 6 months</option>
            <option value="long_term">All time</option>
          </select>
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
