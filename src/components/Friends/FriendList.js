import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { ListOfFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => {
        return <Friend key={friend.id} item={friend} />;
      })}
    </ListOfFriends>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
