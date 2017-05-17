import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import login from '../index';
import messages from '../messages';

describe('<login />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <login />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
