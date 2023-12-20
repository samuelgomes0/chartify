import axios from "axios";

export default async function requestAccessToken(code) {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  const options = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
    },
  };

  const { data } = await axios.request(options);

  localStorage.setItem("token", data.access_token);
}
