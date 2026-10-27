
import { useState, useEffect, useRef } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState("");

  const fileRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  function handleImage() {
    const file = fileRef.current.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Task 6</h1>

      <h2>Image Upload</h2>

      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        hidden
        onChange={handleImage}
      />

      <button onClick={() => fileRef.current.click()}>
        {image ? "Change Image" : "Upload Image"}
      </button>

      <br />
      <br />

      {image && (
        <img
          src={image}
          alt="Preview"
          width="200"
        />
      )}

      <hr />

      <h2>User Details</h2>

      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
