import React from 'react';
import './searchbox.scss';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value || ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <header>
                <div className="center">
                    <div className="logo">
                        <a href="/">Mercado Libre Argentina - Donde comprar y vender de todo</a>
                    </div>
                    <div className="searchbox">
                        <form className="form" id="search" action="/items" onSubmit={this.handleSubmit}>
                            <input value={this.state.value} onChange={this.handleChange} type="text" name="search" autoCapitalize="off" placeholder="Nunca dejes de buscar" autoComplete="off" />
                            <button type="submit" className="search">
                                <span className="icon"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        );
    }

    handleSubmit(event) {
        if(this.state.value == '') {
            event.preventDefault();
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
}

export default SearchBox;
