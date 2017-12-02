import React from 'react';

class ResourcesTable extends React.Component {

    constructor(props) {
        super(props);
    }

    getResourceRows(){
        let resourceRows = this.props.resources.map(item => {
            return (
                <tr data-toggle="collapse" data-target="#accordion1" className="clickable">
                    <th scope="row">1</th>
                    <td>{item.title}</td>
                    <td><a href="/">Website</a></td>
                    <td>12-1-2017</td>
                    <td><a href=""><i className="fa fa-thumbs-up" aria-hidden="true"></i></a> / <a href="/"><i
                        className="fa fa-thumbs-down" aria-hidden="true"></i></a></td>
                    <td><a href="/">Comments(0)</a></td>
                </tr>
            );
        });

        return resourceRows;
    };

    render() {
        let resourceRows = this.getResourceRows();
        return (
            <table>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Resource Name</th>
                    <th scope="col">URL</th>
                    <th scope="col">Date</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Comments</th>
                </tr>
                </thead>
                <tbody>
                    {resourceRows}
                </tbody>
            </table>
        );
    }
}

ResourcesTable.defaultProps = {
    resources: []
}

export default ResourcesTable;