import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function SummaryForm() {
  const [isChecked, setChecked] = useState(false);

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={() => setChecked(!isChecked)}
          label="I agree with the terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm
      </Button>
    </Form>
  );
}

export default SummaryForm;
