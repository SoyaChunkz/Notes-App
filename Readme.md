# HashNotes

HashNotes is a dynamic web application designed for personal and collaborative note-taking. It features a visually appealing and user-friendly interface, supporting seamless note management with advanced functionalities.

## Live Demo

Check out the live demo of HashNotes [here](https://hashnotes-eight.vercel.app/).

## Features

- **Responsive Design:** Fully responsive design with switchable dark and light themes.
- **User Authentication:** Secure login and signup with JSON Web Tokens (JWT).
- **Rich Text Editor:** Create and edit notes with a rich text editor.
- **Advanced Search:** Efficiently search notes with advanced functionality.
- **Tag Management:** Organize and manage notes with tags.
- **Pinned Notes:** Pin important notes for quick access.
- **Email Validation:** Ensure valid email addresses during registration.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Vercel
- **APIs:** RESTful APIs
- **Other:** CSS, JavaScript, Postman

## Screenshot

**Welcome to HashNotes**
![Home page](/media/home_page.png)

**Go to SignUp page and create a user**
![Create a user](/media/signup_page.png)

**This is the Dashboard where you can add, edit, delete, pin and view your notes**
![Dashboard](/media/dashboard.png)

**Add your first note here, feel free explore all the content options in the rich text editor**
![Add Notes](/media/add_notes.png)
![Note Added](/media/note_added.png)

**You can edit your notes anytime just with a double click**
![Edit Notes](/media/edit_notes.png)

**You switch between light and dark themes anytime just with a click**
![Switch Themes](/media/dark_mode.png)

## Getting Started

To get started with HashNotes locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SoyaChunkz/Notes-App.git
   ```
2. **Navigate from the project's root directory and install dependencies for both frontend and backend:**
- For frontend
    ```bash
   cd frontend/HashNotes
   npm install
   ```

- For backend
    ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables:**
- Create a .env file in the backend directory and add your environment variables such as MongoDB URI and JWT secret.
    ```bash
    ACCESS_TOKEN_SECRET=your_jwt_secret
    MONGODB_CONNECTION_STRING=your_mongodb_uri
    ```

- In the frontend add your backend's base url in constants.js
    ```bash
    cd frontend/HashNotes/src/utils/constants.js
    ```

    ```bash
    export const BASE_URL = "http://localhost:8000"
    ```


4. **Run the application:**
- Start the backend server:
    ```bash
    cd backend
    npm start
    ```

- Start the frontend server:
    ```bash
    cd frontend/HashNotes
    npm run dev
    ```

5. **Access the application:**
- Open your browser and go to http://localhost:5173 to see the application in action.

## Contribution

**Contributions are welcome! If you'd like to contribute to HashNotes, please follow these steps:**

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.

## Future Scope

Currently working on creating an extension for **HashNotes** which would allow users to add note from any webpage directly to to their HashNotes account.

## Contact
If you have any questions or suggestions, feel free to reach out:

Email: sameermaroof26@gmail.com
LinkedIn: [Connect here](https://www.linkedin.com/in/sameer-ahmad-maroof/)
