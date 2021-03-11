const stateDault = {
    arrContact : [{
        name: "Nguyễn văn A",
        number: "0979955925",
        email: "abc@123.com",
        messages: "hello"
    }],
}

export const FormReducers =(state = stateDault, action) => {
    switch (action.type) {
        case "NEW_CONTACT":{
            const updateContact = [...state.arrContact,action.option]
            state.arrContact = updateContact;
            console.log(state.arrContact)
            return {...state}
        }break;
        default: {
            return {...state}
        }
    }
}


