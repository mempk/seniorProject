import React,{Component,} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
import fire from '../auth/firebase';
import Admin from '../subcomponents/Admin';
import CollegeProgram from '../subcomponents/CollegeProgram';
import GeneralStudies from '../subcomponents/GeneralStudies';
import PreCollege from '../subcomponents/PreCollege';
import Header from '../subcomponents/Header';
import SignUp from '../forms/SignUpForm';
import LoginForm from '../forms/LoginForm';
import PageNotFound from '../subcomponents/PageNotFound';
import Footer from '../subcomponents/Footer';
import OutreachPage from '../subcomponents/OutreachPage';
import background from '../images/background.jpg';
import ViewRecruiters from '../subcomponents/ViewRecruiters';
import Clients from '../subcomponents/Clients';
import ForgotPassword from '../subcomponents/ForgotPassword';






class Navigation extends Component{


  constructor(props){

    super(props);
  
      this.state ={
      authenticated: "",
      userType: "",
      headerShow:false,
      adminAccountCreated:false,
      
    }}
  
   componentDidMount(){

    fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {
      if (snapshot.exists()){
          snapshot.forEach(child=>
              {this.setState({adminAccountCreated:true})})}});
  
  
  
        
     


    fire.auth().onAuthStateChanged((user)=> {
      if (user) {

        
        let data = sessionStorage.getItem("mySessionStorageData");
          data = JSON.parse(data);
    



          this.setState({

            authenticated:data.authenticated,
            userType: data.userType,
        
          })
    
     

        }

        else{
          this.setState({authenticated:false})
        }

        let data = sessionStorage.getItem("mySessionStorageData");
        data = JSON.parse(data);
        if(data){



            this.setState({

              authenticated:data.authenticated,
              userType: data.userType,
         
               })


          }

          else if(!data){

            this.setState({authenticated:false})

          }

        
            
          
      
      })


        

          

       
          
  
   

  }

  
render(){

    
        return(

            <Router>
              <Header user={this.state.userType} authenticated={this.state.authenticated}/>
          
             
              <Switch>
              <Route path='/' component={LoginForm} exact/>
              {!this.state.adminAccountCreated && <Route path='/signup' component={SignUp} exact/>}
              <Route path='/forgotpassword' component={ForgotPassword} exact/>

             
                {this.state.authenticated && this.state.userType === 'precollege' && <Route exact path='/precollege' component={PreCollege} />}

                {this.state.authenticated && this.state.userType === 'generalstudies' && <Route exact path='/generalstudies' component={GeneralStudies} />}

                {this.state.authenticated && this.state.userType === 'outreach' && <Route exact path='/outreach' component={OutreachPage} />}

                {this.state.authenticated && this.state.userType === 'collegeprogram' && <Route exact path='/collegeprogram' component={CollegeProgram} />}
             
                {this.state.authenticated && this.state.userType === 'admin' &&  <Route exact path='/admin' component={Admin}/>}

                {this.state.authenticated && this.state.userType === 'admin' && <Route exact path='/admin/viewdata' component={Clients} />}

                {this.state.authenticated && this.state.userType === 'admin' && <Route exact path='/admin/viewrecruiters' component={ViewRecruiters} />}

               <Route  component={PageNotFound}/>
         

              </Switch>

            
             
              <Footer />
    
          </Router>

        )
    }

  
}

export default Navigation;