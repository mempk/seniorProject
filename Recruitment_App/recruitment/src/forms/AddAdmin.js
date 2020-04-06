import React ,{ Component,useState} from 'react';
import {Link} from 'react-router-dom';
import fire from '../auth/firebase';
import form from '../css/form.css';
import { withAlert } from 'react-alert';

import { withRouter } from 'react-router-dom';



class AddAdmin extends Component{


    constructor(props){

        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signUpAuth= this.signUpAuth.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.state={

            name:'',
            email:'',
            firstPassword:'',
            confirmedPassword:'',
            userType:'admin',
            showSignUpSucess: false,
            



        }
    }
    componentDidMount(){


        
        
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
            })
            this.setState({showSignUpSucess:true});

            
        }

    


  
      
          

    
    render(){


        return(

            <div className="App" style={"style",{"margin":50,}}>

            <div className="container signupContainer">

            <h4 className="text-center adminDashBoard">Add New Admin</h4>




                {this.state.showSignUpSucess && <p className="errorText">New admin account created sucessfully!</p>}

                <input  value={this.state.name} onChange={this.handleChange} name="name"type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter Full Name for Admin"/>
   

      
                <input  value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter valid email address"/>
                <input   value={this.state.firstPassword} onChange={this.handleChange} name="firstPassword" type="password" className="form-control" id="firstInputPassword1" placeholder="Create a Password"/>
                <input value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" className="form-control" id="confirmInputPassword1" placeholder="Confirm Password"/>
                
              
            
            
            <br/>
           
            <button type="submit"  onClick={this.signUpAuth} className="form">Add New Admin</button>
        
     
    

        </div>
        </div>

        )
    }


}

export default AddAdmin;
