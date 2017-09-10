import React from 'react';
import axios from 'axios';

import SearchBox from '../common/searchbox/SearchBox';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import './detail.scss';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            itemId: props.location.pathname.split('/')[2],
            result: {}
        };
    }

    componentDidMount() {
        this.getitem();
    }

    render() {
        let content = <span className="loading">Loading...</span>;
        if(!this.state.loading) {
            content = this.renderDetail();
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

    renderDetail() {
        const result = this.state.result;
        const condition = result.condition === 'new' ? 'Nuevo' : 'Usado';
        return (
            <div className="detail">
                <div className="left">
                    <img width="680" alt={result.item.title} src={result.item.picture} />

                    <div className="description-container">
                        <h2 className="title">
                            Descripción del producto
                        </h2>

                        <p>{result.item.description}</p>
                    </div>
                </div>
                <div className="right">
                    <p className="product-detail">
                        {condition} - {result.item.sold_quantity} vendidos
                    </p>

                    <h1 className="title">
                        {result.item.title}
                    </h1>

                    <div className="price">
                        <span className="currency">
                            {result.item.price.symbol}
                        </span>
                        <span className="amount">
                            {result.item.price.amount}
                        </span>
                    </div>

                    <form>
                        <input type="submit" value="Comprar"/>
                    </form>
                </div>
            </div>
        );
    }

    async getitem() {
        const response = await axios.get(`/api/items/${this.state.itemId}`);
        this.setState({
            loading: false,
            result: response.data
        });
    }
}

export default Detail;
