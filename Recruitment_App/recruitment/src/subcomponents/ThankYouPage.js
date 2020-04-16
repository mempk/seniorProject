import React,{Component} from 'react';
import UMError from '../images/UMError.png';
import {Link} from 'react-router-dom';
import Error from '../css/error.css';






class ThankYouPage extends Component{
    render(){
        return(

            <>
            <div className="container">

                <div className="notfounderrorText">


                    <p style={{color:'green'}}>Success!</p>
                    <p>Thank you so much for sharing with us</p>
                    <p>Please return the device back to authorized person.</p>
             
                    
                    
                    
                </div>

                <img src={UMError} className="thankyou" alt="University Error Graphics"/>
                
            </div>

            
            </>
        


        )
           
    }
}
export default ThankYouPage;