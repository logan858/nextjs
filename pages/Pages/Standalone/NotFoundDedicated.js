import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../Templates/appStyles-jss';
import { ErrorWrap } from '../../../components';
import { injectIntl, intlShape } from 'react-intl';
import messages from '../../../components/Error/messages';

function NotFoundDedicated(props) {
  const { classes, intl } = props;
  return (
    <div className={classNames(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        <ErrorWrap title="404" invert desc={intl.formatMessage(messages.title404)} />
      </main>
    </div>
  );
}

NotFoundDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default (withStyles(styles)(injectIntl(NotFoundDedicated)));
