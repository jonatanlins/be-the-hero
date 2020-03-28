import apisauce from "apisauce";

const baseURL = "http://localhost:5000";

const api = apisauce.create({ baseURL });

api.addRequestTransform(request => {
  const ongId = localStorage.getItem("ongId");

  if (ongId) {
    request.headers.authorization = ongId;
  }
});

export default api;
