import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser,setCurrentUser] = useState(null);
  const value ={ currentUser, setCurrentUser }; //Value is use to allow the children to change the state
  
  useEffect(() =>{
    const unsubscribe = onAuthStateChangedListener(()=> {});
    if(user){
      createUserDocumentFromAuth(user);
    }
    setCurrentUser(user); 
    return unsubscribe;
  },[])
  // All children that get wrap by UserProvider will get access to the value prop of 
  // UserContext.provider 
  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}