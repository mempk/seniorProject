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
                name = "firstName"
                placeholder="Enter your first name here"
                onChange={handleChange('firstName')}

                />
            </label>
           

            <label>Last Name:
                <input

                type="text"
                name = "lastName"
                placeholder="Enter your last name here"
                onChange={handleChange('lastName')}

                />
            </label>
           
            <label>Email Address:
                <input

                type="email"
                name = "emailAddresss"
                placeholder="Enter your valid email address"
                onChange={handleChange('emailAddress')}

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
                <option value="Academic Competition">Academic Competition</option>
                <option value="Elementary Summer">Elementary Summer</option>
                <option value="Middle School Summer">Middle School Summer</option>
                <option value="High School Summer">High School Summer</option>
                <option value="SCHS">SCHS</option>
                <option value="UM High School Online">UM High School Online</option>

                </select>
            
                
            </label>

            </div>
            </>
        )
    }
}
export default Page1;
