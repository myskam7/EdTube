import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router';

import YouTubeSearchSample from "../DummyData/YouTubeSearchSample.json"

import "./dashboard.css";
import "./Search/Search.css"
import searchLogo from "../images/search-logo.png"


// let array = [];

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }
        this.callSearchApi = this.callSearchApi.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

// SUBMIT HANDLER
    callSearchApi(input) {
        input.preventDefault();
    if(this.state.text !== null){
        this.props.history.push({
            pathname: '/search',
            search: `?name=${this.state.text}`,
            text: this.state.text
          })
    }

        // array = [];
        // input = input.split(' ').join('+');

        //DEVELOPMENT SAMPLE
        // return this.props.dataHandler(YouTubeSearchSample.data);

        //CALL API
        // return axios.get(`/search?name=${this.state.text}`)
        //     .then((response) => {
    
        //         return this.props.dataHandler(response.data.data);
        //     })
        //     .catch(err => err)
    }

    inputHandler(e){
        e.preventDefault();
        this.setState({text: e.target.value})
    }

    render() {


    return (
        <>
                <div className="search-container" style={{margin: "auto"}}>
                    <form className="row" style={{display: "flex",
                        "flexDirection": "row"}}>
                        <input className="rectangle" onChange={e => this.inputHandler(e)} type="text"/>
                        <div>
                            <input src={searchLogo} className="ic-search" type="image" onClick={(e) => {
                                this.callSearchApi(e);
                                this.props.clearResults();
                            }}
                            />
                        </div>

                    </form>
                </div>
        </>
    );
    }
}


// const SearchBar = (props) => {
//
//     function callSearchApi() {
//         array = [];
//         return axios.get(`/search?name=${input}`)
//             .then((response) => {
//                 return props.dataHandler(response.data.data);
//             })
//             .catch(err => err)
//     }
//
//         return (
//             <div>
//                 <form>
//                     <li>Search</li>
//                     <input type="text"/>
//                     <input type="button" onClick={() => callSearchApi()} />
//                 </form>
//                 {/*{searchData}*/}
//
//                 {/*<div>{this.state.data.map(item => item.title)}</div>*/}
//                 x
//             </div>
//         );
//
// }

SearchBar.propTypes = {
    
};

export default withRouter(SearchBar);


