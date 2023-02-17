import PropTypes from 'prop-types';
import {
  Container,
  TitleStatistics,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const StatElems = ({ data }) => {
    return data.map(({ label, percentage, id }) => {
      return (
        <ListItem key={id}>
          <Label>{label} </Label>
          <Percentage>{percentage}%</Percentage>
        </ListItem>
      );
    });
  };

  return (
    <Container>
      {title && <TitleStatistics>{title}</TitleStatistics>}
      <List>
        <StatElems data={stats} />
      </List>
    </Container>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
