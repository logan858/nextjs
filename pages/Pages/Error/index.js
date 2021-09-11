import React from 'react';
import { Helmet } from 'react-helmet';
import brand from '../../api/dummy/brand';
import { ErrorWrap } from '../../../components';
import { injectIntl, intlShape } from 'react-intl';
import messages from '../../../components/Error/messages';

const title = brand.name + ' - Aplication Error';
const description = brand.desc;

function Error(props) {
  const { intl } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <ErrorWrap title="500" desc={intl.formatMessage(messages.title502)} />
    </div>
  );
}

Error.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Error);
