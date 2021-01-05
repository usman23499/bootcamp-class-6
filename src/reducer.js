const Trasictionreducer=(state,action)=>{
    switch (action.type){
        case "ADD-TRANSICTION":
            return [...state ,action.newdata];
            //add new data in old list

    
        case "DELETE-TRANSICTION":{


            var arr=[];

            for(var i=0;i<state.length;i++){
                if(i!==action.index){
                arr.push(state[i]);
                }
            }
            // console.log(arr);

           
            
            
            return arr;
        }
        default:
            
            return state;
        


    }
}

export default Trasictionreducer;