import "./App.css";
import HomePage from "./Pages/HomePage";
import Signup from "./Components/SignUp";

function App() {
  return (
    <div className="App">
       <HomePage /> 
       {/* <Signup/> */}



    <div className="App overflow-x-hidden">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element= {<CoursePage />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={ <SignUp/> } />
          </Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;





