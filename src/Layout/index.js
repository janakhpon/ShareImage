import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import * as routes from '../Routes'
import Grid from '@material-ui/core/Grid'
import PageNav from '../Components/Navbar'
import PageHome from '../Components/Home'
import PageRegister from '../Components/Register'

const Layout = () => {
  let location = useLocation()
  return (
    <>
      {location.pathname !== '/Page-signup'
        && location.pathname !== '/Page-signin'
        && <PageNav />
      }
      <Grid container alignItems='center' alignContent="flex-start" justify="center">
        <Grid item>
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
        </Grid>
      </Grid>
    </>
  )

}

export default Layout