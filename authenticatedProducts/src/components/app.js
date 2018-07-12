import React, { Component } from 'react';
import { TabContent, Nav } from 'reactstrap';
import PublicPage from './publicPage';
import PrivatePage from './privatePage';
import TabInnerContent from './tabInnerContent';
import NavItemContent from './navItemContent';
import LegacyNavBar from './legacyNavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <LegacyNavBar />
        <Nav tabs>
          <NavItemContent tabId="1" activeTabId={activeTab} toggle={tabId => this.toggle(tabId)} title="Public page" />
          <NavItemContent tabId="2" activeTabId={activeTab} toggle={tabId => this.toggle(tabId)} title="Private page" />
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabInnerContent tabId="1">
            <PublicPage />
          </TabInnerContent>
          <TabInnerContent tabId="2">
            <PrivatePage />
          </TabInnerContent>
        </TabContent>
      </div>
    );
  }
}

export default App;
