import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Componets */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';


/* Pages */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/User/Profile';
import MyPets from './components/pages/Pet/MyPets';
import AddPet from './components/pages/Pet/AddPet';
import EditPet from './components/pages/Pet/EditPet';
import PetDetails from './components/pages/Pet/PetDetails';
import MyAdoptions from './components/pages/Pet/MyAdoptions';

/* Context */
import {UserProvider} from './context/UserContext';



function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
          <Container>
            <Routes>
              <Route  exact path="/login" element={<Login/>} />
              <Route  exact path="/register" element={<Register/>} />
              <Route  exact path="/user/profile" element={<Profile/>} />
              <Route  exact path="/pet/mypets" element={<MyPets/>} />
              <Route  exact path="/pet/add" element={<AddPet/>} />
              <Route  exact path="/pet/edit/:id" element={<EditPet/>} />
              <Route  exact path="/pet/myadoptions" element={<MyAdoptions/>} />
              <Route  exact path="/pet/:id" element={<PetDetails/>} />
              <Route  exact path="/" element={<Home/>} />
            </Routes>
          </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
