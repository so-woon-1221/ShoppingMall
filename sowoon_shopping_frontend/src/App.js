import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ItemInputPage from './pages/ItemInputPage';
import IndexPage from './pages/IndexPage';
import ItemPage from './pages/ItemPage';
import ItemListPage from './pages/ItemListPage';

function App() {
  return (
    <>
      <Route component={IndexPage} path={'/'} exact />
      <Route component={ItemInputPage} path={'/input'} />
      <Route component={ItemPage} path={'/item/:itemId'} />
      <Route component={ItemListPage} path={'/item'} exact />
    </>
  );
}

export default App;
