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



class PrecollegeForm extends Component{



  

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
            pcEventName:'',
            pcEventDate:'',
            pcSponsoringOrganization:'',
            pcLocationState:'',
            pcLocationCountry:'',
            pcLocationCity:'',




            
        
            //page 1
            firstName :'',
            lastName : '',
            emailAddress: '',
            progOfInterest: '',


    
            //Page 2
            whoyouAre:'',
            currentYearInSchool: '',
            schoolName: '',
            hometown:'',
            stateCode:'',
            schoolYear: '',
            childrenName:'',
            childrenStateCode: '',
            childrenHometown:'',
            counselorSchoolName: '',
            ageLevel: '',
            counselorState:'',
            counselorCity:'',
            teacherGradeLevel:'',
            teacherSchoolName:'',
            subject:'',
            teacherCity:'',
            teacherState:'',
            otherState:'',
            otherCity:'',


            //page3

            contactMedium:'',
            bestContactTime:'',
            phoneNumber:'',
            mailAddress1:'',
            mailAddress2:'',
            mailCity:'',
            mailState:'',
            mailZip:'',

            //page4

            topicIdea:'',
            aboutYou:'',
            SpecificQuestion:'',
    
        
        
        };
       

    

    

    showStep =()=>{
 
        const {step} = this.state;
        if(step === 1)
            return (<Page1 handleChange={this.handleChange} />);
        else if(step === 2)
            return (<Page2 handleChange={this.handleChange} whoyouare1 = {this.state.whoyouAre}/>);
        else if(step === 3)
            return (<Page3 handleChange={this.handleChange} contactMedium = {this.state.contactMedium}/>);
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
    submitEventInfo=()=>e=>{
        e.preventDefault();
        const {eventInfo} = this.state;
        this.setState({eventInfo:false})
        this.setState({showRest:true})
    }
    showNextArrow=()=>{
        const {step} = this.state;
        if(step != 4){
            return(<button onClick={this.stepIncrement} ><img className="frontArrow" src={nextArrow}/></button>);
        }

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

        const {showThankYou}= this.state;

        this.setState({showThankYou:!this.state.showThankYou})

      setTimeout(() => {

        this.setState({showThankYou:!this.state.showThankYou})

        
          
      },3000);

      this.setState({ step: 1});axios.post('http://localhost:4000/generalstudies',{


        recruiterFirstName:this.state.recruiterFirstName,
    
        recruiterLastName: this.state.recruiterLastName,
    
        recruiterProgram:this.state.recruiterProgram,
    
        recruiterEmailID:this.state.recruiterEmailID,
    
        eventName:this.state.pcEventDate,
    
        eventSponsor:this.state.pcSponsoringOrganization,
    
        eventDate:this.state.pcEventDate,
    
        eventState:this.state.pcEventDate,

        eventCity:this.state.pcLocationCity,
    
        eventCountry:this.state.pcLocationCountry,
    
    
        clientFirstName:this.state.firstName,
    
        clientLastName:this.state.lastName,
    
        clientEmailAddress:this.state.emailAddress,
    
        programofInterest:this.state.progOfInterest,
    
        whoYouAre:this.state.whoyouAre,
        
        currentYearInSchool:this.state.currentYearInSchool,
        
        schoolName:this.state.schoolName,
    
        schoolYear:this.state.schoolYear,
                
        schoolhometown:this.state.hometown,

        stateZipCode:this.state.stateCode,
                
        childrenName:this.state.childrenName,
        
        
        childrenStateCode:this.state.childrenStateCode,
    
        childrenHometown:this.state.childrenHometown,

        advisorSchoolName:'',

        advisorDepartment:'',
    
        counselorSchoolName:this.state.counselorSchoolName,

        InterestedProgram:'',
    
        careerInterest:'',

        InterestedMinor:'',

        ageLevel:this.state.ageLevel,

        counselorState:this.state.counselorState,

        counselorCity:this.state.counselorCity,
    
        teacherGradeLevel:this.state.teacherGradeLevel,
    
        teacherSchoolName:this.state.teacherSchoolName,

    
        subject:this.state.subject,
    
        teacherCity:this.state.teacherCity,
    
        teacherState:this.state.teacherState,
    
        otherState:this.state.otherState,

        otherCity:this.state.otherCity,

        contactMedium:this.state.contactMedium,

        bestContactTime:this.state.bestContactTime,

        phoneNumber:this.state.phoneNumber,

        mailAddress1:this.state.mailAddress1,

        mailAddress2:this.state.mailAddress2,

        mailCity:this.state.mailCity,

        mailState:this.state.mailState,

        mailZip:this.state.mailZip,


        topicIdea:this.state.topicIdea,

        aboutYou:this.state.aboutYou,

        SpecificQuestion:this.state.SpecificQuestion,
    
        

      }).then((Response)=>{
          console.log(Response)
      })
      .catch((error)=>{
          console.log(error);
      })

      this.setState({
      //page 1
      firstName :'',
      lastName : '',
      emailAddress: '',
      progOfInterest: '',



      //Page 2
      whoyouAre:'',
      currentYearInSchool: '',
      schoolName: '',
      hometown:'',
      stateCode:'',
      schoolYear: '',
      childrenName:'',
      childrenStateCode: '',
      childrenHometown:'',
      counselorSchoolName: '',
      ageLevel: '',
      counselorState:'',
      counselorCity:'',
      teacherGradeLevel:'',
      teacherSchoolName:'',
      subject:'',
      teacherCity:'',
      teacherState:'',
      otherState:'',
      otherCity:'',


      //page3

      contactMedium:'',
      bestContactTime:'',
      phoneNumber:'',
      mailAddress1:'',
      mailAddress2:'',
      mailCity:'',
      mailState:'',
      mailZip:'',

      //page4

      topicIdea:'',
      aboutYou:'',
      SpecificQuestion:'',

  
    
      })
     
    }
    render(){

        const {step} = this.state;



        return(

            


            <>
            

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
             

           

            </>
        )
    }



}
export default PrecollegeForm;