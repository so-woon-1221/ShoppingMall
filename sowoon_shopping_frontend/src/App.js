import './App.css';
import { Route } from 'react-router-dom';
import ItemInputPage from './pages/ItemInputPage';
import SearchPage from './pages/SearchPage';
import ItemPage from './pages/ItemPage';
import ItemListPage from './pages/ItemListPage';
import Login from './components/indexPage/Login';

function App() {
  return (
    <>
      <Route component={ItemListPage} path={'/'} exact />
      <Route component={ItemInputPage} path={'/input'} />
      <Route component={ItemPage} path={'/item/:itemId'} />
      <Route component={ItemListPage} path={'/item'} exact />
      <Route component={SearchPage} path={'/search/:keyword'} />
      <Route component={Login} path={'/login'} />
    </>
  );
}

export default App;
