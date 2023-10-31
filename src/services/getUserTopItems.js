import axios from "axios";

export default async function getUserTopItems(type, timeRange) {
  const url = `https://api.spotify.com/v1/me/top/${type}`;
  const params = {
    limit: 30,
    time_range: timeRange,
  };
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const { data } = await axios.get(url, { params, headers });

  return data;
}
