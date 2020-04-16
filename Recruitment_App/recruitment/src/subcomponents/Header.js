import React,{Component} from 'react';
import fire from "../auth/firebase"
import { Link , Redirect} from 'react-router-dom';
import image from "../images/OutreachLogo.png";
import headerCSS from "../css/header.css";
import cp from '../images/cp.png';
import pcp from '../images/pcp.png';
import gs from '../images/gs.png';
import outreach from '../images/outreach.png';
import UMError from '../images/UMError.png';
import background from '../images/background.jpg';


import Error from '../css/error.css';


class Header extends Component{


    constructor(props){

        super(props);
        

        this.signOut = this.signOut.bind(this)
    }



    signOut=(e)=>{

        e.preventDefault();
      
        fire.auth().signOut().then(()=> {


            sessionStorage.clear();
            this.props.authenticated = false;
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
  
       


            
    <nav className="navbar navbar-light navbar-expand-lg  navbar-default margin-0 sticky-top">
    <div className="container">

    {this.props.authenticated && this.props.user === 'precollege' && <div className="navbar-brand mr-auto ml-auto"><img src={pcp} alt="precollege-graphics" /></div>}

    {this.props.authenticated && this.props.user === 'generalstudies' && <div className="navbar-brand mr-auto ml-auto"><img src={gs} alt="gs-graphics" /></div>}

    {this.props.authenticated && this.props.user === 'outreach' && <div className="navbar-brand mr-auto ml-auto"><img src={outreach} alt="outreach-graphics" /></div>}

    {this.props.authenticated && this.props.user === 'collegeprogram' && <div className="navbar-brand mr-auto ml-auto"><img src={cp} alt="collegeprogram-graphics"/></div>}

    {this.props.authenticated && this.props.user === 'admin' && <div className="navbar-brand mr-auto ml-auto"><img src={UMError} alt="collegeprogram-graphics"/></div>}

    {!this.props.authenticated && <div className="navbar-brand mr-auto ml-auto"><img src={UMError} alt="collegeprogram-graphics"/></div>}

    
        
            <button className="navbar-toggler custom-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            
               
            
                <ul className="navbar-nav  ml-auto mr-3 mt-2 mt-lg-0">
                

                {this.props.authenticated && <li className="nav-item logOut"><a style={{color:'rgb(0,38,76)'}} className="nav-item nav-link" onClick={this.signOut} ><Link to="/">Log Out</Link></a></li>}
                {!this.props.authenticated && <li className="nav-item"><a className="nav-item nav-link" ><Link to='/'>Log In</Link></a></li>}

        
                </ul>
                </div>
            
    </div>    
    </nav>
    {!this.props.authenticated &&  <div className="imageContainer"></div>}
           

         </>





        )



        
    }


}

export default Header;

