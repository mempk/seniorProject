import  {addNewClient} from '../controllers/AppController';



const routes = (app)=>{

    app.route('/generalstudies')
        .post(addNewClient);

}

export default routes;
