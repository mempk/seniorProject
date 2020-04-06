import React,{Component} from 'react';


class Page2 extends Component{

    

   customOption= input =>e=>{
        this.setState({[input]:e.target.value})


    }

    

    render(){

        const {whoyouare1} = this.props;


        
        const {handleChange} = this.props;
        

        

        return(
            <>
           
                <div class="container formContainer"> 


                    <br>
                    </br>
                    <label class="ro-text">I am :
                       
                        <select
                        name="cpwhoyouAre" 
                        onChange =  {handleChange('cpwhoyouAre')}
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
                        name="cpcurrentYearInSchool" 
                        onChange =  {handleChange('currentYearInSchool')}
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
                        name = "cpschoolName"
                        placeholder="Enter your school/university name"
                        onChange={handleChange('cpschoolName')}
                        

                        /> 
                    </label>

                    <label>Hometown:
                        <input

                        type="text"
                        name = "cphometown"
                        placeholder="Hometown"
                        onChange={handleChange('cphometown')}
                        

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




                    </div>}


                    {whoyouare1 === "Parent" && 
                    <div>
                    <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>

                    <label>Child(ren) Name(s) and Year in School:
                        <input

                        type="text"
                        name = "cpchildrenName"
                        placeholder="Type your children name"
                        onChange={handleChange('cpchildrenName')}
                        

                        />
                         <input

                        type="text"
                        name = "cpschoolYear"
                        placeholder="Year in school"
                        onChange={handleChange('cpschoolYear')}


                        />

                    </label>
                    <label>Hometown:
                        <input

                        type="text"
                        name = "cpchildrenHometown"
                        placeholder="Hometown"
                        onChange={handleChange('cpchildrenHometown')}
                        

                        />
                        </label>
                        <label> Home State: 
                         <input

                        type="text"
                        name = "cpchildrenStateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('cpchildrenStateCode')}


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
                        name = "advisorSchoolName"
                        placeholder="School name from UM"
                        onChange={handleChange('advisorSchoolName')}
                        

                        />
                    

                    </label>
                    <label>Department:
                        <input

                        type="text"
                        name = "advisorDepartment"
                        placeholder="Enter your department"
                        onChange={handleChange('advisorDepartment')}
                        

                        />

                    </label>
                    
                    </div>}


                  

                
                    </div>



                
            </>
        )
    }
}
export default Page2;
