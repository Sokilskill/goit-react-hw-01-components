import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from '../Statistics/Statistics.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className="friend-list">
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              // {...friend} розпилення або
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
