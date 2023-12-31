export const loginreducer=(state,action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, token:action.token}  
            
        case "LOGOUT":
            return{...state,token:null}

        
        default:
            return state;
    }
}
