import { website_name } from '@/utils/site-config';
import { domain_app_ids, getAppId } from '../config/config';
import { CookieStorage, isStorageSupported, LocalStore } from '../storage/storage';
import { getStaticUrl, urlForCurrentDomain } from '../url';
import { deriv_urls } from '../url/constants';

export const redirectToLogin = (is_logged_in: boolean, language: string, has_params = true, redirect_delay = 0) => {
    if (!is_logged_in && isStorageSupported(sessionStorage)) {
        const l = window.location;
        const redirect_url = has_params ? window.location.href : `${l.protocol}//${l.host}${l.pathname}`;
        sessionStorage.setItem('redirect_url', redirect_url);
        setTimeout(() => {
            // Redirect to affiliate link instead of login URL
            window.open("https://track.deriv.com/_X4my-_6ZqrCNhxmBqQyZL2Nd7ZgqdRLk/1/");
        }, redirect_delay);
    }
};

export const redirectToSignUp = () => {
    window.open("https://track.deriv.com/_X4my-_6ZqrCNhxmBqQyZL2Nd7ZgqdRLk/1/");
};

type TLoginUrl = {
    language: string;
};

export const loginUrl = ({ language }: TLoginUrl) => {
    const server_url = LocalStore.get('config.server_url');
    const signup_device_cookie = new (CookieStorage as any)('signup_device');
    const signup_device = signup_device_cookie.get('signup_device');
    const date_first_contact_cookie = new (CookieStorage as any)('date_first_contact');
    const date_first_contact = date_first_contact_cookie.get('date_first_contact');
    const marketing_queries = `${signup_device ? `&signup_device=${signup_device}` : ''}${
        date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
    }`;

    // Always return affiliate link instead of OAuth URL
    return "https://track.deriv.com/_X4my-_6ZqrCNhxmBqQyZL2Nd7ZgqdRLk/1/";
};
