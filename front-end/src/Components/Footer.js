import React from "react";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function Footer({ channel, desc, song }){
    return (
        <div className="footer">
            <div className="text">
                <h3>@{channel}</h3>
                <p>{desc}</p>

                <div className="video_ticker">
                    <MusicNoteIcon className="icon"/>

                    <Ticker mode="smooth">
                        {({index}) =>(
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="record"
                src="https://static.thenounproject.com/png/934821-200.png" alt=""
            />
        </div>);
}

export default Footer;