import React,{Component} from 'react';
import fire from "../auth/firebase"
import { Link , Redirect} from 'react-router-dom';
import image from "../images/OutreachLogo.png";
import headerCSS from "../css/header.css";


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
  
        <div className="jumbotron">

        <div className="row">
            <div className="mr-auto ml-auto"><img src={image} width="350px" alt="outreach-logo" /></div>


        </div>

        </div>


            
    <nav className="navbar navbar-light navbar-expand-lg  bg-dark margin-0">
     <div className="navbar-brand mr-auto ml-auto"><b className="appName">Recruitment App</b></div>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            
            


    
               
            
                <ul className="navbar-nav  ml-auto mr-3 mt-2 mt-lg-0">
                

                {this.props.authenticated && <li className="nav-item"><a className="nav-item nav-link" onClick={this.signOut} href='/' >Log Out</a></li>}
                {!this.props.authenticated && <li className="nav-item"><a className="nav-item nav-link" ><Link to='/'>Log In</Link></a></li>}
                {!this.props.authenticated && <li className="nav-item"><a className="nav-item nav-link"  ><Link to ='/signup'>Sign Up</Link></a></li>}


                    
                    
        
                </ul>
            
                    </div>
                </nav>
           

         </>





        )



        
    }


}

export default Header;

