import axios from "axios";

export default async function fetchCurrentUserProfile() {
  const options = {
    method: "GET",
    url: `https://api.spotify.com/v1/me`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
}
