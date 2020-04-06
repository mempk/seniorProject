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
                name = "cpfirstName"
                placeholder="Enter your first name here"
                onChange={handleChange('cpfirstName')}

                />
            </label>
           

            <label>Last Name:
                <input

                type="text"
                name = "cplastName"
                placeholder="Enter your last name here"
                onChange={handleChange('cplastName')}

                />
            </label>
           
            <label>Email Address:
                <input

                type="email"
                name = "cpemailAddresss"
                placeholder="Enter your valid email address"
                onChange={handleChange('cpemailAddress')}

                />
            </label>
            
            <br>
            </br>
            <label class="ro-text">Program of Interest:
                <select
                name="progOfInterest" 
                onChange =  {handleChange('progOfInterest')}
                >
                <option value="">Select Your Program of Interest</option>
                <option value="Study USA">Study USA</option>
                <option value="iStudy">iStudy</option>
                <option value="Internship Experience">Internship Experience</option>
             

                </select>
            
                
            </label>

            </div>
            </>
        )
    }
}
export default Page1;
