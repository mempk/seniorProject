import React,{Component} from 'react';
import form from '../css/form.css';


class Page3 extends Component{

    render(){
        const {handleChange} = this.props;
        const {contactMedium} = this.props;

        return(
            <div className="container formContainer">

                <h1>Page 3</h1>

                <label class="ro-text">I Prefer to be contacted via &nbsp;
                        <select
                        name="gscontactMedium" 
                        onChange =  {handleChange('gscontactMedium')}
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
                        name = "gsphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('gsphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "gsbestContactTime"
                        placeholder=""
                        onChange={handleChange('gsbestContactTime')}


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
                        name = "gsphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('gsphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "gsbestContactTime"
                        placeholder=""
                        onChange={handleChange('gsbestContactTime')}


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
                        name = "gsmailAddress1"
                        placeholder="Address 1"
                        onChange={handleChange('gsmailAddress1')}
                        

                        />
                    

                    </label>
                    <label>Address 2:
                        <input

                        type="address"
                        name = "gsmailAddress2"
                        placeholder="Address 2"
                        onChange={handleChange('gsmailAddress2')}
                        

                        />
                    

                    </label>

                    <label>City:
                         <input

                        type="text"
                        name = "gsmailCity"
                        placeholder=""
                        onChange={handleChange('gsmailCity"')}


                        />

                    </label>
                    <label>State:
                         <input

                        type="state"
                        name = "gsmailState"
                        placeholder=""
                        onChange={handleChange('gsmailState')}


                        />

                    </label>
                    <label>Zip Code:
                         <input

                        type="number"
                        name = "gsmailZip"
                        placeholder=""
                        onChange={handleChange('gsmailZip')}


                        />

                    </label>

                    </div>}

                    <br>
                    </br>

                    <label class="ro-text">I am interested in information about &nbsp;
                        <select
                        name="gsInterestedProgram" 
                        onChange =  {handleChange('gsInterestedProgram')}
                        >
                        <option value="">Select Your Program of Interest</option>
                        <option value="Program">Program</option>
                        <option value="Financial Aid">Financial Aid</option>
                        <option value="Academic Course">Academic Course</option>
                        <option value="Dates and Deadlines">Dates and Deadlines</option>
                    

                        </select>
                    
                        
                    </label>
                    


                




            </div>
        )
    }
}
export default Page3;
