import { useContext, useState } from "react";
import { Trasictioncontex } from "./contex";
function Traker() {

    let [ammountdata, ammdata] = useState();
    let [descriptiondata, descdata] = useState();





    // let trasication = [
    //     {
    //         ammount: 500, desc: "Cash"
    //     },
    //     {
    //         ammount: -40, desc: "Book"
    //     },



    // ]
    let trasicationcall = useContext(Trasictioncontex);
    let trasication = trasicationcall.transactions;
    // console.log(trasication.transactions)
    // ab ye uper wala two cheez la raha hia ek  transactions and addTransiction (in context end main dekho app ne pass kia hai)
    // jab mane assement ke waja se delete add kia tu teen cheezen hon gaen

    const submitcall = (event) => {
        event.preventDefault();
        // is se page refresh nahi hoga
        // console.log(ammountdata,descriptiondata);

        // now call the reducer call 
        trasicationcall.addTransiction({
            ammount: Number(ammountdata),
            desc: descriptiondata
        })

        ammdata(0);
        descdata('');


    }

    const updateIncome = () => {

        let income = 0, i;
        for (i = 0; i < (trasication.length); i++) {
            if (trasication[i].ammount > 0) {
                income = income + trasication[i].ammount;
            }


        }

        return income;

    }

    const updateexpense = () => {

        let expense = 0, i;
        for (i = 0; i < (trasication.length); i++) {
            if (trasication[i].ammount < 0) {
                expense = expense - trasication[i].ammount;
            }


        }

        return expense;
    }

    const deletedata=(index)=>{

        trasicationcall.deleteTransiction(index);

    }    

    return (

        <div className="main">

            <div >
                <h2 className="heading-text">Expense Tracker</h2>
            </div>
            <div>
                <p>YOUR BALANCE <br /> <span className="balance"> {updateIncome() - updateexpense()}$ </span> </p>

            </div>
            <div className="income-and-expense">

                <div  >
                    <h3 >INCOME  <br /> <span className="income-color"> +{updateIncome()}$ </span> </h3>

                </div>

                <div className="middleline">

                </div>

                <div>

                    <h3>EXPENSE  <br /> <span className="expense-color"> -{updateexpense()}$</span> </h3>
                </div>
            </div>

            <div className="history">
                <h3>History</h3>

                <hr />

                <ul className="traker-list-ul">
                    {trasication.map((data, index) => {
                        return (
                            <li key={index} className="traker-list">
                                <span>{data.desc} <button onClick={()=>deletedata(index)} className="delete">(delete)</button> </span>
                                <span> {data.ammount} <span className={data.ammount>=0 ? "green":"red" }>&nbsp; </span> </span>
                            </li>
                        )

                    })
                    }

                    {/* <li className="traker-list">
                    <span>Cash</span>
                    <span>$50</span>
                </li> */}

                </ul>

            </div>
            <div >
                <form className="transaction-form" onSubmit={submitcall} >
                    <h3>Add New Transaction</h3>
                    <hr />
                    <label>
                        Description
                <br />
                        <input type="text" value={descriptiondata} placeholder="Enter Text" onChange={(e) => descdata(e.target.value)} required />
                        <br />
                    </label>
                    <label>
                        Transaction Ammount<br />
                (negative-expense, positive-income)
                <br />
                        <input type="number" value={ammountdata} placeholder="Enter Ammount" required onChange={(e) => ammdata(e.target.value)} />

                    </label>
                    <br />
                    <input type="submit" className="submitbutton" />
                </form>
            </div>

        </div>
    );
}

export default Traker;
