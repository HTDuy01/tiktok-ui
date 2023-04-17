import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { HomeIcon, UseGroupIcon, LiveIcon, HomeActiveIcon, UseGroupActiveIcon, LiveActiveIcon } from '~/components/Icon';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UseGroupIcon />} activeIcon={<UseGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
