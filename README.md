# BMI-Tracker

# Tài liệu Dự án Máy tính BMI

## 1. Tổng quan Dự án

Tài liệu này mô tả cấu trúc và quy trình phát triển cho ứng dụng web Máy tính BMI (Chỉ số Khối cơ thể). Ứng dụng sẽ có thiết kế responsive với cả thành phần frontend và backend, cho phép người dùng tính toán BMI, lưu kết quả và xem lịch sử BMI của họ trên biểu đồ.

## 2. Cấu trúc Dự án

```
bmi-calculator/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 3. Kiến trúc

Dự án tuân theo kiến trúc client-server với frontend và backend là các ứng dụng riêng biệt giao tiếp thông qua API RESTful.

### 3.1 Frontend (React)

- Chạy trên cổng 3000 (mặc định cho Create React App)
- Gửi yêu cầu đến API Backend
- Xử lý và hiển thị dữ liệu nhận được từ API

### 3.2 Backend (Node.js + Express)

- Chạy trên cổng 5000
- Xử lý yêu cầu từ Frontend
- Tương tác với cơ sở dữ liệu (MongoDB)
- Trả về phản hồi JSON cho Frontend

## 4. Endpoints API

```
POST /api/bmi
  - Nhận dữ liệu chiều cao và cân nặng từ Frontend
  - Tính toán BMI
  - Lưu vào cơ sở dữ liệu
  - Trả về kết quả BMI cho Frontend

GET /api/bmi
  - Lấy lịch sử BMI từ cơ sở dữ liệu
  - Trả về danh sách các bản ghi BMI cho Frontend
```

## 5. Quy trình Phát triển

### 5.1 Phát triển Backend

1. Thiết lập máy chủ Express
2. Cấu hình kết nối MongoDB
3. Định nghĩa mô hình BMI
4. Tạo các bộ điều khiển cho logic nghiệp vụ
5. Định nghĩa các đường dẫn API
6. Cấu hình CORS cho truy cập Frontend

### 5.2 Phát triển Frontend

1. Tạo giao diện người dùng với React
2. Triển khai các cuộc gọi API sử dụng Axios hoặc Fetch API
3. Quản lý trạng thái và hiển thị dữ liệu
4. Tạo biểu đồ lịch sử BMI sử dụng Recharts
5. Tạo bảng hiển thị các lịch sử BMI, có thể các nút sửa, xóa, cập nhật lịch sử BMI

### 5.3 Tích hợp và Kiểm thử

1. Chạy Frontend và Backend đồng thời
2. Thực hiện kiểm thử tính năng đầu-cuối

## 6. Công nghệ

- Frontend: React, Axios (cho cuộc gọi API), Recharts (cho vẽ biểu đồ)
- Backend: Node.js, Express, MongoDB (với Mongoose ORM)
- API: RESTful API với JSON

## 7. Quy trình Phát triển

1. Phát triển Backend

   - Tạo các endpoints API
   - Kiểm thử API sử dụng công cụ như Postman

2. Phát triển Frontend

   - Phát triển giao diện người dùng
   - Kết nối với API Backend
   - Xử lý và hiển thị dữ liệu

3. Tích hợp và Kiểm thử
   - Chạy cả Frontend và Backend
   - Thực hiện kiểm thử đầu-cuối

## 8. Kết luận

Cấu trúc dự án này cung cấp một kiến trúc rõ ràng, dễ bảo trì và có khả năng mở rộng. Sự tách biệt của Frontend và Backend cho phép phát triển độc lập trong khi vẫn đảm bảo giao tiếp hiệu quả thông qua API đã định nghĩa.
