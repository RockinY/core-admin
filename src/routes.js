import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
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
import {
  ProductNavigationWrapper,
  PageWrapper
} from './styles'

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
            <PageWrapper>
              <Switch>
                <Route exact path='/' component={Dashboard} />
              </Switch>
            </PageWrapper>
          </LayoutManager>
        </NavigationProvider>
      </Router>
    )
  }
}

export default Routes