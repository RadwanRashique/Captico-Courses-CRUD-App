# MERN CRUD Course Manager 🎓📚

🚀 Welcome to MERN CRUD Course Manager! 🚀

This project allows you to seamlessly add, edit, and delete courses with MongoDB, Express.js, React.js, and Node.js. 

## Backend Setup

### Frameworks and Libraries

- **Express**: Framework for Node.js
- **Mongoose**: For object data modeling
- **CORS**: To connect frontend and backend
- **Express.json**: To parse JSON data
- **Express.urlencoded**: To parse URL-encoded data
- **Bcrypt**: For password security 🔒
- **Jsonwebtoken**: JWT for token creation and authentication 🎫
- **Multer**: For multipart data uploading 📁
- **Dotenv**: To access environment variables
- **Cloudinary**: For storing images in the cloud ☁️
- **Nodemon**: For auto-restart of Node.js ♻️

### Page Setups

#### Files
- **server.js**: Root file
- **.env**: Environment variables
- **.gitignore**: To untrack certain files and folders while pushing to git

#### Folders
- **Model**: MongoDB schema setup
- **Routes**: Set all routes in one place
- **Controllers**: Route handler functions
- **Config**: Hold configuration files
- **Middleware**: Hold middleware files

## Frontend Setup

### Extra Libraries

- **React Router DOM**: For route handling
- **Axios**: To make HTTP requests
- **React Hot Toast**: To show toast notifications 🍞
- **React Icons**: To get React icons

### Folders and Files

#### Folders
- **Components**: Reusable UI components
- **Pages**: Set pages for UI
- **Helper**: Set interceptor to centralize Axios setup
- **Util**: Set route setup in a clean manner
- **Config**: Set base URL in a separate area

## Technologies Used

- CSS5: For styling
- JavaScript: For functionalities
- React.js: JavaScript library for building fast and scalable UI
- Node.js: Backend runtime environment for JavaScript
- MongoDB: NoSQL database
- Express.js: Backend framework for Node.js

## API Overview

### Restful APIs HTTP Methods

1. **POST**: For registration (create)
2. **POST**: For login (verify user identity)
3. **GET**: To display user name on header (read)
4. **POST**: To add a course (create)
5. **GET**: To display course details in dashboard UI (read)
6. **PUT**: To edit course details (edit)
7. **DELETE**: To delete a course from the database (delete)

## UI Setup

- **SignUp**: For registration (name, email, phone, password, confirmPassword)
- **SignIn**: For login (email, password)
- **Header**: For navigation     Contents  -_-_-___- (company icon,userName, addCourses, logout)
- **CourseList**: To list course details    _--_--_____----  (table with course data with edit and delete button)
- **AddCourse**: To add courses to the database (courseName, courseImage, courseDescription, price)
- **EditCourse**: To edit courses (courseName, courseImage, courseDescription, price)

## Database Collections

- **UserModel**: To store user details (fields: name, email, phone, password)
- **CourseModel**: To store course details (fields: courseName, courseImage, courseDescription, price)

## 🌟 Thank you for checking out my project! 🌟
