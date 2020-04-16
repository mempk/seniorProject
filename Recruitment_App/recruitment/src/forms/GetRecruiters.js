import React ,{ Component,useState} from 'react';
import fire from '../auth/firebase';





class GetRecruiters extends Component{

 

        state={
            adminUID:'',
    
        }
    


    
   


            
    componentDidMount(){

        fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {
            if (snapshot.exists()){
                snapshot.forEach(child=>
                    {this.setState({adminUID:child.key})})}});




        var ref = fire.database().ref().child("Users").child(this.state.adminUID).child("Recruiters");

        var type = ref.on('value', snap=>{
               
         if(snap.exists()){
             console.log(snap.val())
         }
    })
}
    
    


  
      
          

    
    render(){


        return(

        <div className="Container">

            <h4> Read from database</h4>

        
        </div>

        )
    }


}

export default GetRecruiters;
