import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from '../user-card';

export default function FollowTab({ type, userId }) {
  useEffect(() => {
    handlerUsers();
  }, []);
  const [users, setUsers] = useState([]);

  const handlerUsers = async () => {
    const followType = type === 'unfollow' ? 'following' : 'followers';
    const baseURL = process.env.NEXT_PUBLIC_URL_API + `friends/${followType}?user_id=${userId}`;
    const followers = await axios
      .get(baseURL)
      .then((response) => response.data)
      .then((data) => data.users)
      .catch((error) => console.error(error.message));
    setUsers(followers);
  };

  const blockUser = async (user) => {
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'friends/block';
    const isBlock = 1 - user.isBlock;
    await axios.put(baseURL, { user_id: user.friend_id, friend_id: user.user_id, isBlock });
    handlerUsers();
  };

  const unfollowUser = async (user) => {
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'friends';
    await axios.delete(baseURL, { data: { friend_id: user.friend_id, user_id: user.user_id } });
    handlerUsers();
  };

  return (
    <>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={`${user.first_name} ${user.last_name}`}
          location={user.localization}
          description={user.bio}
          unfollow={type === 'unfollow' ? true : false}
          blockUser={type === 'blockUser' && user.isBlock === 0 ? true : false}
          unblockUser={type === 'blockUser' && user.isBlock === 1 ? true : false}
          imageUrl={user['photo-url'] || 'https://noticias.gospelmais.com.br/files/2012/05/xaropinho.jpg'}
          onClick={() => {
            type === 'unfollow' ? unfollowUser(user) : blockUser(user);
          }}
        />
      ))}
    </>
  );
}
