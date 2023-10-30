import axios from "axios";

export default async function requestAccessToken(code) {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const url = "https://accounts.spotify.com/api/token";

  const params = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
  };
  const headers = {
    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const { data } = await axios.post(url, new URLSearchParams(params), {
    headers,
  });

  localStorage.setItem("token", data.access_token);
}
