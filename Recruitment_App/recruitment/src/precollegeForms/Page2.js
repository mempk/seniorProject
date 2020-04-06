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

                  

                    <br>
                    </br>
                    <label className="ro-text">I am :
                       
                        <select
                        name="whoyouAre" 
                        onChange =  {handleChange('whoyouAre')}
                        >
                        <option value="">Tell us who you are</option>
                        <option value="Student">Student</option>
                        <option value="Parent">Parent</option>
                        <option value="Counselor">Counselor</option>
                        <option value="Teacher">Teacher</option>
                        <option value="SCHS">SCHS</option>
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
                        name="currentYearInSchool" 
                        onChange =  {handleChange('currentYearInSchool')}
                        >
                        <option value="">Select your year in school</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>

                        </select>
                        
                    </label>


                    <label>School Name:
                        <input

                        type="text"
                        name = "schoolName"
                        placeholder="Enter your school name"
                        onChange={handleChange('schoolName')}
                        

                        /> 
                    </label>

                    <label>Hometown:
                        <input

                        type="text"
                        name = "hometown"
                        placeholder="Hometown"
                        onChange={handleChange('hometown')}
                        

                        />
                        </label>
                        <label>Home State:
                         <input

                        type="text"
                        name = "stateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('stateCode')}


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
                        name = "childrenName"
                        placeholder="Type your children name"
                        onChange={handleChange('childrenName')}
                        

                        />
                         <input

                        type="text"
                        name = "schoolYear"
                        placeholder="Year in school"
                        onChange={handleChange('schoolYear')}


                        />

                    </label>
                    <label>Hometown:
                        <input

                        type="text"
                        name = "childerHometown"
                        placeholder="Hometown"
                        onChange={handleChange('childrenHometown')}
                        

                        />
                        </label>
                        <label> Home State: 
                         <input

                        type="text"
                        name = "childrenStateCode"
                        placeholder="Enter your state name"
                        onChange={handleChange('childrenStateCode')}


                        />

                    </label>





                    </div>}


                    {whoyouare1 === "Counselor" && 
                    <div>
                   <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>
                    <label>School Name:
                        <input

                        type="text"
                        name = "counselorSchoolName"
                        placeholder="School name goes here"
                        onChange={handleChange('counselorSchoolName')}
                        

                        />
                    

                    </label>
                    <label>Age Level of student body:
                        <input

                        type="text"
                        name = "ageLevel"
                        placeholder=""
                        onChange={handleChange('ageLevel')}
                        

                        />

                    </label>
                    <label>Location:
                        <input

                        type="text"
                        name = "counselorCity"
                        placeholder="Enter the name of the city"
                        onChange={handleChange('counselorCity')}
                        

                        />
                        <input

                        type="text"
                        name = "counselorState"
                        placeholder="Enter your state name"
                        onChange={handleChange('counselorState')}


                        />

                    </label>





                    </div>}


                    {whoyouare1 === "Teacher" && 

                    <div>
                   <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>


                    <label>Grade level:
                        <select
                        name="teacherGradeLevel" 
                        onChange =  {handleChange('teacherGradeLevel')}
                        >
                        <option value="">Select your year in school</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>

                        </select>
                        
                    </label>

                    <label>School Name:
                        <input

                        type="text"
                        name = "teacherSchoolName"
                        placeholder="School name goes here"
                        onChange={handleChange('teacherSchoolName')}
                        

                        />
                    

                    </label>
                    <label>Subject:
                        <input

                        type="text"
                        name = "subject"
                        placeholder=""
                        onChange={handleChange("subject")}
                        

                        />

                    </label>
                    <label>City:
                        <input

                        type="text"
                        name = "teacherCity"
                        placeholder="Enter the name of the city"
                        onChange={handleChange('teacherCity')}
                        

                        />
                        </label>
                        <label>State:
                        <input

                        type="text"
                        name = "teacherState"
                        placeholder="Enter your state name"
                        onChange={handleChange('teacherState')}


                        />

                    </label>





                    </div>}

                    {whoyouare1 === "Other" && 

                    <div>

                

                    <h2>If Other</h2>

                    <br></br>
                        <h1> You Chose {whoyouare1} Option</h1>
                        <br></br>

                    <label>Who you are:
                        <input

                        type='text'
                        placeholder="Enter the name of the city"
                        name="whoyouAre" 
                        onChange =  {handleChange('whoyouAre')}
                        

                        />
                    </label>

                    
                    <label>Hometown:
                        <input

                        type="text"
                        name = "otherCity"
                        placeholder="Enter the name of the city"
                        onChange={handleChange('otherCity')}
                        

                        />
                        </label>

                        <label>Home State:
                        <input

                        type="text"
                        name = "otherState"
                        placeholder="Enter your state name"
                        onChange={handleChange('otherState')}

                        />


                    </label>



                    </div>}

                    </div>



                
            </>
        )
    }
}
export default Page2;
