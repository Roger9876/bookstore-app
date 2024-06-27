# Bookstore Web Application

This is a fullstack Bookstore web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse and purchase books, with features like user authentication and protected routes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MongoDB installed and running on your machine or accessible via MongoDB Atlas

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Roger9876/bookstore-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd bookstore-app
   ```

3. **Install server dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Install client dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following:

   ```env
   PORT=4001
   MONGODB_URI=your_mongodb_connection_string
   ```

6. **Run the development server:**

   Open two terminal windows or tabs:

   - In the first terminal, run the backend server:

     ```bash
     cd backend
     npm start
     ```

   - In the second terminal, run the frontend development server:

     ```bash
     cd frontend
     npm run dev
     ```

## Features

- **Bookstore App:**
  - Users can browse and purchase books.
  - User authentication for login and registration.

- **Backend:**
  - Built with Node.js and Express.js.
  - Uses MongoDB for the database.

- **Frontend:**
  - Developed with React.js.
  - Styled using Tailwind CSS.
  - Basic components are imported from the Daisy UI library.

- **Protected Routes:**
  - Certain routes, like the Explore page, are protected based on user authentication.

- **Additional Packages:**
  - Axios for making HTTP requests.
  - `react-hot-toast` for notifications.
  - `react-slick` for carousels and slides.

## Contact

For any inquiries, please contact:

- Name: Raviraj Khopade
- Email: <rmkhopade21@gmail.com>

---

Feel free to contribute to this project by opening issues and submitting pull requests. Happy coding!
