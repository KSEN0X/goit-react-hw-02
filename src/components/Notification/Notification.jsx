// library  prop-types
import PropTypes from 'prop-types';

const Notification = ({ notification }) => {
  return <p>{notification}</p>;
};
export default Notification;

// propTypes
Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
