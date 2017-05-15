import React from 'react';
import api from '../api';
import LinkStore from '../stores/LinkStore'

let _getAppState = () => {
    return { links: LinkStore.getAll() }; 
}
export default class LinkCollection extends React.Component {
    constructor(props){
        super(props);
        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }
    onChange(){
        console.log("4. In View");
        this.setState(_getAppState());
    }    
    componentWillUnmount(){
        LinkStore.removeListener('change', this.onChange);
    }    
    componentDidMount(){
        api.fetchLinks();
        LinkStore.on('change', this.onChange);
    }
    render(){
        let content = this.state.links.map(link => {
            return <li key={link._id}>
                    <a href={link.url}>{link.title}</a>
                   </li>;
        });

        return (
            <div>
                <h3>Links</h3>

                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}