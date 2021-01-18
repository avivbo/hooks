
import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import DataFetching from './components/DataFetching';
import IntervalHookCouter from './components/IntervalHookCouter';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Aviv'}>
        <ChannelContext.Provider value={'Channel'}>
          <ComponentA />
        </ChannelContext.Provider>

      </UserContext.Provider>
    </div>
  );
}

export default App;
