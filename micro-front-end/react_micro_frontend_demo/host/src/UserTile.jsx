import React from 'react';
import { GlobalStore } from 'redux-micro-frontend';

const UserTile = () => {

  const [userCount, setUserCount] = React.useState(0);

  const globalStore = GlobalStore.Get(false);
  const stateChanged = (userState) => {
    console.log("users in host", userState.UserApp);
    setUserCount(userState.UserApp.users ? userState.UserApp.users.length : 0);
  }
  
  globalStore.SubscribeToGlobalState("UserApp", stateChanged);

  return (
      <h2>User Count: {userCount}</h2>
  );
};

export default UserTile;
