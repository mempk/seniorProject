import React,{Component} from 'react';
import form from '../css/form.css';



class Page1 extends Component{

    
    render(){

        const {handleChange} = this.props;

        return(
            <>
            
            <div class="container formContainer"> 

            <h1>Enter personal Information here</h1>


            <label>First Name:
                <input

                type="text"
                name = "gsfirstName"
                placeholder="Enter your first name here"
                onChange={handleChange('gsfirstName')}

                />
            </label>
           

            <label>Last Name:
                <input

                type="text"
                name = "gslastName"
                placeholder="Enter your last name here"
                onChange={handleChange('gslastName')}

                />
            </label>
           
            <label>Email Address:
                <input

                type="email"
                name = "gsemailAddresss"
                placeholder="Enter your valid email address"
                onChange={handleChange('gsemailAddress')}

                />
            </label>
            
            <br>
            </br>
            <label class="ro-text">Program of Interest &nbsp;
                <select
                name="gsprogOfInterest" 
                onChange =  {handleChange('gsprogOfInterest')}
                >
                <option value="">Select Your Program of Interest</option>
                <option value="Freshman Studies">Freshman Studies</option>
                <option value="Multi Disciplinary Studies">Multi Disciplinary Studies</option>
                <option value="University Studies">University Studies</option>
                <option value="Complete2Compete">Complete2Compete</option>
             

                </select>
            
                
            </label>

            </div>
            </>
        )
    }
}
export default Page1;
