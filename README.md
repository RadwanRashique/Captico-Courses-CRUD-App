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

## Token Usage and Session Management

- **Token Usage**: JSON Web Tokens (JWTs) are used for authentication. Upon successful login, a JWT is generated and sent to the client, which is then stored in the local storage.
- **Session Management**: Protected routes are created that require a valid JWT to access. If the user is not authenticated, they are redirected to the login page. Public routes, on the other hand, are accessible without authentication.

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
- ## How to Use 🚀

1. Clone the git repository.
2. Install dependencies by running `npm install` in the root directory.
3. Set up environment variables by creating a ##########`.env`######### file in the root directory with the following content:
4. .env   file:
**PORT=5000**
**MONGODB_URL=mongodb+srv://your-mongodb-connection-string**
**SECRET=your-secret-key**
**CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name**
**CLOUDINARY_API_KEY=your-cloudinary-api-key**
**CLOUDINARY_API_SECRET=your-cloudinary-api-secret**


5. Start the backend server by running `npm start` in the root directory.
6. Navigate to the client directory in a new terminal by running `cd client`.
7. Install frontend dependencies by running `npm install`.
8. Start the frontend server by running `npm start`.



### Workflow

Here's a video demonstrating the workflow:

[![video](http://img.youtube.com/vi/tIAc2nEE0hc/0.jpg)](https://youtu.be/tIAc2nEE0hc?si=f5t77rd3u6hQkWR5)



### code explanation
[![video](https://img.youtube.com/vi/3pwnb3Isdnc/0.jpg)](https://youtu.be/3pwnb3Isdnc?si=aVUd5u8oGlyk77dA)



## Usage Instructions 📋

- Sign up for a new account by providing the required details, including username, email, phone number, and password. Make sure to follow the validation rules provided.
- Log in with your registered email and password.
- Once logged in, you will be redirected to the course list pannel.
- On the course list, you can see a header component with logo,userName, add task button and logout  button.
- add a new coures .
- edit the existing if needed
- delete the existing if needed
## 🌟 Thank you for checking out my project! 🌟
