import {createSlice} from '@reduxjs/toolkit'


const contactSlice = createSlice({
    name: 'contacts',
    initialState:{
        contacts: [],
        oneContact: []
    },

    //действие для state
    reducers:{
        addContact: (state,action) =>{
            console.log(state,action.payload);
            state.contacts.push(action.payload);
        },
        getOneContact:( state,action) =>{
            const oneContact = state.contacts.find( contact => contact.id == action.payload);
            state.oneContact = oneContact;
        },
        saveChanges: (state,action) =>{

            console.log(action.payload);

            state.contacts = state.contacts.map(contact =>{
                if(contact.id === action.payload.id){
                    return action.payload;
                }
                return contact;
            })
        },
        deleteContact:(state,action) =>{
            state.contacts =state.contacts.filter(contact => contact.id !== action.payload)
        }
    }


})
//передали addtodo
export const { addContact,changeTodoStatus,getOneContact,saveChanges ,deleteContact} = contactSlice.actions;
export default contactSlice.reducer;