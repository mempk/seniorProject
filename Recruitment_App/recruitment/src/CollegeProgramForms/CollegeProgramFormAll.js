import React,{ Component } from "react";
import Page1 from "./Page1";
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import form from '../css/form.css';
import nextArrow from '../images/nextArrow.png';
import backArrow from '../images/backArrow.png';
import RecruiterInfo from './RecruiterInfo';
import ThankYouPage from '../subcomponents/ThankYouPage';
import axios from 'axios';




class CollegeProgramFormAll extends Component{



  

        state = { 
            
            step: 1,
            eventInfo: true,
            showRest: false,
            showThankYou:false,

            //Recruiters Info

            recruiterFirstName:'',
            recruiterLastName:'',
            recruiterProgram:'',
            recruiterEmailID:'',

             //Event Info
            cpEventName:'',
            cpEventDate:'',
            cpSponsoringOrganization:'',
            cpLocationState:'',
            cpLocationCountry:'',
            cpLocationCity:'',
            
        
            //page 1
            cpfirstName :'',
            cplastName : '',
            cpemailAddress: '',
            cpprogOfInterest: '',


    
            //Page 2
            cpwhoyouAre:'',
            cpcurrentYearInSchool: '',
            cpschoolName: '',
            cphometown:'',
            cpstateCode:'',
            cpschoolYear: '',
            cpchildrenName:'',
            cpchildrenStateCode: '',
            cpchildrenHometown:'',
            advisorSchoolName: '',
            advisorDepartment: '',
            

            //page3

            cpcontactMedium:'',
            cpbestContactTime:'',
            cpphoneNumber:'',
            cpmailAddress1:'',
            cpmailAddress2:'',
            cpmailCity:'',
            cpmailState:'',
            cpmailZip:'',
            cpInterestedProgram:'',

            //page4

            cptopicIdea:'',
            cpaboutYou:'',
            cpSpecificQuestion:'',
    
        
        
        };
       

    

    

    showStep =()=>{
 
        const {step} = this.state;
        if(step === 1)
            return (<Page1 handleChange={this.handleChange} />);
        else if(step === 2)
            return (<Page2 handleChange={this.handleChange} whoyouare1 = {this.state.cpwhoyouAre}/>);
        else if(step === 3)
            return (<Page3 handleChange={this.handleChange} contactMedium = {this.state.cpcontactMedium}/>);
        else if(step === 4)
            return (<Page4 handleChange={this.handleChange}/>);
            



    }

  

   
    stepIncrement=()=>{

        const {step} = this.state;


    
        this.setState({ step: step + 1});
    }
    stepDecrement =()=>{

        const {step} = this.state;

        this.setState({ step: step - 1});
     

    }

    handleChange= input =>e=>{
        this.setState({[input]:e.target.value});
        this.setState({yourOccupation: this.props.yourOccupation})


    }
    showNextStep=()=>{
        const {step} = this.state;
        if(step !== 4)
            if(step === 1)
            return ( <button onClick={this.stepIncrement} className="btn btn-primary-success form">Have a little more time?</button>);
            else if(step === 2)
            return (  <button onClick={this.stepIncrement} className="btn btn-primary-success form">Can you spare a second more?</button>
                        );

            else if(step === 3)
            return ( <button onClick={this.stepIncrement} className="btn btn-primary-success form">One last thing</button>
                        );
           

    }

    showPreviousStep=()=>{

        const {step} = this.state;
        if(step !== 1)
            return ( <button onClick={this.stepDecrement} ><img className="backArrow" src={backArrow}/></button>);

    }
    showNextArrow=()=>{
        const {step} = this.state;
        if(step != 4){
            return(<button onClick={this.stepIncrement} ><img className="frontArrow" src={nextArrow}/></button>);
        }

    }
    submitEventInfo=()=>e=>{
        e.preventDefault();
        const {eventInfo} = this.state;
        this.setState({eventInfo:false})
        this.setState({showRest:true})
    }

    showSubmitStep=()=>{

        const {step} = this.state;
        if(step === 4)
            return ( <div><br></br><button onClick={this.moveToFirstPage} className="btn btn-primary-success form">Thanks so much for sharing with us!</button>
                     {}</div>
            );

    }

    showSubmitStep=()=>{

        const {step} = this.state;
        if(step === 1 ||step === 2 ||step === 3 || step === 4 )
            return ( <div><br></br><button onClick={this.moveToFirstPage} className="btn btn-primary-success formSucess">Thanks so much for sharing with us!</button>
                     {}</div>
            );

    }

    moveToFirstPage=()=>{

        

        this.setState({showThankYou:!this.state.showThankYou})

      setTimeout(() => {

        this.setState({showThankYou:!this.state.showThankYou})

        
          
      },3000);

      this.setState({ step: 1});

      axios.post('http://localhost:4000/generalstudies',{


        recruiterFirstName:this.state.recruiterFirstName,
    
        recruiterLastName: this.state.recruiterLastName,
    
        recruiterProgram:this.state.recruiterProgram,
    
        recruiterEmailID:this.state.recruiterEmailID,
    
        eventName:this.state.cpEventDate,
    
        eventSponsor:this.state.cpSponsoringOrganization,
    
        eventDate:this.state.cpEventDate,
    
        eventState:this.state.cpEventDate,

        eventCity:this.state.cpLocationCity,
    
        eventCountry:this.state.cpLocationCountry,
    
    
        clientFirstName:this.state.cpfirstName,
    
        clientLastName:this.state.cplastName,
    
        clientEmailAddress:this.state.cpemailAddress,
    
        programofInterest:this.state.cpprogOfInterest,
    
        whoYouAre:this.state.cpwhoyouAre,
        
        currentYearInSchool:this.state.cpcurrentYearInSchool,
        
        schoolName:this.state.cpschoolName,
    
        schoolYear:this.state.cpschoolYear,
                
        schoolhometown:this.state.cphometown,

        stateZipCode:this.state.cpstateCode,
                
        childrenName:this.state.cpchildrenName,
        
        
        childrenStateCode:this.state.cpchildrenStateCode,
    
        childrenHometown:this.state.cpchildrenHometown,

        advisorSchoolName:this.state.advisorSchoolName,

        advisorDepartment:this.state.advisorDepartment,
    
        counselorSchoolName:'',

        InterestedProgram:this.state.cpInterestedProgram,
    
        careerInterest:'',

        InterestedMinor:'',

        ageLevel:'',
        counselorState:'',

        counselorCity:'',
    
        teacherGradeLevel:'',
    
        teacherSchoolName:'',

    
        subject:'',
    
        teacherCity:'',
    
        teacherState:'',
    
        otherState:'',

        otherCity:'',

        contactMedium:this.state.cpcontactMedium,

        bestContactTime:this.state.cpbestContactTime,

        phoneNumber:this.state.cpphoneNumber,

        mailAddress1:this.state.cpmailAddress1,

        mailAddress2:this.state.cpmailAddress2,

        mailCity:this.state.cpmailCity,

        mailState:this.state.cpmailState,

        mailZip:this.state.cpmailZip,


        topicIdea:this.state.cptopicIdea,

        aboutYou:this.state.cpaboutYou,

        SpecificQuestion:this.state.cpSpecificQuestion,
    
        

      }).then((Response)=>{
          console.log(Response)
      })
      .catch((error)=>{
          console.log(error);
      })

      this.setState({
        cpfirstName :'',
            cplastName : '',
            cpemailAddress: '',
            cpprogOfInterest: '',


    
            //Page 2
            cpwhoyouAre:'',
            cpcurrentYearInSchool: '',
            cpschoolName: '',
            cphometown:'',
            cpstateCode:'',
            cpschoolYear: '',
            cpchildrenName:'',
            cpchildrenStateCode: '',
            cpchildrenHometown:'',
            advisorSchoolName: '',
            advisorDepartment: '',
            

            //page3

            cpcontactMedium:'',
            cpbestContactTime:'',
            cpphoneNumber:'',
            cpmailAddress1:'',
            cpmailAddress2:'',
            cpmailCity:'',
            cpmailState:'',
            cpmailZip:'',
            cpInterestedProgram:'',

            //page4

            cptopicIdea:'',
            cpaboutYou:'',
            cpSpecificQuestion:'',
    
      })
     
    }
    


    render(){

        const {step} = this.state;



        return(

            


            <>
             <div className="container">
            

            {this.state.eventInfo && !this.state.showThankYou &&
             <RecruiterInfo handleChange={this.handleChange} submitEventInfo={this.submitEventInfo}/>}

             {!this.state.showThankYou && this.state.showRest &&

             <>
               <div style={{backgroundColor:'rgb(45,128,210)',marginLeft:'auto',marginRight:'auto',width:'160px',color:'white', padding:'10px 0px', borderRadius:'5%'}}><h5>Step : {step}/4</h5></div> 

                {this.showStep()}
                <div className='row'>

                    <div className="col-lg-4 col-md-4 col-sm-12">{this.showPreviousStep()}</div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center">{this.showNextStep()}</div>
                    <div className="col-lg-4 col-md-4 col-sm-12">{this.showNextArrow()}</div>
                
                </div>

                
                
                {this.showSubmitStep()}

                

            </>
              
             }

             {this.state.showThankYou && <ThankYouPage />}
             

           
             </div>
            </>
        )
    }



}
export default CollegeProgramFormAll;