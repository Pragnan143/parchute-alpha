import "./App.css";
import HomePage from "./Pages/HomePage";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Signup />
      <Login />
    </div>
  );
}

export default App;
