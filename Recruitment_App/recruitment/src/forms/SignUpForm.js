import React ,{ Component,useState} from 'react';
import fire from '../auth/firebase'

import { withRouter } from 'react-router-dom';




class SignUpForm extends Component{


    constructor(props){

        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signUpAuth= this.signUpAuth.bind(this);
        this.state={

            name:'',
            email:'',
            firstPassword:'',
            confirmedPassword:'',
            userType:'',
            showAdmin:true,



        }
    }
    componentDidMount(){


        fire.database().ref().child("Users").orderByChild("userType").equalTo("Admin").once("value",snapshot => {
            if (snapshot.exists()){
                const userData = snapshot.val();
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
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.confirmedPassword).then((data)=>{
            var UID = data.user.uid;
            var postData ={
                userType: this.state.userType,
                name: this.state.name
            };
            fire.database().ref().child("Users").child(UID).set(postData);
            fire.auth().signOut().then(()=> {
             
            });
         
            
            this.props.history.push('/');

            })

           

            
            
        }

    


  
      
          

    
    render(){


        return(



            <div className="container">


            <form id="SignUpForm">



            <div className="form-group">
                <label for="fullName">Full Name</label>
                <input  value={this.state.name} onChange={this.handleChange} name="name"type="name" className="form-control" aria-describedby="emailHelp" placeholder="Enter your full name"/>
               
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input  value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input   value={this.state.firstPassword} onChange={this.handleChange} name="firstPassword" type="password" className="form-control" id="firstInputPassword1" placeholder="Password"/>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" className="form-control" id="confirmInputPassword1" placeholder="Password"/>
            </div>
            
            
            <div className="form-group">
            <label for="userType">Choose Your User Type</label>
            

            <select className="form-control" id="exampleFormControlSelect1"
            value={this.state.userType}
            onChange={this.handleChange} 
            name="userType"
            >
                <option value="">Select Your Program</option>
                <option value="collegeProgram">College Program</option>
                <option value="Community">Community</option>
                <option value="General Studies">General Studies</option>
                <option value="Pre College">Pre College</option>
                {this.state.showAdmin && <option value="Admin">Admin</option> }
                
                
            </select>
            </div>

        
            <button type="submit" onClick={this.signUpAuth} className="btn btn-primary">Submit</button>
        </form>

    

        </div>

        )
    }







}

export default SignUpForm;
