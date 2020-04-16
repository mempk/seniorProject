import React,{Component} from 'react';
import Delete  from '../images/delete.png'
import fire from '../auth/firebase';
import adminAuth from '../auth/adminUser';



class RecruiterDetailPrinter extends Component{

    constructor(props){

        super(props);
        this.deleteRecruiter = this.deleteRecruiter.bind(this);
        this.setUserID = this.setUserID.bind(this);
  
        this.state={

            adminUID:'',
            newUserID:props.userID,
           


        }
       
    }


    componentDidMount(){


        fire.database().ref("Users").orderByChild("userType").equalTo("Admin").on("value",snapshot => {

            if (snapshot.exists()){
                snapshot.forEach(child=>
                    {this.setState({adminUID:child.key})})

              console.log("Admin account already created");
              this.setState({showAdmin:false});
            
             
            }
            else{
                console.log("Admin account not created")
            }
        })
        
        
        
    }


    




    deleteRecruiter=()=>e=>{

        

        e.preventDefault();
       

        
       




        //fire.database().ref().child("Users").child(this.state.adminUID).child("Recruiters").child(this.state.newUserID).remove();
        adminAuth.auth().deleteUser(this.state.newUserID)
        .then(function(){

            console.log("Sucessfull")

        }).catch(function(error){

            console.log(error)

        })


        console.log(this.state.adminUID);
        console.log(this.state.newUserID)

    
        

       





    }

    setUserID=input=>e=>{

        this.setState({newUserID:input});

    }

render(){


    const {firstName} = this.props;
    const {lastName} = this.props;
    const {email} = this.props;
    const {userType} = this.props;




    return(

        <>

        {this.state.userID}

        <div className="recruiterContainer">

            <div className="row recruiterDetails">

            <div className="col-lg-3 col-md-12 col-sm-12 text-center recruiterName detailText">{firstName} {lastName}</div>
            <div className="col-lg-4 col-md-12 col-sm-12 text-center detailText">{email}</div>
            <div className="col-lg-3 col-md-12 col-sm-12 text-center detailText">{userType}</div>
            <div className="col-lg-2 col-md-12 col-sm-12 text-center "><button onClick={this.deleteRecruiter()} className="deleteButton"><img class className="deleteIcon" src={Delete} alt ="delete icon"/></button></div>

            </div>

        </div>

    





        </>








    )
}


}
export default RecruiterDetailPrinter;