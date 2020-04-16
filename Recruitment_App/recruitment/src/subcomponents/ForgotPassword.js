import React,{Component} from 'react';
import fire from '../auth/firebase';
import {Link} from 'react-router-dom';



class  ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state={

            email:'',
            showThankYou:false,

        }
        this.RecoverAccount=this.RecoverAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=e=> this.setState({[e.target.name]: e.target.value});
    

    RecoverAccount=e=>{
        e.preventDefault();

      
        fire.auth().sendPasswordResetEmail(this.state.email).then(function() {


            
            document.querySelector(".successText").innerHTML='Please check your email to reset the password.';

            document.querySelector(".signUpError").innerHTML='';
        
          }).catch(function(error) {

            if(error){
                document.querySelector(".successText").innerHTML='';
                document.querySelector(".signUpError").innerHTML=error.message;

            }
            
          });

         
          

          

    }

    render()

    {
        return(
            <div className="container">
            <div className="loginContainer1">
                  
    
                               
                                <h4 className="loginText1">Recover Your Account!</h4>
                              
                                <p class="successText text-center " style={{color:'green',fontSize:'larger'}}></p>
                                <p class="signUpError text-center "></p>
                                <div style={{margin:'20px'}}>
                                <input className="forgotInput" value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter your email address"/>
                                </div>
                                <button type="submit" onClick={this.RecoverAccount} className="loginButton1">Confirm Email Address</button>
                                <div style={{margin:'30px'}}>
                                <p><h6 class="text-center " ><Link style={{color:'rgb(0,38,76)'}}to='/'>Go To Log In Page</Link></h6></p>
                                </div>
                            

                               
            
                        
                </div>
                </div>

            
        )
    }
}


export default ForgotPassword;