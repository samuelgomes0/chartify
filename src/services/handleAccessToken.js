import axios from "axios";

export default async function handleAccessToken(code) {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const url = "https://accounts.spotify.com/api/token";

  const params = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
    clientId: clientId,
    clientSecret: clientSecret,
  };
  const headers = {
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = await axios.post(
    url,
    new URLSearchParams(params).toString(),
    headers
  );

  const { access_token } = response.data;

  return access_token;
}
