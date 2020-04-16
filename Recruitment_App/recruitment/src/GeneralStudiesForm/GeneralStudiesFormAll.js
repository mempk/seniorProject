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





class GeneralStudiesFormAll extends Component{



  

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
             gsEventName:'',
             gsEventDate:'',
             gsSponsoringOrganization:'',
             gsLocationState:'',
             gsLocationCountry:'',
             gsLocationCity:'',
            
        
            //page 1
            gsfirstName :'',
            gslastName : '',
            gsemailAddress: '',
            gsprogOfInterest: '',


    
            //Page 2
            gswhoyouAre:'',
            gscurrentYearInSchool: '',
            gsschoolName: '',
            gshometown:'',
            gsstateCode:'',
            gsschoolYear: '',
            gschildrenName:'',
            gschildrenStateCode: '',
            gschildrenHometown:'',
            gsadvisorSchoolName: '',
            gsadvisorDepartment: '',
            gsInterestedProgram:'',
            gscareerInterest:'',
            gsInterestedMinor:'',

            

            //page3

            gscontactMedium:'',
            gsbestContactTime:'',
            gsphoneNumber:'',
            gsmailAddress1:'',
            gsmailAddress2:'',
            gsmailCity:'',
            gsmailState:'',
            gsmailZip:'',
            gsInterestedProgram:'',

            //page4

        
            gsaboutYou:'',
            gsSpecificQuestion:'',
    
        
        
        };
       

    

    

    showStep =()=>{
 
        const {step} = this.state;
        if(step === 1)
            return (<Page1 handleChange={this.handleChange} />);
        else if(step === 2)
            return (<Page2 handleChange={this.handleChange} whoyouare1 = {this.state.gswhoyouAre} gsprogOfInterest={this.state.gsprogOfInterest}/>);
        else if(step === 3)
            return (<Page3 handleChange={this.handleChange} gscontactMedium = {this.state.gscontactMedium}/>);
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
    submitEventInfo=()=>e=>{
        e.preventDefault();
        const {eventInfo} = this.state;
        this.setState({eventInfo:false})
        this.setState({showRest:true})
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

    showSubmitStep=()=>{

        const {step} = this.state;
        if(step === 1 ||step === 2 ||step === 3 || step === 4 )
            return ( <div><br></br><button onClick={this.moveToFirstPage} className="btn btn-primary-success formSucess">Submit now <br/>Thanks so much for sharing with us!</button>
                     </div>
            );

    }

    moveToFirstPage=(event)=>{

        event.preventDefault();



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
    
        eventName:this.state.gsEventDate,
    
        eventSponsor:this.state.gsSponsoringOrganization,
    
        eventDate:this.state.gsEventDate,
    
        eventState:this.state.gsEventDate,

        eventCity:this.state.gsLocationCity,
    
        eventCountry:this.state.gsLocationCountry,
    
    
        clientFirstName:this.state.gsfirstName,
    
        clientLastName:this.state.gslastName,
    
        clientEmailAddress:this.state.gsemailAddress,
    
        programofInterest:this.state.gsprogOfInterest,
    
        whoYouAre:this.state.gswhoyouAre,
        
        currentYearInSchool:this.state.gscurrentYearInSchool,
        
        schoolName:this.state.gsschoolName,
    
        schoolYear:this.state.gsschoolYear,
                
        schoolhometown:this.state.gshometown,

        stateZipCode:this.state.gsstateCode,
                
        childrenName:this.state.gschildrenName,
        
        
        childrenStateCode:this.state.gschildrenStateCode,
    
        childrenHometown:this.state.gschildrenHometown,

        advisorSchoolName:this.state.gsadvisorSchoolName,

        advisorDepartment:this.state.gsadvisorDepartment,
    
        counselorSchoolName:'',

        InterestedProgram:this.state.gsInterestedProgram,
    
        careerInterest:this.state.gscareerInterest,

        InterestedMinor:this.state.gsInterestedMinor,

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

        contactMedium:this.state.gscontactMedium,

        bestContactTime:this.state.gsbestContactTime,

        phoneNumber:this.state.gsphoneNumber,

        mailAddress1:this.state.gsmailAddress1,

        mailAddress2:this.state.gsmailAddress2,

        mailCity:this.state.gsmailCity,

        mailState:this.state.gsmailState,

        mailZip:this.state.gsmailZip,


        topicIdea:'',

        aboutYou:this.state.gsaboutYou,

        SpecificQuestion:this.state.gsSpecificQuestion,
    
        

      }).then((Response)=>{
          console.log(Response)
      })
      .catch((error)=>{
          console.log(error);
      })

      this.setState({
        gsEventName:'',
             gsEventDate:'',
             gsSponsoringOrganization:'',
             gsLocationState:'',
             gsLocationCountry:'',
             gsLocationCity:'',
            
        
            //page 1
            gsfirstName :'',
            gslastName : '',
            gsemailAddress: '',
            gsprogOfInterest: '',


    
            //Page 2
            gswhoyouAre:'',
            gscurrentYearInSchool: '',
            gsschoolName: '',
            gshometown:'',
            gsstateCode:'',
            gsschoolYear: '',
            gschildrenName:'',
            gschildrenStateCode: '',
            gschildrenHometown:'',
            gsadvisorSchoolName: '',
            gsadvisorDepartment: '',
            gsInterestedProgram:'',
            gscareerInterest:'',
            gsInterestedMinor:'',

            

            //page3

            gscontactMedium:'',
            gsbestContactTime:'',
            gsphoneNumber:'',
            gsmailAddress1:'',
            gsmailAddress2:'',
            gsmailCity:'',
            gsmailState:'',
            gsmailZip:'',
            gsInterestedProgram:'',

            //page4

        
            gsaboutYou:'',
            gsSpecificQuestion:'',
      
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
export default GeneralStudiesFormAll;