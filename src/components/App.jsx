import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';

import dataStatistics from '../components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import { FriendList } from './Friends/FriendList';
import friends from '../components/Friends/friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../components/Transaction/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
