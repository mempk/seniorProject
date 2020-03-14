import React ,{Component, history} from 'react';
import {BrowserRouter as Router, Route,withRouter,Link, Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';
import fire from '../auth/firebase';
import App from '../component/App';
import Recruiter from '../subcomponents/Recruiter';
import Navigation from '../component/Navigation';





class LoginForm extends Component{

    constructor(props){
        super(props);
        this.loginAuth= this.loginAuth.bind(this);
        this.handleChange= this.handleChange.bind(this);

        this.state= { email: '', password: '', authenticated:'', userType:''}
       
    }

    componentDidMount(){
        this.handleChange.bind(this);
        this.loginAuth.bind(this);
        fire.auth().signOut().then(()=> {
             
        });

        }
    handleChange=e=> this.setState({[e.target.name]: e.target.value});

    

    loginAuth=(event)=>{
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((data)=>{

           var User =""
           var userID = data.user.uid


           var ref = fire.database().ref("Users").child(userID)

           var type = ref.on('value', snap=>{
               
            User = snap.val().userType;

            User = User.replace(/\s/g, '');

            User = User.toLowerCase();

            this.setState({authenticated:true, userType: User})

            this.props.history.push(`/${User}`)
            
    
           })
           
       
        
        }).catch((error)=>{
            console.log(error);
        }) 
    }

    
        
    render(){

     let props = {
         authenticated :this.state.authenticated,
         userType: this.state.userType

     }



        return(

            <>
            <div className="container">

            <div className="card">
                    <div className="card-body">
                        <h3 className="card-title align center">Login Form</h3>
    
                        <form id="loginForm">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} name="password"  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
    
                        
                        <button type="submit" onClick={this.loginAuth} className="btn btn-primary">Submit</button>
                    </form>
                            
                    <Link to='/signup'>Don't have a account with us? Click here to create</Link>
                

                   
                        
                   </div>
                </div>

             

                </div>
    
                </>
        )



    }

}



export default LoginForm;
