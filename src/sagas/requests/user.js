import axios from "axios";

export function requestGetUser(id) {
  console.log("Handler, ", id);
  return axios.request({
    method: "get",
    url:
      "https://my-json-server.typicode.com/tdingeniero/react-redux/users/" + id,
  });
}
