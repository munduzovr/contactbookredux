import React , {useState}from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';

const AddContact = () => {

    const [addName,setName] = useState("");
    const [addImage,setImage] = useState("");
    const [addNumber,setNumber] = useState("");

    const dispatch = useDispatch();

    function createContact(){
        if(!addName.trim() || !addImage.trim() || !addNumber.trim())
        return alert("empty!")

        let newTodo = {
            id: Date.now(),
            body: addName,
            image: addImage,
            number: addNumber,
            status: false
        }

        dispatch(addContact(newTodo));

        setName("");
        setImage("");
        setNumber("");

    }

    return (
        <div>
            <h3>Create Contact</h3>
            <input type="text" placeholder='name' onChange={e => setName(e.target.value)} value={addName}/>
            <input type="text" placeholder='URL' onChange={e => setImage(e.target.value)} value={addImage}/>
            <input type="text" placeholder='number' onChange={e => setNumber(e.target.value)} value={addNumber}/>
            <button onClick={createContact}>Create</button>
        </div>
    );
};

export default AddContact;