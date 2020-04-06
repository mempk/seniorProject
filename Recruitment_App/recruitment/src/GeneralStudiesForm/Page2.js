import React,{Component} from 'react';


class Page2 extends Component{

    

   customOption= input =>e=>{
        this.setState({[input]:e.target.value})


    }

    

    render(){

        const {whoyouare1} = this.props;

        const {gsprogOfInterest} = this.props;


        
        const {handleChange} = this.props;
        

        

        return(
            <>
           
                <div class="container formContainer"> 


                    <br>
                    </br>
                    <label>I am :
                       
                        <select
                        name="gswhoyouAre" 
                        onChange =  {handleChange('gswhoyouAre')}
                        >
                        <option value="">Tell us who you are</option>
                        <option value="Student">Student</option>
                        <option value="Parent">Parent</option>
                        <option value="Advisor">Advisor</option>
                        <option value="Other">Other</option>

                        </select>
                        
                    </label>

                    {whoyouare1 === "Student" && 

                    <div className="studentDropdown">
                        <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>
                        <label class="ro-text">Current year in school:
                        <select
                        name="gscurrentYearInSchool" 
                        onChange =  {handleChange('gscurrentYearInSchool')}
                        >
                        <option value="">Select your year in school</option>
                        <option value="High School">High School</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
         

                        </select>
                        
                    </label>


                    <label>School/University Name:
                        <input

                        type="text"
                        name = "gsschoolName"
                        placeholder="Enter your school/university name"
                        onChange={handleChange('gsschoolName')}
                        

                        /> 
                    </label>

                    <label>Hometown:
                        <input

                        type="text"
                        name = "gshometown"
                        placeholder="Hometown"
                        onChange={handleChange('gshometown')}
                        

                        />
                        </label>
                        <label>Home State:
                         <input

                        type="text"
                        name = "cpstateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('cpstateCode')}


                        />

                    </label>

                    {gsprogOfInterest === "Freshman Studies" &&
                    
                    <div>

                        <p>It's Ok to be undeclared, but we'd love to share the information that would help you decide on a major. Answering the following questions can help us do that: </p>

                        <label>Do you have have particular interest in any of the following programs?
                            <input

                            type="text-area"
                            name = "gsInterestedProgram"
                            placeholder=""
                            onChange={handleChange('gsInterestedProgram')}


                            />

                        </label>
                        <label>Do you have any specific career interests?
                            <input

                            type="text-area"
                            name = "gscareerInterest"
                            placeholder=""
                            onChange={handleChange("gscareerInterest")}


                            />

                        </label>

                        
                    </div>
                    
                    }

                    {gsprogOfInterest === "Multi Disciplinary Studies" &&
                    
                    <div>
                        <label>The MDS program allows you to choose 3 minors to develop your degree program. What minors are you interested in?
                            <input

                            type="text-area"
                            name = "gsInterestedMinor"
                            placeholder=""
                            onChange={handleChange('gsInterestedMinor')}


                            />

                        </label>
                        <label>Do you have any specific career interests?
                            <input

                            type="text-area"
                            name = "gscareerMDSInterest"
                            placeholder=""
                            onChange={handleChange("gscareerMDSInterest")}


                            />

                        </label>
                        
                        
                    </div>
                    
                    }




                    </div>}


                    {whoyouare1 === "Parent" && 
                    <div>
                    <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>

                    <label>Child(ren) Name(s) and Year in School:
                        <input

                        type="text"
                        name = "gschildrenName"
                        placeholder="Type your children name"
                        onChange={handleChange('gschildrenName')}
                        

                        />
                         <input

                        type="text"
                        name = "gsschoolYear"
                        placeholder="Year in school"
                        onChange={handleChange('gsschoolYear')}


                        />

                    </label>
                    <label>Hometown:
                        <input

                        type="text"
                        name = "gschildrenHometown"
                        placeholder="Hometown"
                        onChange={handleChange('gschildrenHometown')}
                        

                        />
                        </label>
                        <label> Home State: 
                         <input

                        type="text"
                        name = "gschildrenStateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('gschildrenStateCode')}


                        />

                    </label>





                    </div>}


                    {whoyouare1 === "Advisor" && 
                    <div>
                   <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>
                    <label>School Name:
                        <input

                        type="text"
                        name = "gsadvisorSchoolName"
                        placeholder="School name from UM"
                        onChange={handleChange('gsadvisorSchoolName')}
                        

                        />
                    

                    </label>
                    <label>Department:
                        <input

                        type="text"
                        name = "gsadvisorDepartment"
                        placeholder="Enter your department"
                        onChange={handleChange('gsadvisorDepartment')}
                        

                        />

                    </label>
                    
                    </div>}


                  

                
                    </div>



                
            </>
        )
    }
}
export default Page2;
