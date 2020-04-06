import React,{Component} from 'react';
import PrecollegeForm from '../precollegeForms/PrecollegeForm';


class PreCollege extends Component {

    render(){
        
        return(

            <>
            <div className="App" style={"style",{"margin":50,}}>

            <PrecollegeForm />
            </div>
            </>
        )
    }


}

export default PreCollege;