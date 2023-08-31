import styles from './Sidebar.module.scss';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { HomeIcon, UseGroupIcon, LiveIcon, HomeActiveIcon, UseGroupActiveIcon, LiveActiveIcon } from '~/components/Icon';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import * as userService from '~/services/userService';
import * as followService from '~/services/followService';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((err) => console.log(err));
    }, []);

    // useEffect(() => {
    //     followService
    //         .getFollower({ page: 1 })
    //         .then((data) => {
    //             // setFollowers((prevUsers) => [...prevUsers, ...data]);
    //             console.log(data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UseGroupIcon />} activeIcon={<UseGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested Accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following" data={followers} />
        </aside>
    );
}

export default Sidebar;
