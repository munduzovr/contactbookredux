import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getOneContact,saveChanges } from '../store/contactSlice';

const EditContact = () => {

    const { oneContact } = useSelector(state => state.contacts);

    const [ contact, setContact ]  = useState("");

    const dispatch = useDispatch();

    const {id} = useParams();//dispatch

    const navigate =useNavigate();

    useEffect(()=>{
        dispatch(getOneContact(id));
    },[])

    console.log(oneContact)

    useEffect(()=>{
        if(oneContact){
            setContact(oneContact)
        }
    }, [oneContact])

    return (
        <>
            {
        oneContact ?(
            <div>
                <h3>edit</h3>
                <input type="text" onChange={e => setContact({...contact, body: e.target.value })} value={contact.body} />
                <input type="text" onChange={e => setContact({...contact, image: e.target.value })} value={contact.image} />
                <input type="text" onChange={e => setContact({...contact, number: e.target.value })} value={contact.number} />
                <button onClick={()=> {
                    dispatch(saveChanges(contact));
                    navigate("/");
                }}>saveChanges</button>
           </div>
        ): (
            <h5>abc</h5>
        
            )}
        </>


    );
};

export default EditContact;