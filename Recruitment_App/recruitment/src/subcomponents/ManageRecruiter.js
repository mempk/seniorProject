import React,{Component} from 'react';
import fire from '../auth/firebase';
import RecruiterDetailPrinter from './RecruiterDetailPrinter';






const ManageRecruiter=()=>{


    const recruiterDetails = [];


    fire.database().ref("Users").orderByChild("Recruiters").on("value",snap=>{
        if(snap.exists()){
           
            const data = snap.val();
            const newData= data[Object.keys(data)[0]];
            const finalNewData = newData[Object.keys(newData)[0]];

        
            console.log("test1")
            console.log(finalNewData);
           
            
            Object.keys(finalNewData).forEach(function (key){


               

                console.log(finalNewData[key]);

                recruiterDetails.push(<RecruiterDetailPrinter firstName={finalNewData[key].firstName}
                                                      lastName={finalNewData[key].lastName} 
                                                      email={finalNewData[key].email} 
                                                      userType={finalNewData[key].userType}
                                                      userID={key}/>);
            });
        }

    });


    return(

   <>

    

    


       {recruiterDetails}

        

    


    </>

    )



}


export default ManageRecruiter;