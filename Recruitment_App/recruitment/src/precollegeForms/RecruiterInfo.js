import React,{Component} from 'react';
import form from '../css/form.css';



class RecruiterInfo extends Component{

    
    render(){

        const {handleChange} = this.props;
        const {submitEventInfo} = this.props;

        return(
            <>
            
            <div class="container formContainer"> 

            <h4>Enter Your And Event Information Here</h4>

          

                            

                <label>First Name:
                <input

                type="text"
                name = "recruiterFirstName"
                placeholder="Enter First Name "
                onChange={handleChange('recruiterFirstName')}

                />
                </label>






                <label>Last Name:
                <input

                type="text"
                name = "recruiterLastName"
                placeholder="Enter Last Name "
                onChange={handleChange('recruiterLastName')}

                />
                </label>










                <label class="ro-text">Your Program Type &nbsp;
                    <select
                    name="recruiterProgram" 
                    onChange =  {handleChange('recruiterProgram')}
                    >
                    <option value="">Select your program type</option>
                    <option value="College Program">College Program</option>
                    <option value="Outreach">Division of Outreach</option>
                    <option value="General Studies">General Studies</option>
                    <option value="Pre College">Pre College</option>




                    </select>
                    
                </label>

                <label>Your Email Address:
                <input

                type="text"
                name = "recruiterEmailID"
                placeholder="Enter your email address "
                onChange={handleChange('recruiterEmailID')}

                />
                </label>



            <label>Event Name:
                <input

                type="text"
                name = "pcEventName"
                placeholder="Enter Event Name "
                onChange={handleChange('pcEventName')}

                />
            </label>
           

            <label>Event Date:
                <input

                type="date"
                name = "pcEventDate"
                
                onChange={handleChange('pcEventDate')}

                />
            </label>

            <label>Location City:
                <input

                type="text"
                name = "pcLocationCity"
                placeholder="Location city"
                onChange={handleChange('pcLocationCity')}

                />
            </label>
           
            <label>Location State:
                <input

                type="email"
                name = "pcLocationState"
                placeholder="Location State"
                onChange={handleChange('pcLocationState')}

                />
            </label>

            <label>Location Country:
                <input

                type="text"
                name = "pcLocationCountry"
                placeholder="Location Country"
                onChange={handleChange('pcLocationCountry')}

                />
            </label>
            
            <label>Sponsoring Organization:
                <input

                type="text"
                name = "pcSponsoringOrganization"
                placeholder="Enter sponsoring organization name"
                onChange={handleChange('pcSponsoringOrganization')}

                />
            </label>
            
            

            </div>
            <button onClick={submitEventInfo()} className="btn btn-primary-success form">Confirm Event Info !</button>
            
            </>
        )
    }
}
export default RecruiterInfo;
