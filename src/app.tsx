import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import Table from './components/table';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/month" component={Table} />
          <Redirect to="/month" />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
