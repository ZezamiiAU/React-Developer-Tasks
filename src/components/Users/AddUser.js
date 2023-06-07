import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';
import {v4 as uuidv4} from 'uuid'

// let usersList = [];

const AddUser = () => {
	const [username, setUsername] = useState('')
	const [ age, setAge] = useState('')
	const [usersList,setUsersList] = useState([])
	const [usernameError, setUsernameError] = useState('')
	const [ageError, setAgeError] = useState('')

	
	//submit the user
	const submitHandler = (e) =>{
		e.preventDefault();
		setUsernameError('');
		setAgeError('');
	//handle errors
	if(username.trim().length === 0){
		setUsernameError("username can not be empty")
		return;
	}
	if(age.trim().length === 0){
		setAgeError("Age can not be empty")
		return;
	}
	if(Number(age) <= 0){
		setAgeError("Age can not be negative or Zero")
		return;
	}
		setUsersList(prev => {
			return [...prev,{username:username, age:age, id:uuidv4()}]
		})
		
		setUsername('')
		setAge('')
	}

	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={submitHandler} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
					{usernameError && <p className={classes.error}>{usernameError}</p>}
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
					{ageError && <p className={classes.error}>{ageError}</p>}
					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
			<UsersList users={usersList} />
		</div>
	);
};

export default AddUser;
