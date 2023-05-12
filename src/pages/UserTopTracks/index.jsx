import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skeleton from "../../components/Skeleton";
import { Container, TrackList, TrackItem } from "./style";

import handleUserTopTracks from "../../services/handleUserTopTracks";

export default function UserTopTracks() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleUserTopTracks(timeRange).then((response) => {
      setTracks(response);
      setIsLoading(false);
    });
  }, [timeRange]);

  return (
    <>
      <Header />
      <Container className="user_top_things">
        <div className="user_top_things__header">
          <h2>Top Tracks</h2>
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
          <TrackList className="track_list">
            {tracks.map((track, index) => (
              <TrackItem key={track.id} className="track_list__item">
                <div className="image_container">
                  <img
                    src={track.album.images[0].url}
                    alt={track.name}
                    onClick={() =>
                      window.open(track.external_urls.spotify, "_blank")
                    }
                    title={`${track.artists[0].name} - ${track.name}`}
                  />
                </div>
                <div className="track_info">
                  <div className="info_container">
                    <span className="track_number">{index + 1}.</span>
                    <h3
                      onClick={() => window.open(track.external_urls.spotify)}
                      title={track.name}
                    >
                      {track.name}
                    </h3>
                  </div>
                  <p
                    className="artist_name"
                    onClick={() =>
                      window.open(
                        track.artists[0].external_urls.spotify,
                        "_blank"
                      )
                    }
                  >
                    {track.artists[0].name}
                  </p>
                </div>
              </TrackItem>
            ))}
          </TrackList>
        )}
      </Container>
      <Footer />
    </>
  );
}
