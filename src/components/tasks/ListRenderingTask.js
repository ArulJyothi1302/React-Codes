import React from 'react';
import Bank from './BankDet';
// import './Bank.css';
function Bank_Users(){
    const users=[{
        Name:'Arul',
        AccNo:844123456789,
        PanNo:'DPM001234',
        Balance:100

    },
    {
        Name:'Sam',
        AccNo:844123456788,
        PanNo:'SPM001211',
        Balance:1000

    },
    {
        Name:'John',
        AccNo:844555456780,
        PanNo:'DPM002235',
        Balance:300

    },
    {
        Name:'Jamess',
        AccNo:84412345600,
        PanNo:'SPA005678',
        Balance:400

    }]
    const user_det=users.map(user=><Bank key={user.Name} Users={user}></Bank>)
    return(
        <div>{user_det}</div>
    )
}
export default Bank_Users;