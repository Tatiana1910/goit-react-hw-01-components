import PropTypes from 'prop-types';
import {
  Container,
  UserThumb,
  Avatar,
  UserName,
  UserTag,
  Location,
  Label,
  StatList,
  StatListItem,
  LabelValue,
} from './Profile.styled';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <UserThumb>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Location>{location}</Location>
      </UserThumb>

      <StatList>
        <StatListItem>
          <Label>Followers</Label>
          <LabelValue>{followers}</LabelValue>
        </StatListItem>
        <StatListItem>
          <Label>Views</Label>
          <LabelValue>{views}</LabelValue>
        </StatListItem>
        <StatListItem>
          <Label>Likes</Label>
          <LabelValue>{likes}</LabelValue>
        </StatListItem>
      </StatList>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
