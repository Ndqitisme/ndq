import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {
    faKeyboard,
    faLightbulb,
    faAddressCard,
    faBell,
} from '@fortawesome/free-regular-svg-icons';

import {
    LanguageIcon,
    BrightnessIcon,
    ChatDotsIcon,
    PencilSquare,
    GearIcon,
    CastIcon,
    HalfIcon,
    MoonStarIcon,
} from '~/components/Icons';

export const ACTION_ITEMS = [
    {
        content: 'Đăng Bài Viết',
        icon: <PencilSquare height="22px" width="22px" />,
        to: '/post',
        class: 'action-btn-1',
    },
    {
        content: 'Phát Trực Tiếp',
        icon: <CastIcon height="22px" width="22px" />,
        to: '/livestreaming',
        class: 'action-btn-2',
    },
    {
        content: 'Tin Nhắn',
        icon: <ChatDotsIcon height="22px" width="22px" />,
        to: '/message',
        class: 'action-btn-3',
    },
    {
        content: 'Thông Báo',
        icon: <FontAwesomeIcon icon={faBell} />,
        to: '/notification',
        class: 'action-btn-4',
    },
];

export const MENU_ITEMS = [
    {
        type: 'languageParrent',
        icon: <LanguageIcon height="20px" width="20px" />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'zh-chs',
                    title: '中国话 (中国)',
                },
                {
                    type: 'language',
                    code: 'zh-cht',
                    title: '中國話 (台灣)',
                },
            ],
        },
    },
    {
        type: 'dark-light-mode',
        icon: <HalfIcon height="18px" width="18px" />,
        title: 'Giao Diện Sáng - Tối',
        children: {
            title: 'Giao Diện Sáng - Tối',
            data: [
                {
                    type: 'light-mode',
                    title: 'Giao Diện Sáng',
                    icon: (
                        <BrightnessIcon
                            className="spinnerHover"
                            height="22px"
                            width="22px"
                        />
                    ),
                },
                {
                    type: 'dark-mode',
                    title: 'Giao Diện Tối',
                    icon: (
                        <MoonStarIcon
                            className="ziczacMoonHover"
                            height="18px"
                            width="18px"
                        />
                    ),
                },
            ],
        },
    },
    {
        type: 'short-key',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Tổ Hợp Phím Tắt',
    },
];

export const USER_MENU_ITEMS = [
    {
        type: 'profile',
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        title: 'Trang Cá Nhân',
        to: '/myaccount',
    },
    ...MENU_ITEMS,
    {
        type: 'feedback@report',
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Góp Ý Và Báo Cáo',
    },
    {
        type: 'setting',
        icon: <GearIcon className="spinnerHover" height="20px" width="20px" />,
        title: 'Cài Đặt',
        to: '/setting',
    },
    {
        type: 'logout',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng Xuất',
        separate: true,
    },
];
