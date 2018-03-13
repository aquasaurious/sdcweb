import React, { Component } from 'react';
import Winterfell from 'winterfell';

import schema from '../schema.json';

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};
var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers[0]);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log(target);
};

class Epworth extends Component {
    render() {
        return (
        <Winterfell schema={schema}
            disableSubmit={false}
            onRender={onRender}
            onUpdate={onUpdate}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit} />

        )
    }
}



export default Epworth;