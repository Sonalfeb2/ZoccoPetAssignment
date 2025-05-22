import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReminderList from './features/reminders/ReminderList';
import { Layout, Typography } from 'antd';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout >
        <Header style={{color:'white'}}>
          Daily Pet Reminders
        </Header>
        <Content >
          <ReminderList />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;