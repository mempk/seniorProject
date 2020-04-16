import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/RecruitmentRoutes';
import routes1 from './routes/RecruitmentRoutes2';
import deleteRoutes from './routes/deleteRoutes'



const app = express();
const PORT = 4000;

//mongo connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://csci202:Olemiss@2020@cluster0-x0tez.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})


//bodyparser setup

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


app.use(cors());


routes(app);
routes1(app);
deleteRoutes(app);



app.get('/',(req,res)=>{
     res.send(`Our Recruitment Application is running ${PORT}`)
})

app.listen(PORT,()=>{

    console.log('Recruitment server running on port ')
})
