
import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import IntervalHookCouter from './components/IntervalHookCouter';

import App2 from './components/context/App'

import DataFetchingOne from './components/DataFetchingOne';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <App2 /> */}
      <DataFetchingOne />
    </div>
  );
}

export default App;
