import React from 'react';
import Delete  from '../images/delete.png';
import CsvDownload from 'react-json-to-csv';



const AllInfo = (props) =>{






    return(

       
            <>
            <div class="adminCard">
                        <div class="row card-body">
                        
                        <div className="col-lg-3 col-md-3 col-sm-12 ">
                        <select  style={{width:'100%',height:'45px',backgroundColor:'rgb(45,128,210)',color:'white',padding:'0', margin:'0'}}
                        
                        name="userType"
                        onChange={props.handleChange('userType')}
                        >
                        <option  value="">Select The Program </option>
                        <option value="College Program">College Program</option>
                        <option value="Outreach">Division of Outreach</option>
                        <option value="General Studies">General Studies</option>
                        <option value="Pre College">Pre College</option>
                        <option value="Admin">Admin</option> 
                        
                        
                        </select>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                    
                       
                        <input

                        type="date"
                        name = "startdate"
                        onChange={props.handleChange('startdate')}

                        />

                  
                        </div>
                    
                        <div className="col-lg-3 col-md-3 col-sm-12"><button onClick={props.applyFilter} style={{width:'100%'}}className="btnAdmin"><b>Apply Filter</b></button></div>
                        <div className="col-lg-3 col-md-3 col-sm-12"><button onClick={props.clearFilter} style={{width:'100%'}}className="btnAdmin"><b>Clear All</b></button></div>
                    

                        </div>
                       
                        
                    
                        
</div>

            
        <div><CsvDownload  data={props.client} filename="FormData.csv" className ="Downloadbutton">Download Data</CsvDownload></div>
            
          
        {props.client.map((item)=>(
                <div className="recruiterContainer">

                <div className="row recruiterDetails">
                    <div className="col-lg-3 col-md-12 col-sm-12 text-center detailText">{item.recruiterFirstName} {item.recruiterLastName}</div>
                    <div className="col-lg-4 col-md-12 col-sm-12 text-center detailText">{item.recruiterEmailID}</div>
                    <div className="col-lg-3 col-md-12 col-sm-12 text-center detailText">{item.recruiterProgram}</div>
                    <div className="col-lg-2 col-md-12 col-sm-12 text-center "><button onClick={props.deleteCurrentClient.bind(this, item._id)} className="deleteButton"><img class className="deleteIcon" src={Delete} alt ="delete icon"/></button></div>
                </div>

                </div>
            ))}

            </>

     
          
    );
}
export default AllInfo;
