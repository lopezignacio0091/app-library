import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { sessionStateSelector } from "../redux/login/selectors";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../app/pages/home/Home";
const AppRoute = () => {
  const sessionState = useSelector(sessionStateSelector);

  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/App/Common/Home"
          component={HomePage}
          isAuth={sessionState}
        />
        <ProtectedRoute
          path="/App/Common/MisOperaciones"
          component={HomePage}
          isAuth={sessionState}
        />
      </Switch>
    </>
  );
};

export default AppRoute;
