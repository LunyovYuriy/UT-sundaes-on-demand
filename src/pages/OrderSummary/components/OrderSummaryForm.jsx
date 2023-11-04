import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CheckboxLabel from './CheckboxLabel';

function SummaryForm() {
  const [isChecked, setChecked] = useState(false);

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={() => setChecked(!isChecked)}
          label={<CheckboxLabel />}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm
      </Button>
    </Form>
  );
}

export default SummaryForm;