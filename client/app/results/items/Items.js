import React from 'react';
import './items.scss';

import Item from './item/Item';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: props.query,
            results: props.results
        };
    }

    render() {
        const items = [];

        this.state.results.slice(0,4).map((item) => {
            items.push(this.renderItem(item));
        });

        return (
            <ol className="items center">
                {items}
            </ol>
        );
    }

    renderItem(item) {
        return (
            <li key={"container-" + item.id}>
                <Item key={item.id} item={item}/>
            </li>
        );
    }
}

export default Items;
