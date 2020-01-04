import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import * as routes from '../Routes'
import Grid from '@material-ui/core/Grid'
import PageNav from '../Components/Navbar'
import PageHome from '../Components/Home'
import PageRegister from '../Components/Register'
import PageSignup from '../Components/Signup'
import PageSignin from '../Components/Signin'
import PageList from '../Components/List'

const Layout = () => {
  let location = useLocation()
  return (
    <>
      {location.pathname !== '/Page-signup'
        && location.pathname !== '/Page-signin'
        && <PageNav />
      }
      <Grid container alignContent="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
          <Route
            exact
            path={routes.HOME}
            component={() => <PageHome />}
          />
          <Route
            exact
            path={routes.REGISTER}
            component={() => <PageRegister />}
          />
          <Route
            exact
            path={routes.SIGNUP}
            component={() => <PageSignup />}
          />
          <Route
            exact
            path={routes.SIGNIN}
            component={() => <PageSignin />}
          />
          <Route
          exact
          path={routes.LIST}
          component={() => <PageList />}
        />
        </Grid>
      </Grid>
    </>
  )

}

export default Layout