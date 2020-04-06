import React,{Component} from 'react';
import form from '../css/form.css';



class Page1 extends Component{

    
    render(){

        const {handleChange} = this.props;

        return(
            <>
            
            <div class="container formContainer"> 

            <h4>Enter personal Information here</h4>


            <label>First Name:
                <input

                type="text"
                name = "otfirstName"
                placeholder="Enter your first name here"
                onChange={handleChange('otfirstName')}

                />
            </label>
           

            <label>Last Name:
                <input

                type="text"
                name = "otlastName"
                placeholder="Enter your last name here"
                onChange={handleChange('otlastName')}

                />
            </label>
           
            <label>Email Address:
                <input

                type="email"
                name = "otemailAddresss"
                placeholder="Enter your valid email address"
                onChange={handleChange('otemailAddress')}

                />
            </label>
            
            <br>
            </br>
            <label class="ro-text">Program of Interest:
                <select
                name="otprogOfInterest" 
                onChange =  {handleChange('otprogOfInterest')}
                >
                <option value="">Select Your Program of Interest</option>
                <option value="Communiversity">Communiversity</option>
                <option value="Teach Mississippi Institute">Teach Mississippi Institute</option>
                <option value="Academic Outreach">Academic Outreach</option>
                <option value="Other">Other</option>
    

                </select>
            
                
            </label>

            </div>
            </>
        )
    }
}
export default Page1;
