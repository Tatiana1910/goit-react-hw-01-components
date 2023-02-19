import PropTypes from 'prop-types';
import { FriendItem, Avatar, FriendName, Status } from './Friend.styled';

export const Friend = ({ item: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

Friend.prototype = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
