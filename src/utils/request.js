import axios from "axios";
import { TOKEN_CYBERSOFT } from "./const";
const BASE_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/";
const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { TokenCybersoft: TOKEN_CYBERSOFT },
});

const GET_ALL_MOVIE = (groupId) => {
  return AXIOS_INSTANCE.get(`/LayDanhSachPhim?maNhom=${groupId}`);
};
const GET_SINGLE_MOVIE = (movieId) => {
  return AXIOS_INSTANCE.get(`/LayThongTinPhim?MaPhim=${movieId}`);
};
export { AXIOS_INSTANCE, GET_ALL_MOVIE, GET_SINGLE_MOVIE };
