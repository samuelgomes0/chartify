import axios from "axios";

export async function fetchUserTopItems(type, timeRange) {
  const options = {
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/${type}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      limit: 48,
      time_range: timeRange,
    },
  };

  const { data } = await axios.request(options);

  return data;
}
