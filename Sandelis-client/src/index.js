import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './components/Navigation/NavigationComponent';
import ClientListContainer from './components/Clients/ClientListContainer';
import NewClientFormContainer from './components/Clients/NewClientFormContainer';
import ClientInventoryContainer from './components/Clients/ClientInventoryContainer';
import NewClientInventoryFormContainer from './components/Clients/NewClientInventoryFormContainer';


var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return (
    <div>
      Route did not match<br></br>
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavigationComponent />
          <Switch>
            <Route exact path='/' component={ClientListContainer} />
            <Route exact path='/klientai/prideti' component={NewClientFormContainer} />
            <Route exact path='/klientai/:id' component={ClientInventoryContainer} />
            <Route exact path='/klientai/:id/prideti' component={NewClientInventoryFormContainer} />
            <Route path="*" component={NoMatch} />
          </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
