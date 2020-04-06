import React,{Component} from 'react';
import form from '../css/form.css';


class Page3 extends Component{

    render(){
        const {handleChange} = this.props;
        const {contactMedium} = this.props;

        return(
            <div className="container formContainer">

                <h1>Page 3</h1>

                <label class="ro-text">I Prefer to be contacted via:
                        <select
                        name="otcontactMedium" 
                        onChange =  {handleChange('otcontactMedium')}
                        >
                        <option value="">I Prefer to be contacted via</option>
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Text Message">Text Message</option>
                        <option value="Mail">Mail</option>
                    
                        </select>

                        
                </label>

                
                {contactMedium === "Phone Call" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>

                    <label>Phone Number:
                        <input

                        type="phone"
                        name = "otphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('otphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "otbestContactTime"
                        placeholder=""
                        onChange={handleChange('otbestContactTime')}


                        />

                    </label>

                    </div>}

                    {contactMedium === "Text Message" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>

                    <label>Phone Number:
                        <input

                        type="phone"
                        name = "otphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('otphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "otbestContactTime"
                        placeholder=""
                        onChange={handleChange('otbestContactTime')}


                        />

                    </label>

                    </div>}




                    {contactMedium === "Mail" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>
                  

                    <label>Address 1:
                        <input

                        type="address"
                        name = "otmailAddress1"
                        placeholder="Address 1"
                        onChange={handleChange('otmailAddress1')}
                        

                        />
                    

                    </label>
                    <label>Address 2:
                        <input

                        type="address"
                        name = "otmailAddress2"
                        placeholder="Address 2"
                        onChange={handleChange('otmailAddress2')}
                        

                        />
                    

                    </label>

                    <label>City:
                         <input

                        type="text"
                        name = "otmailCity"
                        placeholder=""
                        onChange={handleChange('otmailCity"')}


                        />

                    </label>
                    <label>State:
                         <input

                        type="state"
                        name = "otmailState"
                        placeholder=""
                        onChange={handleChange('otmailState')}


                        />

                    </label>
                    <label>Zip Code:
                         <input

                        type="number"
                        name = "otmailZip"
                        placeholder=""
                        onChange={handleChange('otmailZip')}


                        />

                    </label>

                    </div>}
                    


                




            </div>
        )
    }
}
export default Page3;
