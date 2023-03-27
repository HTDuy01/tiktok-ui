import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { MailBoxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <img src={images.language} alt="language" />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <img src={images.question} alt="question" />,
            title: 'Feedback and Help ',
            to: '/feedback',
        },
        {
            icon: <img src={images.keyboard} alt="keyboard" />,
            title: 'Keyboard shortcut',
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <img src={images.user} alt="user" />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <img src={images.coin} alt="coin" />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <img src={images.setting} alt="setting" />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <img src={images.logout} alt="logout" />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="MailBox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBoxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1679043600&x-signature=3uLYi8jF%2Bf7DgMpnXul8K7SLcik%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van a"
                                // fallback="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/333045181_601317735207298_4556693562166128126_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uAgQYuClCc4AX93G3Gj&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAmRysF2RFMUyQpAy0qelJnpqQQKxQeMTfOnndRcxaDkg&oe=64175347"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
