import React, {useEffect, useState} from 'react';
import Axios from './Axios.js';
import Video from './Components/Video';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        async function fetchPosts(){
            const res = await Axios.get('/videos');
            setVideos(res.data);

            return res;
        }

        fetchPosts();
    },[]);

  return (
    <div className="App">
        <div className="app_videos">

            {videos.map(
                ({url, channel, desc, song, likes, messages, shares}) =>
                (
                    <Video
                        url={url}
                        channel={channel}
                        desc={desc}
                        song={song}
                        likes={likes}
                        messages={messages}
                        shares={shares}
                    />
                )
            )}



        </div>
    </div>
  );
}

export default App;
