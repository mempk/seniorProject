import React,{Component} from 'react';
import Header from "./Header";
import {Link} from 'react-router-dom';
import { withAlert } from 'react-alert';
import fire from '../auth/firebase';
import admin from "../css/admin.css";
import adminIcon from "../images/admin.png"
import recruiterIcon from "../images/reruiter.png";
import dataIcon from "../images/data.png";
import AddAdmin from '../forms/AddAdmin';





class Admin extends Component {

    constructor(props){

        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signUpAuth= this.signUpAuth.bind(this);
     
        this.state={

            name:'',
            email:'',
            firstPassword:'',
            confirmedPassword:'',
            userType:'admin',
        

        }
    }
    

    handleChange=e=> this.setState({[e.target.name]: e.target.value});

    signUpAuth =e=>{
        
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.confirmedPassword).then((data)=>{
            var UID = data.user.uid;
            var postData ={
                userType: this.state.userType,
                name: this.state.name
            };
            fire.database().ref().child("Users").child(UID).set(postData);
           
         
            

            }).then()

            

           

            
            
        }

    changeColor=(e)=>{
        e.preventDefault();
        console.log("color Changed")
    }

  


    render(){
       

        return(
 
            <>
        <div className="App" style={"style",{"margin":50,}}>
              <div className="container">

       

                

              <h2 className="text-center adminDashBoard">Welcome To Admin Dashboard</h2>
             
              <br/>


              <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-11 margin-20px">

                  
                    <div class="card adminCard">
                        <div class="card-body">
                            
                            <p class="card-text"><b>View And Manage Recruiter Here</b></p>
                            <Link to='admin/viewrecruiters' class="btn"><b>Click Here to Manage</b></Link>
                        </div>
                    </div>
                  
                  </div>

                 

                  <div className="col-lg-4 col-md-6 col-sm-11 margin-20px">

                                    
                    <div class="card adminCard">
                        <div class="card-body">
                           
                            <p class="card-text"><b>Add New Admin To The System</b></p>
                            <a href="#" class="btn" data-toggle="modal" data-target="#AddAdminModal"><b>Click Here to Add</b></a>
                        </div>
                    </div>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-11 margin-20px">

                                                        
                <div class="card adminCard">
                    <div class="card-body">
                    
                        <p class="card-text"><b>View and Retrieve Data</b></p>
                        <a href="#" class="btn"><b>Click Here to Access Data</b></a>
                    </div>
                </div>

                </div>
              </div>


               
              <div class="modal fade" id="AddAdminModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <h4 className="adminDashBoard text center">Add New Admin</h4>
                    <div class="modal-body">
                    <input  value={this.state.name} onChange={this.handleChange} name="name"type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Full Name for Admin"/>



                    <input  value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter valid email address"/>
                    <input   value={this.state.firstPassword} onChange={this.handleChange} name="firstPassword" type="password" className="form-control" id="firstInputPassword1" placeholder="Create a Password"/>
                    <input value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" className="form-control" id="confirmInputPassword1" placeholder="Confirm Password"/>

                    <br/>

                  
                    </div>
                    
                    <button type="submit" onClick={this.signUpAuth} className="btn">Add New Admin</button>
                    
                
                    </div>
                </div>
                </div>

              



              </div>

        </div>
            </>



        )
    }


}

export default Admin;

