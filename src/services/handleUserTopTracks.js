import axios from "axios";

export default async function handleUserTopTracks(timeRange) {
  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data.items;
}
