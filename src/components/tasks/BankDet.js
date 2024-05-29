import React from "react";
import './Bank.css'
function Bank({Key,Users}){
    let Name= Users.Name;
    let Acc=Users.AccNo;
    let Pan=Users.PanNo;
    let Bal=Users.Balance;
    return(
        
        <div>
            {/* <table><thead>Ciub Bank</thead>
            <tr>
                <th>Name</th>
                <th>Acc-NO</th>
                <th>Pan-No</th>
                <th>Balance</th>
                </tr>
                <tr>
                    <td>{Users.Name}</td>
                    <td>{Users.AccNo}</td>
                    <td>{Users.PanNo}</td>
                    <td>{Users.Balance}</td>
                </tr>
                </table> */}
                <h1>{Name}<br/>{Acc}<br/>{Pan}<br/>{Bal}</h1>
              
        </div>
    )
}
export default Bank