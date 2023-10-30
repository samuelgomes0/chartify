import axios from "axios";

export default async function getUserCurrentProfile() {
  const { data } = await axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  console.log(data);

  return data;
}
