import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

<<<<<<< HEAD
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
=======
import { UserContext } from "./contexts/user.context";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
>>>>>>> origin/lesson-10

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
=======
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
>>>>>>> origin/lesson-10
      </Route>
    </Routes>
  );

};
  
export default App;