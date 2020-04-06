import React,{Component} from 'react';
import form from '../css/form.css';



class RecruiterInfo extends Component{

    
    render(){

        const {handleChange} = this.props;
        const {submitEventInfo} = this.props;

        return(
            <>
            
            <div class="container formContainer"> 

            <h4>Enter Event Information here</h4>


            <label>Event Name:
                <input

                type="text"
                name = "cpEventName"
                placeholder="Enter Event Name "
                onChange={handleChange('cpEventName')}

                />
            </label>
           

            <label>Event Date:
                <input

                type="date"
                name = "cpEventDate"
                
                onChange={handleChange('cpEventDate')}

                />
            </label>

            <label>Location City:
                <input

                type="text"
                name = "cpLocationCity"
                placeholder="Location city"
                onChange={handleChange('cpLocationCity')}

                />
            </label>
           
            <label>Location State:
                <input

                type="email"
                name = "cpLocationState"
                placeholder="Location State"
                onChange={handleChange('cpLocationState')}

                />
            </label>
            
            <label>Location Country:
                <input

                type="text"
                name = "cpLocationCountry"
                placeholder="Location Country"
                onChange={handleChange('cpLocationCountry')}

                />
            </label>
            
            <label>Sponsoring Organization:
                <input

                type="text"
                name = "cpSponsoringOrganization"
                placeholder="Enter sponsoring organization name"
                onChange={handleChange('cpSponsoringOrganization')}

                />
            </label>
            
            

            </div>
            <button onClick={submitEventInfo()} className="btn btn-primary-success form">Confirm Event Info !</button>
            
            </>
        )
    }
}
export default RecruiterInfo;
