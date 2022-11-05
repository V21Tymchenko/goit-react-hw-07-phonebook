import PropTypes from 'prop-types';

import s from './MainButton.module.css';

export const Button = ({
  type = 'button',
  disabled = false,
  children,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      {...otherProps}
      className={s.contactsButton}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
