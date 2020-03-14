import React,{Component,} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
import fire from '../auth/firebase';



import Admin from '../subcomponents/Admin';
import CollegeProgram from '../subcomponents/CollegeProgram';
import Comuniversity from '../subcomponents/Comuniversity';
import GeneralStudies from '../subcomponents/GeneralStudies';
import PreCollege from '../subcomponents/PreCollege';
import Header from '../subcomponents/Header';
import Login from '../forms/LoginForm';
import SignUp from '../forms/SignUpForm';
import Recruiter from '../subcomponents/Recruiter';
import LoginForm from '../forms/LoginForm';




class Navigation extends Component{


  constructor(props){

    super(props);
  
      this.state ={
      authenticated: "",
      userType: "",
      headerShow:false,
    }}
  
   componentDidMount(){
  
  
    fire.auth().onAuthStateChanged((user)=> {
      if (user) {

        
        var userID = user.uid


        var ref = fire.database().ref("Users").child(userID)

        var type = ref.on('value', snap=>{
               
         var User = snap.val().userType;


         var User= User.replace(/\s/g, '').toLowerCase();

          this.setState({authenticated:true,
            userType: User,
            headerShow:true,
             })

         

          console.log(this.state.authenticated + " "+ this.state.userType)
           })

   
        }
  
      else {
        this.setState({authenticated:false})
       console.log('user logged out');
      }
    });

  }

  
render(){

    
        return(

            <Router>
              {this.state.headerShow? <Header/>:null}
              <div className="App" style={"style",{"margin":50,}}>
              <Switch>
              <Route path='/' component={LoginForm} exact/>
              <Route path='/signup' component={SignUp} exact/>


             
                {this.state.authenticated && this.state.userType === 'precollege' && <Route exact path='/precollege' component={PreCollege} />}

                {this.state.authenticated && this.state.userType === 'generalstudies' && <Route exact path='/generalstudies' component={GeneralStudies} />}

                {this.state.authenticated && this.state.userType === 'community' && <Route exact path='/community' component={Comuniversity} />}

                {this.state.authenticated && this.state.userType === 'collegeprogram' && <Route exact path='/collegeprogram' component={CollegeProgram} />}

                {this.state.authenticated && this.state.userType === 'admin' && <Route exact path='/admin' component={Admin} />}
         

              </Switch>
            
              </div>
    
          </Router>

        )
    }

  
}

export default Navigation;