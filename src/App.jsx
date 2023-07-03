import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';

export default function App() {
  return (
    <div className='flex flex-col gap-5 w-full p-10'>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
