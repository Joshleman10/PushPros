import React, { Component } from 'react';
import { Table, Jumbotron, Button } from 'reactstrap';

const axios = require('axios');

class DataTable extends Component {
    state = {
        data: []
    };

    handleClick = async () => {
        let res = await axios.get("https://aimtell.com/files/sites.json");
        let data = res.data.sites;
        data.map(item => {
            this.state.data.push(item);
            this.setState({ data: this.state.data });
        })
    }

    render() {
        return (
            <Jumbotron>
                <h1>PushPros Sample Table</h1>
                <Button style={{ float: "right" }} color="primary" onClick={(e, name) => this.handleClick(e, name)}>Load Data</Button>            <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.url}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Jumbotron>
        );
    };
};

export default DataTable;