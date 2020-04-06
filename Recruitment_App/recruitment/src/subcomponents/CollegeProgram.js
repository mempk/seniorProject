import React,{Component} from 'react';
import CollegeProgramFormAll from '../CollegeProgramForms/CollegeProgramFormAll';



class CollegeProgram extends Component {


  render(){
    return(

      <>
      <div className="App" style={"style",{"margin":50,}}>
      <CollegeProgramFormAll />
      </div>
      </>
    )
  }
} 

export default CollegeProgram;