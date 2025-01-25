import React from 'react';
import { useEffect } from 'react';
import { GlobalStore } from 'redux-micro-frontend';
import('sharedMFE/commonStyles');

const Dashboard = () => {
  const [users, setUsers] = React.useState([]);

  const globalStore = GlobalStore.Get(false);

  const stateChanged = (userState) => {
    console.log("stateChanged in dashboard", userState.UserApp);
    setUsers(userState.UserApp.users ? userState.UserApp.users : []);
  }

  useEffect(() => {
    // Subscribe to global state changes
    globalStore.SubscribeToGlobalState("UserApp", stateChanged);

    // Get the initial state
    const initialState = globalStore.GetGlobalState();
    if (initialState && initialState.UserApp) {
      setUsers(initialState.UserApp.users);
    }
  }, [globalStore]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', border: '8px solid blue', padding: '20px', width: '60%', height: '100%' }}>
      <span className='common-style'>Dashboard MFE App</span>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }} border={1}>
        <thead style={{ backgroundColor: 'darkgrey' }}>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;