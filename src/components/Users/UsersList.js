import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({users}) => {
	return (
		<Card className={classes.users}>
			<ul>
				{users.length > 0 ?
					
					users.map(user=>(

						<li key={user.id}>{user.username} ({user.age} years old)</li>
					))
					:
					<p>There are no users yet</p>
				}
			</ul>
		</Card>
	);
};

export default UsersList;
