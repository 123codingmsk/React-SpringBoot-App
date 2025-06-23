# Employee Management System

A full-stack Employee Management System built with **React** (frontend) and **Spring Boot** (backend), using **MySQL** for data storage.

---

## 📁 Project Structure

```
ReactSpringBoot/
├── client/ # React frontend
└── server/ # Spring Boot backend
```

---

## 🚀 Features

- Add new employees
- Get employee by email
- View all employees
- Edit employee details
- Delete employee by email

---

## 🛠️ Technologies Used

- **Frontend**: React + Axios + React Router
- **Backend**: Spring Boot + REST APIs
- **Database**: MySQL
- **Build Tool**: Maven

---

## ⚙️ Prerequisites

- Node.js and npm
- Java JDK 17+ (you’re using JDK 21)
- Maven
- MySQL

---

## 🧑‍💻 Getting Started

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/123codingmsk/employee-management-system.git
cd employee-management-system
```

### 🔹 2. Setup Backend (Spring Boot)

```bash
cd server
# Configure your MySQL DB in application.properties
mvn spring-boot:run
```

### 🔹 3. Setup Frontend (React)

```bash
cd ../client
npm install
npm run dev
```

Open your browser at: http://localhost:5173

### 🧪 API Endpoints

```
| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| POST   | `/employee/add`            | Add new employee         |
| GET    | `/employee/get/{email}`    | Get employee by email    |
| GET    | `/employee/get`            | Get all employees        |
| PUT    | `/employee/edit/{email}`   | Update employee by email |
| DELETE | `/employee/delete/{email}` | Delete employee by email |
```

Learn and Enjoy 
-@123codingmsk

