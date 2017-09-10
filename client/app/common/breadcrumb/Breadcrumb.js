import React from 'react';
import './breadcrumb.scss';

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="breadcrumb">
                <ol>
                    <li>
                        <a title="Electrónica, Audio y Video" href="#">
                            <span>Electrónica, Audio y Video</span>
                        </a>
                    </li>
                    <span className="chevron">></span>
                    <li>
                        <a title="iPod" href="#">
                            <span>iPod</span>
                        </a>
                    </li>
                    <span className="chevron">></span>
                    <li>
                        <a title="Reproductores" href="#">
                            <span>Reproductores</span>
                        </a>
                    </li>
                    <span className="chevron">></span>
                    <li>
                        <a title="iPod touch" href="#">
                            <span>iPod touch</span>
                        </a>
                    </li>
                    <span className="chevron">></span>
                    <li>
                        <span>32 GB</span>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Breadcrumb;
