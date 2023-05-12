import generateRandomString from "../utils/generateRandomString";

export default function handleAuthorizationCode() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const scope = "user-read-private user-read-email user-top-read";
  const state = generateRandomString(16);
  const url = "https://accounts.spotify.com/authorize";

  const params = {
    response_type: "code",
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
  };

  const queryParams = new URLSearchParams(params).toString();

  window.location.href = `${url}?${queryParams}`;
}
