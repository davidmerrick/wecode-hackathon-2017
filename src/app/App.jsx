import React from 'react';
import ReactDOM from 'react-dom';
import ResourceTable from '../components/ResourcesTable.jsx'
import Constants from '../constants/Constants'
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database")

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: []
        };
    }

    componentDidMount(){
        firebase.initializeApp(Constants.FIREBASE_CONFIG);
        let resourcesRef = firebase.database().ref('/v3/resource/resource');
        let resourceArray = [];
        resourcesRef.once('value', snapshot => {
            snapshot.forEach(item => resourceArray.push(item.val()));
            this.setState({
                resources: resourceArray
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Resources</h1>
                <ResourceTable resources={this.state.resources} />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('app'));
});

export default App;