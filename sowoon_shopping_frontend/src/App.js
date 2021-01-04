import './App.css';
import { Route } from 'react-router-dom';
import ItemInputPage from './pages/ItemInputPage';
import SearchPage from './pages/SearchPage';
import ItemPage from './pages/ItemPage';
import ItemListPage from './pages/ItemListPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Route component={ItemListPage} path={'/'} exact />
      <Route component={ItemInputPage} path={'/input'} />
      <Route component={ItemPage} path={'/item/:itemId'} />
      <Route component={ItemListPage} path={'/item'} exact />
      <Route component={SearchPage} path={'/search/:keyword'} />
      <Route component={LoginPage} path={'/login'} />
    </>
  );
}

export default App;
