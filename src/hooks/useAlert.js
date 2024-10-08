import React, {useEffect, useState} from "react";

function useAlert(){
    const [showAlert, setShowAlert] = useState(false);
    
    useEffect(() => {
        if(showAlert)
            alert("HelloWorld")
    })

   
    
    return([showAlert, setShowAlert])
} 
export default useAlert; 