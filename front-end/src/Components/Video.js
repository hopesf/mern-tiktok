import React, {useRef, useState} from 'react';
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Video({ url, channel, desc, song, likes, messages, shares }){
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const videoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return(
      <div className="video">
          <video
              onClick={videoPress}
              className="video_player"
              loop
              ref={videoRef}
              src={url}
          />

          <Footer
              channel={channel}
              desc={desc}
              song={song}
          />

          <Sidebar
              likes={likes}
              shares={shares}
              messages={messages}
          />
      </div>
    );
}

export default Video;