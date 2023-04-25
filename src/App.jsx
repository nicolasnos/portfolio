import { useEffect, useState } from "react";
import Home from "./Components/Home";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "usuario1" && password !== "passwordSegura") {
      console.log("something went wrong");
    } else {
      setLog(true);
    }
  };
  return (
    <>
      {!log ? (
        <>
          <main>
            {!name ? (
              <div className="saludo">
                {" "}
                <h2>¡Welcome to my portfolio!</h2>{" "}
              </div>
            ) : (
              <div className="saludo">
                <h2>¡Welcome {name}!</h2>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Write your name
                <input
                  type="text"
                  id="name"
                  placeholder="Write your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="pasW">
                Write the right password
                <input
                  id="pasW"
                  type="password"
                  placeholder="Write the right password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">LogIn</button>
            </form>
          </main>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
