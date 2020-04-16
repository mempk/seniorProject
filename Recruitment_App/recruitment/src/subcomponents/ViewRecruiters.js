import React,{Component} from 'react';
import { render } from 'react-dom';
import ManageRecruiter from './ManageRecruiter';
import SignUpForm from '../forms/SignUpForm';
import AddAdminForm from '../forms/AddAdminForm';










class ViewRecruiters extends Component{

    state={
        showForm: false,
        showDetail: true,


    }

        addForm=()=>e=>{

        
            e.preventDefault();
            this.setState({showForm:!this.state.showForm, showDetail:!this.state.showDetail})

        }

        closeAddForm=()=>e=>{

            e.preventDefault();
            this.setState({showForm:!this.state.showForm, showDetail:!this.state.showDetail})

        }


    render(){
        let {showForm}= this.state;
        let {showDetail}= this.state;

        return(

            <>
            <div className="container">
            {showDetail && <>
            <button style={{margin:'0px 0px 10px 0px'}}class ="btn" onClick={this.addForm()}><b>Add New Recruiter</b></button> 
            
            <ManageRecruiter />
            </>
        
            }
           

            {showForm && <AddAdminForm closeAddForm ={this.closeAddForm}/>}

            </div>
            
            </>
        )
    }
}

export default ViewRecruiters;
