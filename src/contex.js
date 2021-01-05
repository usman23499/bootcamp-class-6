import React,{ createContext, useReducer } from "react"
import Trasictionreducer  from "./reducer";
const  trasication = [
    {
        ammount: 500, desc: "Cash"
    },
    {
        ammount: -40, desc: "Book"
    },
]

export const Trasictioncontex=createContext(trasication);
// neche wala function childern render karta hai
// childen mean is context ke sare child render ho jate hain
// render chalta hai easy word
// ye neche wala function use in app js q ke ye donon cheez show and add ke lea hai
export const Transictionprovider = ({children})=>{

    let [state,dispatch] = useReducer(Trasictionreducer,trasication);
    // ye reducer ko value send kare ga
    
    function addTransiction(transobj){
        // console.log(transobj);
        dispatch({
            // newdat use karen ge q ke reducer main newdata ka name dea hai hum ne new data ka
            
            type:"ADD-TRANSICTION",
            newdata:{
                
                ammount: transobj.ammount,
                desc: transobj.desc
            }

        })
    }


    function deleteTransiction(arrindex){
        console.log(arrindex);
        dispatch({
            // newdat use karen ge q ke reducer main newdata ka name dea hai hum ne new data ka
            
            type:"DELETE-TRANSICTION",
            index: arrindex

        })
    }

    // render the childern arae take new data show ho

    return(
     
        // q ke traker file main ye object ja raha hai tu hum ye context render kar rahe hain

        <Trasictioncontex.Provider value={{
            

            transactions : state,
            addTransiction : addTransiction,
            deleteTransiction:deleteTransiction,
            // BOTH ARE SAME upper and neche wale line ek leikho function ko ya do same hain
            // addTransiction 

        }}>
           


            {children}
            {/* jo bhi call in function end main likh de tareka hai */}
            {/* no spalling maistake hone chalhe */}

        </Trasictioncontex.Provider>
    )






}