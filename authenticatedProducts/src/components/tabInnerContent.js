import React from 'react';
import { TabPane, Row, Col } from 'reactstrap';

const TabInnerContent = ({ tabId, children }) => (
  <TabPane tabId={tabId}>
    <Row>
      <Col sm="12">
        {children}
      </Col>
    </Row>
  </TabPane>
);

export default TabInnerContent;
