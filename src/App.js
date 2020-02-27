import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Header from './components/Header';

//Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
