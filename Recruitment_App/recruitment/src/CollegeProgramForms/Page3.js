import React,{Component} from 'react';
import form from '../css/form.css';


class Page3 extends Component{

    render(){
        const {handleChange} = this.props;
        const {contactMedium} = this.props;

        return(
            <div className="container formContainer">

                <h1>Page 3</h1>

                <label className="ro-text">I Prefer to be contacted via:
                        <select
                        name="cpcontactMedium" 
                        onChange =  {handleChange('cpcontactMedium')}
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
                        name = "cpphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('cpphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "cpbestContactTime"
                        placeholder=""
                        onChange={handleChange('cpbestContactTime')}


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
                        name = "cpphoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('cpphoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "cpbestContactTime"
                        placeholder=""
                        onChange={handleChange('cpbestContactTime')}


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
                        name = "cpmailAddress1"
                        placeholder="Address 1"
                        onChange={handleChange('cpmailAddress1')}
                        

                        />
                    

                    </label>
                    <label>Address 2:
                        <input

                        type="address"
                        name = "cpmailAddress2"
                        placeholder="Address 2"
                        onChange={handleChange('cpmailAddress2')}
                        

                        />
                    

                    </label>

                    <label>City:
                         <input

                        type="text"
                        name = "cpmailCity"
                        placeholder=""
                        onChange={handleChange('cpmailCity"')}


                        />

                    </label>
                    <label>State:
                         <input

                        type="state"
                        name = "cpmailState"
                        placeholder=""
                        onChange={handleChange('cpmailState')}


                        />

                    </label>
                    <label>Zip Code:
                         <input

                        type="number"
                        name = "cpmailZip"
                        placeholder=""
                        onChange={handleChange('cpmailZip')}


                        />

                    </label>

                    </div>}

                    <br>
                    </br>

                    <label className="ro-text">I am interested in information about:
                        <select
                        name="cpInterestedProgram" 
                        onChange =  {handleChange('cpInterestedProgram')}
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
