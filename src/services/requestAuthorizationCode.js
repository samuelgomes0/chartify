import generateRandomString from "../utils/generateRandomString";

export default async function requestAuthorizationCode() {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const scopes = "user-read-private user-read-email";
  const url = "https://accounts.spotify.com/authorize";

  const params = {
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    state: generateRandomString(),
    scope: scopes,
  };

  window.location.href = `${url}?${new URLSearchParams(params)}`;
}
