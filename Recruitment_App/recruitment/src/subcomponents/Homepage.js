import React,{Component} from 'react';
import LoginForm from '../forms/LoginForm';


class Homepage extends Component{

    render(){

        return(

        <>

            

            <div className="buttonContainer">   
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-11">
                                    <h3 className="homepageCursive">Learning Experiences for Everyone</h3>
                                    <p>The Division of Outreach and Continuing Education at the University of Mississippi</p>
                                  
    
                                </div>
                                <div className="buttonCol col-lg-3 col-md-3 col-sm-11">
    
                                    <button className="homepageButton">Sign In</button>
    
    
                                </div>
                                <div className="buttonCol col-lg-3 col-md-3 col-sm-11">
    
                                    <button className="homepageButton">Sign Up</button>
    
    
                                </div>
                            </div>
                     
                        </div>
            </div>

            <LoginForm />

            </>
        )
    }
}
export default Homepage;