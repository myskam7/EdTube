import React from "react";
import axios from 'axios';

import NavBar from "../NavBar";
import IconsChevronLeft from "../IconsChevronLeft";
import Comment from "../Comment";
import Result1Copy from "../Result1Copy";
import "./VideoPlayer.css";
import ReactPlayer from 'react-player/youtube'


class VideoPlayer extends React.Component {
  constructor(props){
    super(props)
    console.log('URL PARAMS:', props.location.state);
    
      this.state = {
        playlist: null,
        comments: [], 
        recommendation: null,
        isLoading: true
      }
  }

  componentDidMount() {
    Promise.all([
      axios.get(`/videoplayer_playlist`,{params: {
        title: this.props.location.state.title,
        channelId: this.props.location.state.channelId 
        }}),
      axios.get('/comments', {params: {id: this.props.location.state.id}})
    ]).then(([res1, res2]) => {
      console.log("res1", res1)
      console.log("res2", res2)
      this.setState({
        comments: res2.data,
        playlist: typeof res1.data !== String ? res1.data : null,
        isLoading: false
      })
      // return this.props.dataHandler(response.data.data);
  }).catch(err => err)

    //Return related playlist IF exists
    return 
  }

  // componentWillUnmount() {
  //   return null
  // }



  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   if (nextProps.location !== this.props.location) {
  //     // navigated!
  //   }
  // }
  
//   callSearchApi(input) {

//     array = [];
//     input = input.split(' ').join('+');

//     //DEVELOPMENT SAMPLE
//     return this.props.dataHandler(YouTubeSearchSample.data);

//     //CALL API
//     // return axios.get(`/videoplayer_playlist?title=${title}`)
//     //     .then((response) => {
    
//     //         return this.props.dataHandler(response.data.data);
//     //     })
//     //     .catch(err => err)
// }


  render() {
    const {
      player,
      icNotification,
    //   placeholderAvatar,
    //   netflixDcouvert,
    //   codeNinja,
    //   andrzejWajdaRoman,
    //   icDropdown,
    //   address,
    //   jeunesse,
    //   leaveacomment,
    //   logoNetflix,
    //   iconsChevronLeftProps,
    //   iconsChevronLeftProps2,
    //   iconsChevronLeft2Props,
    //   commentProps,
    //   comment2Props,
    //   comment3Props,
    //   comment4Props,
    //   result1CopyProps,
    //   result1Copy2Props,
    //   result1Copy3Props,
    //   result1Copy4Props,
    //   iconsChevronLeft3Props,
    } = this.props;

    const {id, channelId, title} = this.props.location.state


    console.log("props",this.state.comments)
    const {isLoading} = this.state;


    return !isLoading && (

      <div class="container-center-horizontal">
        <div className="videoplayer screen">
        
          <div className="flex-row-7">
            <div className="flex-col-9">
              <IconsChevronLeft  />
              <div className="player" style={{width:"100%", height:"100%", backgroundImage: `url(${player})` }}>
                {/* <img className="ic-play-copy-4-2" src={icNotification} /> */}
            
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />

              </div>
              <div className="description-2">
                <div className="overlap-group-2">
                  {/* <img className="ic-play-4" src={placeholderAvatar} /> */}
                  <div className="title-channel-desc">
                    <div className="flex-col-10">
                      {/* <div className="netflix-dcouvert-3">{netflixDcouvert}</div> */}
                      {/* <div className="code-ninja-1 helveticaneue-normal-new-car-14px">{codeNinja}</div>
                      <p className="andrzej-wajda-roman-3">{andrzejWajdaRoman}</p> */}
                    </div>
                    {/* <IconsChevronLeft src={iconsChevronLeft2Props.src} className={iconsChevronLeft2Props.className} /> */}
                  </div>
                </div>
              </div>
              <div className="comment-section">
                {/* <img className="line-1" src={icDropdown} />
                // <div className="address">{address}</div> */}
                <div className="overlap-group1-3">
                  <div className="addcomment">
                    {/* <div className="oval-5-copy-2"></div> */}
                    <form action="">
                      <input type="text" />
                      <button>Submit</button>
                    </form>
                    {/* <div className="text-2">{jeunesse}</div> */}
                  </div>

                  {/* <div className="leave-a-comment" style={{ backgroundImage: `url(${leaveacomment})` }}></div> */}
                {/* </div> */}
                <div>
                <ul className="ul-style">
                <Comment comment={[this.state.comments]} />
                </ul>
                </div>
               
                {
                  // !isLoading ? ( <Comment comment={[this.state.comments[0].data]} />) : (<div>...Loading</div>)
                  // this.state.comments.data.map(comment => (
                   

                  // ))
                
                }

                {/* <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment andrzejWajdaRoman={commentProps.andrzejWajdaRoman} reply={commentProps.reply} />
                <Comment
                  andrzejWajdaRoman={comment2Props.andrzejWajdaRoman}
                  reply={comment2Props.reply}
                  className={comment2Props.className}
                />
                <Comment
                  andrzejWajdaRoman={comment3Props.andrzejWajdaRoman}
                  reply={comment3Props.reply}
                  className={comment3Props.className}
                />
                <Comment
                  andrzejWajdaRoman={comment4Props.andrzejWajdaRoman}
                  reply={comment4Props.reply}
                  className={comment4Props.className}
                /> */}
              </div>
            </div>
            <div className="more-videos">
              <div className="overlap-group5">
                {/* <Result1Copy
                  hq7202={result1CopyProps.hq7202}
                  netflixDcouvert={result1CopyProps.netflixDcouvert}
                  codeNinja={result1CopyProps.codeNinja}
                  icPlayCopy={result1CopyProps.icPlayCopy}
                />
                <Result1Copy
                  hq7202={result1Copy2Props.hq7202}
                  netflixDcouvert={result1Copy2Props.netflixDcouvert}
                  codeNinja={result1Copy2Props.codeNinja}
                  icPlayCopy={result1Copy2Props.icPlayCopy}
                  className={result1Copy2Props.className}
                />
                <Result1Copy
                  hq7202={result1Copy3Props.hq7202}
                  netflixDcouvert={result1Copy3Props.netflixDcouvert}
                  codeNinja={result1Copy3Props.codeNinja}
                  icPlayCopy={result1Copy3Props.icPlayCopy}
                  className={result1Copy3Props.className}
                />
                <Result1Copy
                  hq7202={result1Copy4Props.hq7202}
                  netflixDcouvert={result1Copy4Props.netflixDcouvert}
                  codeNinja={result1Copy4Props.codeNinja}
                  icPlayCopy={result1Copy4Props.icPlayCopy}
                  className={result1Copy4Props.className}
                /> */}
                {/* <img className="rectangle-3" src={logoNetflix} /> */}
                {/* <IconsChevronLeft src={iconsChevronLeft3Props.src} className={iconsChevronLeft3Props.className} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}

export default VideoPlayer;
