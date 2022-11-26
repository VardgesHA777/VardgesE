import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/theme';
import { RoutesData } from './routes/RoutesData';
import { RoutesNames } from './routes/RoutesNames';
import { StoreProvider } from './contexts/store';
import { VersionProvider } from './contexts/Version';
import ErrorSuccessHandling from './components/Base/ErrorSuccessHandling';
import Version from './components/Base/Version';
import './App.css';

interface Props {
  component: () => JSX.Element | null;
  path: string;
  exact: boolean;
}

function App() {
  const PrivateRoute = ({ component: Component, ...rest }: Props) => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return <Route {...rest} render={(props: any) => (user ? <Component {...props} /> : <Redirect to='/' />)} />;
  };

  const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return (
      <Route
        {...rest}
        render={(props: any) => (user ? <Redirect to={RoutesNames.properties} /> : <Component {...props} />)}
      />
    );
  };

  const finalArray = [];

  const convertToWholeArray = (deepArray: number | (number | (number[] | number)[])[]) => {
    if (typeof deepArray !== "number") {
      deepArray.map((item) => {
        return console.log('item', item);
        if (typeof item !== 'string') {
          return convertToWholeArray(item)
        }
      });
    }
  };


  return (
    <StoreProvider>
      <VersionProvider>
        <>
          <Router>
            <ErrorSuccessHandling>
              <ThemeProvider theme={theme}>
                <Switch>
                  {RoutesData.map((route, index) => {
                    const { path, exact, component, isPrivate } = route;
                    return isPrivate ? (
                      <PrivateRoute path={path} exact={exact} component={component} key={index.toString()} />
                    ) : (
                      <PublicRoute path={path} exact={exact} component={component} key={index.toString()} />
                    );
                  })}
                </Switch>
              </ThemeProvider>
            </ErrorSuccessHandling>
          </Router>
          <Version />
        </>
      </VersionProvider>
    </StoreProvider>
  );
}

export default App;
