import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

function CheckboxLabel() {
  return (
    <span>
      I agree to
      <OverlayTrigger
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Body>No ice cream will actually be delivered</Popover.Body>
          </Popover>
        }
      >
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
}

export default CheckboxLabel;
