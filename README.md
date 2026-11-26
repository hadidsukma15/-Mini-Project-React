# DibiEdu LMS — Mini Project React

Aplikasi frontend Learning Management System (LMS) berbasis React yang terhubung
dengan [DummyJSON API](https://dummyjson.com/docs). Project ini dibuat untuk
memenuhi Mini Project Full Stack Web Development — React (periode React
Fundamentals sampai Routing, Forms, Authentication & Authorization).

## Teknologi & Library

- **React 19** — library UI berbasis component.
- **Vite 8** — build tool & dev server.
- **React Router DOM** — routing (`/`, `/users/:id`, `/login`, `/register`, `/dashboard`).
- **Tailwind CSS v4** — styling component-based dan responsive.
- **DummyJSON API** — sumber data user, CRUD, dan authentication.
- **Oxlint** — linting.
- **Plus Jakarta Sans** — font lokal pada `src/assets/fonts`.

## Fitur

### Requirement utama

- Menampilkan daftar user/siswa dari API pada halaman home.
- Total data siswa dibatasi 50 user.
- Halaman detail user (`/users/:id`).
- Pagination pada daftar user di halaman home (8 data per halaman).
- Desain responsive untuk desktop, tablet, dan mobile.
- Loading, empty state, error handling, dan tombol coba lagi pada request API.

### Fitur bonus

- Register akun (`/register`) memanggil endpoint `POST /users/add`.
- Login (`/login`) memanggil `POST /auth/login` dan menyimpan token.
- Protected route: `/dashboard` dan `/dashboard/users/:id`.
- Menampilkan data user di dashboard dengan token pada sesi login.
- Logout dan persistensi sesi menggunakan `localStorage`.
- CRUD data siswa di dashboard:
  - Create (`POST /users/add`)
  - Read (`GET /users`)
  - Update (`PUT /users/:id`)
  - Delete (`DELETE /users/:id`)

### Implementasi React

- Context + custom hook untuk authentication (`AuthContext`, `useAuth`).
- Custom hook data fetching: `useUsers` (pagination) dan `useUser` (detail).
- Reusable component: `Button`, `Input`, `Alert`, `Pagination`, `UserCard`,
  `Navbar`, `UserForm`, `ProtectedRoute`.
- Dynamic styling berdasarkan state/data (role badge, status active, error input,
  tombol disabled, dan conditional rendering).
- Form terkontrol dengan validasi sisi client.

## Akun Demo

Login menggunakan akun DummyJSON:

| Username | Password   |
| -------- | ---------- |
| emilys   | emilyspass |

Akun hasil register juga dapat langsung dipakai login (disimpan pada
`localStorage` sebagai simulasi karena DummyJSON tidak mempersistensi user baru).

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite (default `http://localhost:5173`).

Perintah lain:

```bash
npm run build     # build production
npm run preview   # preview hasil build
npm run lint      # menjalankan Oxlint
```

## Endpoint API yang Digunakan

Base URL: `https://dummyjson.com`

- `GET /users?limit=8&skip=0` — daftar user dengan pagination.
- `GET /users/:id` — detail user.
- `POST /users/add` — tambah user (register & CRUD create).
- `PUT /users/:id` — update user.
- `DELETE /users/:id` — hapus user.
- `POST /auth/login` — login dan mendapatkan access token.

## Struktur Folder

```text
src/
├── api/
│   ├── client.js        # fetch wrapper + base URL
│   ├── auth.js          # endpoint auth
│   └── users.js         # endpoint users & CRUD
├── components/
│   ├── ui/              # reusable UI (Button, Input, Alert, Pagination, dll.)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeatureSection.jsx
│   ├── StudentDirectory.jsx
│   ├── UserForm.jsx
│   ├── ProtectedRoute.jsx
│   └── ScrollManager.jsx
├── context/
│   ├── auth-context.js
│   └── AuthContext.jsx
├── hooks/
│   ├── useAuth.js
│   ├── useUsers.js
│   └── useUser.js
├── pages/
│   ├── HomePage.jsx
│   ├── UserDetailPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── DashboardPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx
└── main.jsx
```
