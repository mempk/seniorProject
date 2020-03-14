import React,{Component} from 'react';
import fire from "../auth/firebase"
import { Link , Redirect} from 'react-router-dom';

class Header extends Component{


    constructor(props){

        super(props);

        this.signOut = this.signOut.bind(this)
    }

    print=()=>{
        console.log(this.props.authenticated);
    }

    signOut=()=>{

  
      
        fire.auth().signOut().then(()=> {

           // this.props.history.goBack('/')


            console.log("User Sign Out");
            
    }

    

    
    ).catch((error)=>{
        console.log(error);})
    }

   

    
   
    


    render(){

    

        const dropdownStyle ={
            textAlign: 'left'
        }

        return(

           <>

<h1 class="jumbotron" style={"style",{"margin":0}}>Welcome to Recruitment App</h1>
            
    <nav class="navbar navbar-expand-lg navbar-light bg-light margin-0">
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Recruitment for Outreach</a>
                <ul class="navbar-nav  ml-auto mr-3 mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" onClick={this.signOut} href='/' aria-disabled="true">Log Out</a>
                </li>
                </ul>
            
                    </div>
                </nav>
           

         </>





        )



        
    }


}

export default Header;

