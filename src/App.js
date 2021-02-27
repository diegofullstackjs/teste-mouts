import { ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import client from './config/client';
import Routes from './routes';

function App() {
  return (
   <ApolloProvider client={client}>
     <Header />
     <Routes />
   </ApolloProvider>
  );
}

export default App;
