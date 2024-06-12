import axios from "axios";

const apiServices = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`, // Thay thế bằng URL API của bạn
  timeout: 10000, // Thời gian chờ request (10 giây)
  headers: {
    "Content-Type": "application/json",
    // Bạn có thể thêm các headers mặc định khác nếu cần
  },
});

apiServices.interceptors.request.use(
  (config) => {
    // Làm gì đó trước khi request được gửi đi, ví dụ thêm token xác thực
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

apiServices.interceptors.response.use(
  (response) => {
    // Làm gì đó với dữ liệu response
    return response;
  },
  (error) => {
    // Xử lý lỗi response
    return Promise.reject(error);
  }
);

export default apiServices;
