import PropTypes from 'prop-types';

import s from './Title.module.css';
export const Title = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
