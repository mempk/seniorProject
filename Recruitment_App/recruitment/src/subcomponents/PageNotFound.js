import React,{Component} from 'react';
import UMError from '../images/UMError.png';
import {Link} from 'react-router-dom';
import Error from '../css/error.css';






class PageNotFound extends Component{
    render(){
        return(

            <>
            <div className="container">

                <div className="notfounderrorText">
                    
                    <p>Sorry, we couldn't find the requested page</p>
                    <p>Please try login again, go to <Link to='/'>Login Page</Link></p>
             
                    
                    
                    
                </div>

                <img src={UMError} alt="University Error Graphics"/>
                
            </div>

            
            </>
        


        )
           
    }
}
export default PageNotFound;