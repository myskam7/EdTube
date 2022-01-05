import React, {Component} from 'react';
import "../FirstRow/FirstRow.css"

class PopularVideoButton extends Component {
    render() {
        const {id, img} = this.props
        return (
            <>
                <li key={id.videoId}>
                    <img className="x1-02" src={img} />
                </li>
            </>

        );
    }
}

export default PopularVideoButton;