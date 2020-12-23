import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
	const [ post, setPost ] = useState([]);
	const [ input, setInput ] = useState('');
	useEffect(
		() => {
			db.collection('posts').onSnapshot((snapshot) => {
				setPost(
					snapshot.docs.map((doc) =>
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data()
						}))
					)
				);
			});
		},
		[ post ]
	);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection('post').add({
			name: 'Walid Younis',
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionsIcon} title="Photo" color="#E7A33E" />
					<InputOption Icon={EventNoteIcon} title="Photo" color="#C0CBCD" />
					<InputOption Icon={CalendarViewDayIcon} title="Photo" color="#7fC15E" />
				</div>
			</div>
			{post.map(({ id, data: { name, description, message, photoUrl } }) => {
				return(

					<Post key={id} name={name} description={description} message={message}  />
				)
				
			})}
			<Post name="Walid Younis" description="This is a test" message="this is a message" />
		</div>
	);
}

export default Feed;
