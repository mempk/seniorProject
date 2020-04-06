import React ,{Component, history} from 'react';
import {BrowserRouter as Router, Route,withRouter,Link, Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';
import fire from '../auth/firebase';
import App from '../component/App';
import Recruiter from '../subcomponents/Recruiter';
import Navigation from '../component/Navigation';
import loginform from '../css/loginform.css';
import background from '../images/background.jpg';
import SignUpForm from './SignUpForm';







class LoginForm extends Component{

    constructor(props){
        super(props);
        this.loginAuth= this.loginAuth.bind(this);
        this.handleChange= this.handleChange.bind(this);

        this.state= { email: '', password: '', authenticated:'', userType:'',showLoginError:false,showLogin:false,adminUID:''}
       
    }

    componentDidMount(){
        fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {
            if (snapshot.exists()){
                snapshot.forEach(child=>
                    {this.setState({adminUID:child.key})})}})
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

           

           if(userID===this.state.adminUID){

           var ref = fire.database().ref("Users").child(userID)

           var type = ref.on('value', snap=>{
               
            User = snap.val().userType;

            User = User.replace(/\s/g, '');

            User = User.toLowerCase();

            this.setState({authenticated:true, userType: User})

            this.props.history.push(`/${User}`)
            
    
           })
           
        }

        else{


            var ref = fire.database().ref().child("Users").child(this.state.adminUID).child("Recruiters").child(userID)

            var type = ref.on('value', snap=>{
                
             User = snap.val().userType;
 
             User = User.replace(/\s/g, '');
 
             User = User.toLowerCase();
 
             this.setState({authenticated:true, userType: User})
 
             this.props.history.push(`/${User}`)
             
     
            })





        }

       

        
        }).catch((error)=>{
            this.setState({showLoginError:true})
            console.log(error);
        }) 
    }



    showLoginForm=(e)=>{
        e.preventDefault();
        this.setState({showLogin:true})
    }

    
        
    render(){

     let props = {
         authenticated :this.state.authenticated,
         userType: this.state.userType

     }



        return(

            

                

<>

            
        <img className="imageContainer" src={background} alt="background"/>
        <div className="buttonContainer">   
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-11">
                                            <h3 className="homepageCursive">Learning Experiences for Everyone</h3>
                                            <p >The Division of Outreach and Continuing Education at the University of Mississippi</p>
                                        
            
                                        </div>
                                        <div className="buttonCol col-lg-3 col-md-3 col-sm-11">
            
                                            <button className="homepageButton" onClick={this.showLoginForm}>Log In</button>
            
            
                                        </div>
                                        <div className="buttonCol col-lg-3 col-md-3 col-sm-11">
            
                                        <Link style={{color:'rgb(0,38,76)'}}to='/signup'><button className="homepageButton">Sign Up</button></Link>
            
            
                                        </div>
                                    </div>
                            
                                </div>
                    </div>
        <div className="App" style={"style",{"margin":50,}}>
                

                    
            
                
                { this.state.showLogin && 
                <div className="container loginContainer">
                  
    
                               
                                <h4 className="loginText text center">Log In</h4>
                                {this.state.showLoginError && <p className="errorText">Incorrect Email/Password</p>}
                                <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                                
                            
                                <input value={this.state.password} onChange={this.handleChange} name="password"  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                <small id="emailHelp">We'll never share your email with anyone else.</small>
                            
                                <button type="submit" style ={{width:'50%'}}onClick={this.loginAuth} className="loginButton">Continue</button>
                       
                            
                                <p>Don't have an account? <Link style={{color:'rgb(0,38,76)'}}to='/signup'>Sign Up</Link></p>

                               
            
                        
                </div>}

              
                   
          


             

        
    </div>
</>
            
        )



    }

}



export default LoginForm;
