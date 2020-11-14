import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ItemInputPage from './pages/ItemInputPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <>
      <Route component={IndexPage} path={'/'} exact></Route>
      <Route component={ItemInputPage} path={'/input'} />
    </>
  );
}

export default App;
