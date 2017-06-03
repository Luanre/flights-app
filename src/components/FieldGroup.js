import React from 'react';
import * as BS from 'react-bootstrap';

export default function FieldGroup({ id, label, help, ...props }) {
  return (
    <BS.FormGroup controlId={id}>
      <BS.ControlLabel>{label}</BS.ControlLabel>
      <BS.FormControl {...props} />
      {help && <BS.HelpBlock>{help}</BS.HelpBlock>}
    </BS.FormGroup>
  );
}