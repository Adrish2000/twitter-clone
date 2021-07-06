import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Adrish Saha",
            userName: "adrish",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/182375750_2817567038496595_4794859052107046487_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jizG0zGPcgAAX8Wvejw&_nc_ht=scontent.fccu3-1.fna&oh=ea8994ff6bb3b98d5d82bb7dc485b617&oe=60E8DB64",
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/182375750_2817567038496595_4794859052107046487_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jizG0zGPcgAAX8Wvejw&_nc_ht=scontent.fccu3-1.fna&oh=ea8994ff6bb3b98d5d82bb7dc485b617&oe=60E8DB64'/>
                    <input placeholder="What's happening" type='text' onChange={e => setTweetMessage(e.target.value)}
                           value={tweetMessage}/>
                </div>
                <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'
                       value={tweetImage} onChange={e => setTweetImage(e.target.value)}/>
                <Button className='tweetBox__tweetButton' type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
