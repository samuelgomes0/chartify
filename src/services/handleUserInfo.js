import axios from "axios";

export default async function handleUserInfo() {
  const { data } = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return data;
}
