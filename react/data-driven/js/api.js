import {post} from 'jquery';
import ServerAction from './actions/ServerActions';

let api = {
    fetchLinks(){
        post('/graphql', {
            query: `{ 
                links{ 
                    _id, 
                    title, 
                    url 
                }
            }`
        }).done(resp => {
            console.log('1. Invoking action')
            ServerAction.receiveLinks(resp.data.links);
        });        
    }    
};

export default api;