<<<<<<< HEAD
export { default } from './GlobalStyles';
=======
import PropTypes from 'prop-types';

import './GlobalStyles.scss';

//Nạp Cấu Hình SCSS Cho React App
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
>>>>>>> 042438b148da7b8ab72209bb1e4d04271b2706cb
