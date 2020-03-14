import React,{Component} from 'react';
import fire from '../auth/firebase';



class  Recruiter extends Component {
    constructor(props){
        super(props);
        this.signOut=this.signOut.bind(this);
    }

    signOut=({event})=>{
      
        fire.auth().signOut().then(()=> {

            this.props.history.push('/')

            console.log("User Sign Out")

    })}

    render()

    {
        return(
            <div><h1>This is recruiter page</h1>
            <button onClick={this.signOut}>SignOut</button></div>
        )
    }
}


export default Recruiter;