# 🩺 Doctor Appointment Booking System (MERN Stack)

A **full-stack doctor appointment booking application** built with the **MERN stack** — **MongoDB, Express.js, React.js, and Node.js**. It allows Patients to book appointments, Doctors to manage their work, and Admins to oversee the entire system with secure authentication and online payment integration.

---

## 📌 Project Overview

This application is a complete healthcare appointment management platform where users can:

- **Patients** register/login, search doctors, book/cancel appointments, and make payments.
- **Doctors** log in, view/manage appointments and access statistics.
- **Admins** manage doctors, appointments, and users through a dashboard.

---

## ✨ Features

### Patient Features
- Register & Login
- Book/Cancel Appointments
- View Appointment History
- Online Payment Support

### Doctor Features
- Login System
- View Upcoming Appointments
- Manage Profile
- Earnings & Analytics

### Admin Features
- Add/Edit/Delete Doctors
- Manage Users & Appointments
- Dashboard with System Stats

### Other Features
- Role-Based Authentication (JWT)
- RESTful API Architecture
- Responsive UI with Tailwind CSS
- Database Modeling with MongoDB/Mongoose

---

## 🧩 Technologies Used

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| React.js | Node.js | MongoDB | JWT |
| Tailwind CSS | Express.js | Mongoose | bcrypt |
| Axios | REST APIs | | |

---

## 🛠️ API Endpoints

### 🔐 Authentication & User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/auth/register` | Register new patient user |
| **POST** | `/api/auth/login` | Login patient |
| **POST** | `/api/auth/logout` | Logout / clear token |
| **GET**  | `/api/auth/me` | Get logged-in user details |
| **PUT**  | `/api/auth/update` | Update user profile |

---

### 👤 Patient APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/patients` | Get all patients (admin) |
| **GET** | `/api/patients/:id` | Get patient by ID |
| **PUT** | `/api/patients/:id` | Update patient info |
| **DELETE** | `/api/patients/:id` | Remove patient (admin) |

---

### 👨‍⚕️ Doctor APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/doctors` | Add doctor (admin) |
| **GET**  | `/api/doctors` | Get list of all doctors |
| **GET**  | `/api/doctors/:id` | Get doctor profile |
| **PUT**  | `/api/doctors/:id` | Update doctor details |
| **DELETE** | `/api/doctors/:id` | Delete doctor (admin) |
| **GET**  | `/api/doctors/available` | Get available doctors |
| **GET**  | `/api/doctors/specialty/:specialty` | Filter doctors by specialty |

---

### 📅 Appointment APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/appointments` | Book appointment |
| **GET**  | `/api/appointments` | Get all appointments |
| **GET**  | `/api/appointments/:id` | Get appointment by ID |
| **GET**  | `/api/appointments/patient/:patientId` | Patient appointments |
| **GET**  | `/api/appointments/doctor/:doctorId` | Doctor appointments |
| **PUT**  | `/api/appointments/:id` | Update appointment status |
| **DELETE** | `/api/appointments/:id` | Cancel appointment |

---

### 💳 Payment APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/payments/checkout` | Initiate payment |
| **POST** | `/api/payments/confirm` | Confirm payment status |
| **GET**  | `/api/payments/user/:userId` | User payment history |

---

### 📊 Admin & Dashboard APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/admin/stats` | System statistics |
| **GET** | `/api/admin/users` | All users list |
| **GET** | `/api/admin/doctors` | All doctors list |
| **GET** | `/api/admin/appointments` | All appointments list |

---

## 📁 Folder Structure

```
doctor-appointment-system/
│
├── backend/
│   ├── controllers/        
│   │   ├── authController.js
│   │   ├── patientController.js
│   │   ├── doctorController.js
│   │   ├── appointmentController.js
│   │   └── paymentController.js
│   │
│   ├── middleware/         
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/             
│   │   ├── User.js
│   │   ├── Doctor.js
│   │   ├── Patient.js
│   │   ├── Appointment.js
│   │   └── Payment.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── patientRoutes.js
│   │   ├── doctorRoutes.js
│   │   ├── appointmentRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── utils/
│   └── server.js          
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.css
│   │   └── index.js
│   │
│   └── tailwind.config.js
│
├── .env                    
├── package.json
└── README.md
```

