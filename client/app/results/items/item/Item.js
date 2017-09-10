import React from 'react';
import './item.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    render() {
        const item = this.state.item;
        let freeShipping = '';

        if(item.free_shipping) {
            freeShipping = <span className="free-shipping" title="Free shipping"/>;
        }

        return (
            <div className="item">
                <div className="image">
                    <a href={"/items/" + item.id}>
                        <img width="180" height="180" alt={item.title} src={item.picture} />
                    </a>
                </div>
                <div className="data">
                    <div className="price">
                        <span className="currency">
                            {item.price.symbol}
                        </span>
                        <span className="amount">
                            {item.price.amount}
                        </span>
                        {freeShipping}
                    </div>
                    <a className="title" href={"/items/" + item.id}>
                        <h2>
                            {item.title}
                        </h2>
                    </a>
                </div>
            </div>
        );
    }
}

export default Item;
