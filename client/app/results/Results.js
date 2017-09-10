import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import SearchBox from '../common/searchbox/SearchBox';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Items from "./items/Items";

import './results.scss';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: queryString.parse(props.location.search).search,
            results: [],
            loading: true
        };
    }

    componentDidMount() {
        this.getResults();
    }

    render() {
        let content = <span className="loading">Loading...</span>;
        if(!this.state.loading) {
            content = <Items query={this.state.query} results={this.state.results}/>;
        }
        return (
            <div>
                <SearchBox value={this.state.query}/>
                <main className="center">
                    <Breadcrumb/>
                    {content}
                </main>
            </div>
        );
    }

    async getResults() {
        const response = await axios.get(`/api/items?q=${this.state.query}`);
        this.setState({
            loading: false,
            results: response.data.items
        });
    }
}

export default Results;
