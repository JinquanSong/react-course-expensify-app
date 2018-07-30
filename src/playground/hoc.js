// Higher order component (HOC) - A component that render another component
// Reuse code
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> The info is: { props.info } </p>
    </div>
);

const withAdminWaring = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWaring(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
      <div>
          {
              props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info</p>
          }
      </div>
  )
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info="'These are the detials" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated = {false} info="There are the details" />, document.getElementById('app'));
