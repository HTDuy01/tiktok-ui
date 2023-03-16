import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Button from '~/components/Button';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import AccountItem from '~/components/AccountItem';
import Image from '~/components/Image';
import 'tippy.js/dist/tippy.css'; // optional
import { MailBoxIcon, MessageIcon, UploadIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

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

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

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
                <img src={images.logo} alt="tiktok" />
                <HeadlessTippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos " spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

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
