import React ,{ Component,useState} from 'react';
import {Link} from 'react-router-dom';
import fire from '../auth/firebase';
import form from '../css/form.css';

import { withRouter } from 'react-router-dom';




class SignUpForm extends Component{


    constructor(props){

        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signUpAuth= this.signUpAuth.bind(this);
        this.state={

            firstName:'',
            lastName:'',
            email:'',
            firstPassword:'',
            confirmedPassword:'',
            userType:'',
            showAdmin:true,
            adminUID:'',
            showError:'false',
            errorText:'',



        }
    }
    componentDidMount(){


        fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {
            if (snapshot.exists()){
                snapshot.forEach(child=>
                    {this.setState({adminUID:child.key})})

              console.log("Admin account already created");
              this.setState({showAdmin:false})
             
            }
            else{
                console.log("Admin account not created")
            }
        })
        
        
        
    }

    handleChange=e=> this.setState({[e.target.name]: e.target.value});



    

   




    signUpAuth =e=>{
        
        e.preventDefault();
        if(this.state.showAdmin === false){
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.confirmedPassword).then((data)=>{
            var UID = data.user.uid;
            var postData ={
                
                firstName: this.state.firstName,
                lastName:this.state.lastName,
                email: this.state.email,
                userType: this.state.userType,

            };
            fire.database().ref().child("Users").child(this.state.adminUID).child("Recruiters").child(UID).set(postData).then();
            fire.auth().signOut().then(()=> {
             
            });
         
            
            this.props.history.push('/');

            })

           

            
            
        }

        else {
            fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.confirmedPassword).then((data)=>{
                var UID = data.user.uid;
                var postData ={
                    firstName: this.state.firstName,
                    lastName:this.state.lastName,
                    email: this.state.email,
                    userType: this.state.userType,
                };
                fire.database().ref().child("Users").child(UID).set(postData);
                fire.auth().signOut().then(()=> {
                 
                });
             
                
                this.props.history.push('/');
    
                })

        }

    
    }

  
      
          

    
    render(){

        const {closeAddForm} = this.props;


        return(

            <div className="App" style={"style",{"margin":50,}}>

            <div className="container signupContainer">

            <Link to='/'><button  style={{color:'rgb(0,38,76)'}} type="button" class="close" >
            <span aria-hidden="true">&times;</span>
            </button></Link>

                <h4 className="loginText text center">Add New Recruiter</h4>
                {this.state.showAdmin && <h4 className="loginText text center">Create New Admin Account</h4>}






                <input  value={this.state.firstName} onChange={this.handleChange} name="firstName"type="name" className="form-control"  placeholder="Enter first name"/>
                <input  value={this.state.lastName} onChange={this.handleChange} name="lastName"type="name" className="form-control"  placeholder="Enter last name"/>
                <input  value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter valid email address"/>
                <input   value={this.state.firstPassword} onChange={this.handleChange} name="firstPassword" type="password" className="form-control" id="firstInputPassword1" placeholder="Password"/>
                <input value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" className="form-control" id="confirmInputPassword1" placeholder="Confirm Password"/>
                
                <select  style={{width:'85%',height:'45px',backgroundColor:'rgb(0,38,76',color:'white',textAlign:'center'}}
                value={this.state.userType}
                onChange={this.handleChange} 
                name="userType"
                >
                    <option  value="">Select The Program </option>
                    {!this.state.showAdmin && <option value="College Program">College Program</option>}
                    {!this.state.showAdmin && <option value="Outreach">Division of Outreach</option>}
                    {!this.state.showAdmin && <option value="General Studies">General Studies</option>}
                    {!this.state.showAdmin && <option value="Pre College">Pre College</option>}
                    {this.state.showAdmin && <option value="Admin">Admin</option> }
                    
                    
                </select>
            
            
            <br/>
            <button type="submit" style ={{width:'50%'}} onClick={this.signUpAuth} className="loginButton">Create Account</button>
        
     

    

        </div>
        </div>

        )
    }







}

export default SignUpForm;
