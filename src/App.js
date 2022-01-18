import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegisterPage';
import RequireAuth from './Components/RequireAuth';
import ShowArticlePage from './Pages/ShowArticlePage';
import CreateArticlePage from './Pages/CreateArticlePage';
import UpdateUserPage from './Pages/UpdateUserPage';
import UpdatePasswordPage from './Pages/UpdatePasswordPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import MapPage from './Pages/MapPage';
import { MapProvider } from './Provider/MapProvider';
import { ArticleProvider } from './Provider/ArticleProvider';
import { UserProvider } from './Provider/UserProvider';
function App() {
  return (
        <BrowserRouter>
          <UserProvider>
            <ArticleProvider>
              <Routes>
                  <Route path="/login" element={<LoginPage/>} > </Route>
                  <Route path="/registration" element={
                    <RegistrationPage/>
                  } ></Route>
                  <Route path="/user-info" element={
                    <RequireAuth><UpdateUserPage></UpdateUserPage></RequireAuth>
                  } ></Route>
                  <Route path="/update-password" element={
                    <RequireAuth><UpdatePasswordPage></UpdatePasswordPage></RequireAuth>
                  } ></Route>
                  <Route path="/articles" element={
                    <RequireAuth><ArticlePage/></RequireAuth>
                  } ></Route>
                  <Route path="/articles/:id" element={
                    <RequireAuth><ShowArticlePage></ShowArticlePage></RequireAuth>
                  } ></Route>
                  <Route path="/articles/create" element={
                    <RequireAuth><CreateArticlePage></CreateArticlePage></RequireAuth>
                  } ></Route>
                  <Route path="*" element={
                  <NotFoundPage/>}></Route>
              </Routes>
              <MapProvider>
                <MapPage/>
              </MapProvider>
              </ArticleProvider>
          </UserProvider>
        </BrowserRouter>
    );
}

export default App;
