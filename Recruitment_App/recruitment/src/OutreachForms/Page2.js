import React,{Component} from 'react';


class Page2 extends Component{

    state={
      
        occupationDropdown:'',
    }

   customOption= input =>e=>{
        this.setState({[input]:e.target.value})


    }

    

    render(){

        const {whoyouare1} = this.props;


        
        const {handleChange} = this.props;
        

        

        return(
            <>
           
                <div class="container formContainer"> 

                
    
                    <label className="ro-text">I am :
                       
                        <select
                        name="otwhoyouAre" 
                        onChange =  {handleChange('otwhoyouAre')}
                        >
                        <option value="">Tell us who you are</option>
                        <option value="Student">Student</option>
                        <option value="Parent">Parent</option>
                        <option value="Community Member">Community Member</option>
                        <option value="Conference Attendee">Conference Attendee</option>


                        </select>
                        
                    </label>

                    {whoyouare1 === "Student" && 

                    <div className="studentDropdown">
                        <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>
                        <label class="ro-text">Current year in school:
                        <select
                        name="otcurrentYearInSchool" 
                        onChange =  {handleChange('otcurrentYearInSchool')}
                        >
                        <option value="">Select your year in school</option>
                        <option value="High School">High School</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
  

                        </select>
                        
                    </label>


                    <label>School Name:
                        <input

                        type="text"
                        name = "otschoolName"
                        placeholder="Enter your school name"
                        onChange={handleChange('otschoolName')}
                        

                        /> 
                    </label>

                    <label>Hometown:
                        <input

                        type="text"
                        name = "othometown"
                        placeholder="Hometown"
                        onChange={handleChange('othometown')}
                        

                        />
                        </label>
                        <label>Home State:
                         <input

                        type="text"
                        name = "otstateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('otstateCode')}


                        />

                    </label>




                    </div>}


                    {whoyouare1 === "Parent" && 
                    <div>
                    <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>

                    <label>Children Name and Year in School:
                        <input

                        type="text"
                        name = "otchildrenName"
                        placeholder="Type your children name"
                        onChange={handleChange('otchildrenName')}
                        

                        />
                         <input

                        type="text"
                        name = "otschoolYear"
                        placeholder="Year in school"
                        onChange={handleChange('otschoolYear')}


                        />

                    </label>
                    <label>Hometown:
                        <input

                        type="text"
                        name = "otchilderHometown"
                        placeholder="Hometown"
                        onChange={handleChange('otchildrenHometown')}
                        

                        />
                        </label>
                        <label> Home State: 
                         <input

                        type="text"
                        name = "otchildrenStateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('otchildrenStateCode')}


                        />

                    </label>





                    </div>}


                


               

                    </div>



                
            </>
        )
    }
}
export default Page2;
