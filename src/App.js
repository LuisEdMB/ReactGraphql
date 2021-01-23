import { ApolloProvider } from '@apollo/client';
import { clientGraphql } from './services/graphql/ClientGraphql'
import './App.css';
import { TestView } from './views/TestView';

function App() {
  return (
    <ApolloProvider client = { clientGraphql }>
      <TestView />
    </ApolloProvider>
  );
}

export default App