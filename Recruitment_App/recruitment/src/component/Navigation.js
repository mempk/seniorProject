import React,{Component,} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
import fire from '../auth/firebase';



import Admin from '../subcomponents/Admin';
import CollegeProgram from '../subcomponents/CollegeProgram';
import GeneralStudies from '../subcomponents/GeneralStudies';
import PreCollege from '../subcomponents/PreCollege';
import Header from '../subcomponents/Header';
import Login from '../forms/LoginForm';
import SignUp from '../forms/SignUpForm';
import Recruiter from '../subcomponents/Recruiter';
import LoginForm from '../forms/LoginForm';
import PageNotFound from '../subcomponents/PageNotFound';
import Footer from '../subcomponents/Footer';
import OutreachPage from '../subcomponents/OutreachPage';
import background from '../images/background.jpg';
import ManagerRecruiter from '../subcomponents/ManageRecruiter';




class Navigation extends Component{


  constructor(props){

    super(props);
  
      this.state ={
      authenticated: "",
      userType: "",
      headerShow:false,
      adminUID:'',
      
    }}
  
   componentDidMount(){

    fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {
      if (snapshot.exists()){
          snapshot.forEach(child=>
              {this.setState({adminUID:child.key})})}});
  
  
    fire.auth().onAuthStateChanged((user)=> {
      if (user) {

        
        var userID = user.uid

        if(userID===this.state.adminUID){

          var User = 'admin';

          this.setState({authenticated:true,
            userType: User,
            headerShow:true,
             })    
             console.log(this.state.authenticated + " "+ this.state.userType)

        }

        else{

          var ref = fire.database().ref().child("Users").child(this.state.adminUID).child("Recruiters").child(userID);

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
              <Header user={this.state.userType} authenticated={this.state.authenticated}/>
          
             
              <Switch>
              <Route path='/' component={LoginForm} exact/>
              <Route path='/signup' component={SignUp} exact/>


             
                {this.state.authenticated && this.state.userType === 'precollege' && <Route exact path='/precollege' component={PreCollege} />}

                {this.state.authenticated && this.state.userType === 'generalstudies' && <Route exact path='/generalstudies' component={GeneralStudies} />}

                {this.state.authenticated && this.state.userType === 'outreach' && <Route exact path='/outreach' component={OutreachPage} />}

                {this.state.authenticated && this.state.userType === 'collegeprogram' && <Route exact path='/collegeprogram' component={CollegeProgram} />}

                {this.state.authenticated && this.state.userType === 'admin' && <Route exact path='/admin' component={Admin} />}

                {this.state.authenticated && this.state.userType === 'admin' && <Route exact path='/admin/viewrecruiters' component={ManagerRecruiter} />}

              <Route  component={PageNotFound}/>
         

              </Switch>

            
             
              <Footer />
    
          </Router>

        )
    }

  
}

export default Navigation;