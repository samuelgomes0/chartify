import axios from "axios";

export default async function handleUserFollowedArtists() {
  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/following?type=artist&limit=30
    `,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data.artists.items;
}
