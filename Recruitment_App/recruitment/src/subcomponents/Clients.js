import React from 'react';
import axios from 'axios';
import AllInfo from './AllInfo';





class Clients extends React.Component{


    constructor(props){
        super(props);
        this.deleteCurrentClient = this.deleteCurrentClient.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.state={
            ClientsInfo:[],
            ClientsInfoOriginal:[],
            IndividualClient:{},
            userType:'',
            startdate:'',

        }

    }

    handleChange= input =>e=>{
        this.setState({[input]:e.target.value});
       
    }

    componentDidMount(){

        const url='http://localhost:4000/admin/viewdata';

        axios.get(url)
        .then((Response)=>{

            this.setState({
                ClientsInfo:Response.data,
                ClientsInfoOriginal:Response.data,
            })

        })
        .catch((error)=>{
            console.log(error);
        });
        
        

    }

    clearFilter(){


        this.setState({

            ClientsInfo:this.state.ClientsInfoOriginal,
            userType:'',
            startdate:'',
            enddate:'',

        })

    }

    applyFilter(){

        console.log("button clicked")



        if(this.state.userType !== ''){

            this.setState({
                ClientsInfo:this.state.ClientsInfo.filter(clientItem => clientItem.recruiterProgram === this.state.userType)
            })

        }

        else if(this.state.startdate !== ''){

            this.setState({
                ClientsInfo:this.state.ClientsInfo.filter(clientItem => clientItem.eventDate >= this.state.startdate)
            })

        }
        


       

    }

    deleteCurrentClient(item){
       

        console.log("button Clicked");
        console.log(item);



      
        const url = `http://localhost:4000/admin/${item}`;

        axios.delete(url).then((Response) =>{
            console.log(Response)
         

        }).catch((error)=>{
            console.log(error);
        });
      
        this.setState
        ({ClientsInfo:this.state.ClientsInfo.filter(clientItem => clientItem._id !== item),
          ClientsInfoOriginal:this.state.ClientsInfoOriginal.filter(clientItem => clientItem._id !== item)})
        
        console.log("button Clicked");


    }

    











    render(){
        return(



            <>

            <div className="container">

                <AllInfo client={this.state.ClientsInfo} deleteCurrentClient={this.deleteCurrentClient} handleChange={this.handleChange} applyFilter={this.applyFilter} clearFilter={this.clearFilter}/>


            </div>
            </>
        )
    }
}

export default Clients;

