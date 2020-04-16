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


class OutreachAll extends Component{



  

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
             oEventName:'',
             oEventDate:'',
             oSponsoringOrganization:'',
             oLocationState:'',
             oLocationCountry:'',
             oLocationCity:'',
            
        
            //page 1
            otfirstName :'',
            otlastName : '',
            otemailAddress: '',
            otprogOfInterest: '',


    
            //Page 2
            otwhoyouAre:'',
            otcurrentYearInSchool: '',
            otschoolName: '',
            othometown:'',
            otstateCode:'',
            otschoolYear: '',
            otchildrenName:'',
            otchildrenStateCode: '',
            otchildrenHometown:'',
           


            //page3

            otcontactMedium:'',
            otbestContactTime:'',
            otphoneNumber:'',
            otmailAddress1:'',
            otmailAddress2:'',
            otmailCity:'',
            otmailState:'',
            otmailZip:'',

            //page4

            ottopicIdea:'',
            otaboutYou:'',
            otSpecificQuestion:'',
    
        
        
        };
       

    

    

    showStep =()=>{
 
        const {step} = this.state;
        if(step === 1)
            return (<Page1 handleChange={this.handleChange} />);
        else if(step === 2)
            return (<Page2 handleChange={this.handleChange} whoyouare1 = {this.state.otwhoyouAre}/>);
        else if(step === 3)
            return (<Page3 handleChange={this.handleChange} contactMedium = {this.state.otcontactMedium}/>);
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
    submitEventInfo=()=>e=>{
        e.preventDefault();
        const {eventInfo} = this.state;
        this.setState({eventInfo:false})
        this.setState({showRest:true})
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

      this.setState({ step: 1});

      axios.post('http://localhost:4000/generalstudies',{


        recruiterFirstName:this.state.recruiterFirstName,
    
        recruiterLastName: this.state.recruiterLastName,
    
        recruiterProgram:this.state.recruiterProgram,
    
        recruiterEmailID:this.state.recruiterEmailID,
    
        eventName:this.state.oEventDate,
    
        eventSponsor:this.state.oSponsoringOrganization,
    
        eventDate:this.state.oEventDate,
    
        eventState:this.state.oEventDate,

        eventCity:this.state.oLocationCity,
    
        eventCountry:this.state.oLocationCountry,
    
    
        clientFirstName:this.state.otfirstName,
    
        clientLastName:this.state.otlastName,
    
        clientEmailAddress:this.state.otemailAddress,
    
        programofInterest:this.state.otprogOfInterest,
    
        whoYouAre:this.state.otwhoyouAre,
        
        currentYearInSchool:this.state.otcurrentYearInSchool,
        
        schoolName:this.state.otschoolName,
    
        schoolYear:this.state.otschoolYear,
                
        schoolhometown:this.state.othometown,

        stateZipCode:this.state.otstateCode,
                
        childrenName:this.state.otchildrenName,
        
        
        childrenStateCode:this.state.otchildrenStateCode,
    
        childrenHometown:this.state.otchildrenHometown,

        advisorSchoolName:'',

        advisorDepartment:'',
    
        counselorSchoolName:'',

        InterestedProgram:'',
    
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

        contactMedium:this.state.otcontactMedium,

        bestContactTime:this.state.otbestContactTime,

        phoneNumber:this.state.otphoneNumber,

        mailAddress1:this.state.otmailAddress1,

        mailAddress2:this.state.otmailAddress2,

        mailCity:this.state.otmailCity,

        mailState:this.state.otmailState,

        mailZip:this.state.otmailZip,


        topicIdea:this.state.ottopicIdea,

        aboutYou:this.state.otaboutYou,

        SpecificQuestion:this.state.otSpecificQuestion,
    
        

      }).then((Response)=>{
          console.log(Response)
      })
      .catch((error)=>{
          console.log(error);
      })

      this.setState({
        otfirstName :'',
        otlastName : '',
        otemailAddress: '',
        otprogOfInterest: '',



        //Page 2
        otwhoyouAre:'',
        otcurrentYearInSchool: '',
        otschoolName: '',
        othometown:'',
        otstateCode:'',
        otschoolYear: '',
        otchildrenName:'',
        otchildrenStateCode: '',
        otchildrenHometown:'',
       


        //page3

        otcontactMedium:'',
        otbestContactTime:'',
        otphoneNumber:'',
        otmailAddress1:'',
        otmailAddress2:'',
        otmailCity:'',
        otmailState:'',
        otmailZip:'',

        //page4

        ottopicIdea:'',
        otaboutYou:'',
        otSpecificQuestion:'',

    
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
export default OutreachAll;