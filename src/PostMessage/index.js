import './style.css';
import { useState } from 'react'

function PostMessage() {
    const [tweetMessage, setTweetMessage] = useState("");

    return (
        <div className='message-box'>

            <label htmlFor='tweetMessage'></label>
            <textarea
            id='tweetMessage'
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="tweet!!!"
            type="text" className='message-post'
            />
            
            <input type='submit' className='post-btn' />

        </div>
    );
}



export default PostMessage;