import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import styled from 'styled-components'
import Dashboard from './views/dashboard'
import createBrowserHistory from 'history/createBrowserHistory'
import {
  NavigationProvider,
  LayoutManager,
  Item,
  Section
} from '@atlaskit/navigation-next';
import GlobalNavigation from '@atlaskit/global-navigation';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import { Logo } from './components/logo'

const history = createBrowserHistory()

/* Global Navigation */
const CustomGlobalNavigation = () => (
  <GlobalNavigation
    productIcon={Logo}
    productTooltip='云社'
    onProductClick={() => {}}
  />
);

/* Product Navigation */
const ProductNavigationWrapper = styled.div`
  padding: 16px 0;
`
const CustomProductNavigation = () => (
  <ProductNavigationWrapper>
    <Section>
      {({ className }) => (
        <div className={className}>
          <Item before={DashboardIcon} text="概况" />
        </div>
      )}
    </Section>
  </ProductNavigationWrapper>
)

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <NavigationProvider>
          <LayoutManager
            globalNavigation={CustomGlobalNavigation}
            productNavigation={CustomProductNavigation}
            containerNavigation={null}
          >
            <div style={{ padding: '32px 40px' }}>
              <Switch>
                <Route exact path='/' component={Dashboard} />
              </Switch>
            </div>
          </LayoutManager>
        </NavigationProvider>
      </Router>
    )
  }
}

export default Routes