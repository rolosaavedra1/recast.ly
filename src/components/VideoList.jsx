import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import Search from '/compiled/src/components/Search.js';
import exampleVideoData from '/src/data/exampleVideoData.js';


//exampleVideoData array already present
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
