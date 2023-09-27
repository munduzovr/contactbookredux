import Navbar from "./components/Navbar";
import {Routes, Route,} from "react-router-dom"
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ContactList from "./components/ConactList";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />}/>
          <Route path="/add" element={<AddContact />}/>
          <Route path="/edit/:id" element={<EditContact />}/>
      </Routes>
    </>

  );
}

export default App;
