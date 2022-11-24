import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <main>
            <h1>Hello {user.username}</h1>
            <h2>{user.signInUserSession.accessToken.payload["cognito:groups"]}</h2>
            <button onClick={signOut}>Sign out</button>
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
