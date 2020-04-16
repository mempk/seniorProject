import {deleteClientInfo} from '../controllers/deleteController';


const deleteRoutes = (app)=>{

    app.route('/admin/:ClientID')
        .delete(deleteClientInfo);
        
}

export default deleteRoutes;