import React from 'react';
import './home.scss';

import SearchBox from '../common/searchbox/SearchBox';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBox/>
            </div>
        );
    }
}

export default Home;
