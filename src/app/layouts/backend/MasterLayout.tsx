
import { ReactNode, useEffect, useState } from 'react';
import LayoutSwitcher from "./partials/Switcher";
import HeaderMenu from "./partials/Header";
import SideBarMenu from "./partials/SideBarMenu";
import Footer from "./partials/Footer";
// import { useAuth } from 'app/contexts/AuthContext';
export default function MasterLayout({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Helper to remove previously injected scripts
        const scriptIds = [
            'popper-js', 'waves-js', 'pickr-js', 'switch-js', 'preline-js', 'simplebar-js', 'apexcharts-js', 'sticky-js',
            'ecommerce-dashboard-js', 'app-js', 'custom-switcher-js'
        ];
        scriptIds.forEach(id => {
            const oldScript = document.getElementById(id);
            if (oldScript) {
                oldScript.remove();
            }
        });
        // Scripts to inject
        const scripts = [
            { src: '/build/assets/main.js', id: 'main-js' },
            { src: '/build/assets/libs/%40popperjs/core/umd/popper.min.js', id: 'popper-js' },
            { src: '/build/assets/libs/node-waves/waves.min.js', id: 'waves-js' },
            { src: '/build/assets/libs/%40simonwep/pickr/pickr.es5.min.js', id: 'pickr-js' },
            { src: '/build/assets/switch.js', id: 'switch-js' },
            { src: '/build/assets/libs/preline/preline.js', id: 'preline-js' },
            { src: '/build/assets/libs/simplebar/simplebar.min.js', id: 'simplebar-js' },
            { src: '/build/assets/libs/apexcharts/apexcharts.min.js', id: 'apexcharts-js' },
            { src: '/build/assets/sticky.js', id: 'sticky-js' },
            // { src: '/build/assets/ecommerce-dashboard-c398248f.js', id: 'ecommerce-dashboard-js' },
            // { src: '/build/assets/app-23e8aa1f.js', id: 'app-js' },
            // { src: '/build/assets/custom-switcher-c2a0a9d1.js', id: 'custom-switcher-js' },

        ];
        const moduleScripts = [
            { src: '/build/assets/ecommerce-dashboard-c398248f.js', id: 'ecommerce-dashboard-js' },
            { src: '/build/assets/app-23e8aa1f.js', id: 'app-js' },
            { src: '/build/assets/custom-switcher-c2a0a9d1.js', id: 'custom-switcher-js' },
        ];
        // Inject scripts after DOM is painted
        const timeout = setTimeout(() => {
            scripts.forEach(({ src, id }) => {
                const script = document.createElement('script');
                script.src = src;
                script.id = id;
                script.async = false;
                document.body.appendChild(script);
            });
            // Delay module scripts to ensure DOM is fully rendered
            setTimeout(() => {
                moduleScripts.forEach(({ src, id }) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.type = 'module';
                    script.id = id;
                    script.async = false;
                    document.body.appendChild(script);
                });
            }, 0); // Delay by 100ms
        }, 0);

        // Cleanup on unmount
        return () => {
            clearTimeout(timeout);
            scriptIds.forEach(id => {
                const oldScript = document.getElementById(id);
                if (oldScript) {
                    oldScript.remove();
                }
            });
        };
    }, []);
    return (
        <>
            <html lang="en" dir="ltr" data-nav-layout="vertical" className="light" data-header-styles="light" data-menu-styles="light">
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="Author" content="Spruko Technologies Private Limited" />
                    <meta name="Description" content="Laravel Tailwind CSS Responsive Admin Web Dashboard Template" />
                    <meta name="keywords" content="admin dashboard" />
                    <title> App Name -  </title>
                    <link rel="icon" href="/build/assets/images/brand-logos/favicon.ico" type="image/x-icon" />
                    <link href="/build/assets/iconfonts/icons.css" rel="stylesheet" />
                    <link rel="preload" as="style" href="/build/assets/app-698853b8.css" />
                    <link rel="stylesheet" href="/build/assets/app-698853b8.css" />
                    <link href="/build/assets/libs/node-waves/waves.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="/build/assets/libs/simplebar/simplebar.min.css" />
                    <link rel="stylesheet" href="/build/assets/libs/%40simonwep/pickr/themes/nano.min.css" />
                     <link rel="modulepreload" href="/build/assets/custom-switcher-c2a0a9d1.js" />
                </head>
                <body>
                    {/* <!-- START SWITCHER --> */}
                           <div id="hs-overlay-switcher" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex={-1}>
        <div className="ti-offcanvas-header z-10 relative">
            <h5 className="ti-offcanvas-title">
                Switcher
            </h5>
            <button type="button"
                className="ti-btn flex-shrink-0 p-0  transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                data-hs-overlay="#hs-overlay-switcher">
                <span className="sr-only">Close modal</span>
                <i className="ri-close-circle-line leading-none text-lg"></i>
            </button>
        </div>
        <div className="ti-offcanvas-body !p-0 !border-b dark:border-white/10 z-10 relative !h-auto">
            <div className="flex rtl:space-x-reverse" aria-label="Tabs" role="tablist">
                <button type="button"
                    className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  active"
                    id="switcher-item-1" data-hs-tab="#switcher-1" aria-controls="switcher-1" role="tab">
                    Theme Style
                </button>
                <button type="button"
                    className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px  bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  dark:hover:text-gray-300"
                    id="switcher-item-2" data-hs-tab="#switcher-2" aria-controls="switcher-2" role="tab">
                    Theme Colors
                </button>
            </div>
        </div>
        <div className="ti-offcanvas-body" id="switcher-body">
            <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" className="">
                <div className="">
                    <p className="switcher-style-head">Theme Color Mode:</p>
                    <div className="grid grid-cols-3 switcher-style">
                        <div className="flex items-center">
                            <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-light-theme"
                                checked />
                            <label htmlFor="switcher-light-theme"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Light</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-dark-theme" />
                            <label htmlFor="switcher-dark-theme"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Dark</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Directions:</p>
                    <div className="grid grid-cols-3  switcher-style">
                        <div className="flex items-center">
                            <input type="radio" name="direction" className="ti-form-radio" id="switcher-ltr" checked />
                            <label htmlFor="switcher-ltr"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">LTR</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="direction" className="ti-form-radio" id="switcher-rtl" />
                            <label htmlFor="switcher-rtl"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">RTL</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Navigation Styles:</p>
                    <div className="grid grid-cols-3  switcher-style">
                        <div className="flex items-center">
                            <input type="radio" name="navigation-style" className="ti-form-radio" id="switcher-vertical"
                                checked />
                            <label htmlFor="switcher-vertical"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Vertical</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="navigation-style" className="ti-form-radio" id="switcher-horizontal" />
                            <label htmlFor="switcher-horizontal"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Horizontal</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Navigation Menu Style:</p>
                    <div className="grid grid-cols-2 gap-2 switcher-style">
                        <div className="flex">
                            <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                id="switcher-menu-click" checked />
                            <label htmlFor="switcher-menu-click"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                                Click</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                id="switcher-menu-hover" />
                            <label htmlFor="switcher-menu-hover"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                                Hover</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                id="switcher-icon-click" />
                            <label htmlFor="switcher-icon-click"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                                Click</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                id="switcher-icon-hover" />
                            <label htmlFor="switcher-icon-hover"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                                Hover</label>
                        </div>
                    </div>
                    <div className="px-4 text-secondary text-xs"><b className="me-2">Note:</b>Works same for both Vertical and
                        Horizontal
                    </div>
                </div>
                <div className=" sidemenu-layout-styles">
                    <p className="switcher-style-head">Sidemenu Layout Syles:</p>
                    <div className="grid grid-cols-2 gap-2 switcher-style">
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-default-menu" checked/>
                            <label htmlFor="switcher-default-menu"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Default
                                Menu</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-closed-menu" />
                            <label htmlFor="switcher-closed-menu"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">
                                Closed
                                Menu</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-icontext-menu" />
                            <label htmlFor="switcher-icontext-menu"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                                Text</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-icon-overlay" />
                            <label htmlFor="switcher-icon-overlay"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                                Overlay</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-detached" />
                            <label htmlFor="switcher-detached"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Detached</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                id="switcher-double-menu" />
                            <label htmlFor="switcher-double-menu"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Double
                                Menu</label>
                        </div>
                    </div>
                    <div className="px-4 text-secondary text-xs"><b className="me-2">Note:</b>Navigation menu styles won't work
                        here.</div>
                </div>
                <div>
                    <p className="switcher-style-head">Page Styles:</p>
                    <div className="grid grid-cols-3  switcher-style">
                        <div className="flex">
                            <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-regular"
                                checked />
                            <label htmlFor="switcher-regular"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Regular</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-classic" />
                            <label htmlFor="switcher-classic"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Classic</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="data-page-styles" className="ti-form-radio" id="switcher-modern" />
                            <label htmlFor="switcher-modern"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                Modern</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Layout Width Styles:</p>
                    <div className="grid grid-cols-3 switcher-style">
                        <div className="flex">
                            <input type="radio" name="layout-width" className="ti-form-radio" id="switcher-full-width"
                                checked />
                            <label htmlFor="switcher-full-width"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">FullWidth</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="layout-width" className="ti-form-radio" id="switcher-boxed" />
                            <label htmlFor="switcher-boxed"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Boxed</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Menu Positions:</p>
                    <div className="grid grid-cols-3  switcher-style">
                        <div className="flex">
                            <input type="radio" name="data-menu-positions" className="ti-form-radio"
                                id="switcher-menu-fixed" checked />
                            <label htmlFor="switcher-menu-fixed"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Fixed</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="data-menu-positions" className="ti-form-radio"
                                id="switcher-menu-scroll" />
                            <label htmlFor="switcher-menu-scroll"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">Header Positions:</p>
                    <div className="grid grid-cols-3 switcher-style">
                        <div className="flex">
                            <input type="radio" name="data-header-positions" className="ti-form-radio"
                                id="switcher-header-fixed" checked/>
                            <label htmlFor="switcher-header-fixed"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                Fixed</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="data-header-positions" className="ti-form-radio"
                                id="switcher-header-scroll" />
                            <label htmlFor="switcher-header-scroll"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable
                            </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="switcher-style-head">Loader:</p>
                    <div className="grid grid-cols-3 switcher-style">
                        <div className="flex">
                            <input type="radio" name="page-loader" className="ti-form-radio" id="switcher-loader-enable"
                                checked />
                            <label htmlFor="switcher-loader-enable"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                Enable</label>
                        </div>
                        <div className="flex">
                            <input type="radio" name="page-loader" className="ti-form-radio" id="switcher-loader-disable" />
                            <label htmlFor="switcher-loader-disable"
                                className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Disable
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="switcher-2" className="hidden" role="tabpanel" aria-labelledby="switcher-item-2">
                <div className="theme-colors">
                    <p className="switcher-style-head">Menu Colors:</p>
                    <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-white" type="radio"
                                name="menu-colors" id="switcher-menu-light" checked /> 
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Light Menu
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio"
                                name="menu-colors" id="switcher-menu-dark" checked />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Dark Menu
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio"
                                name="menu-colors" id="switcher-menu-primary" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Color Menu
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio"
                                name="menu-colors" id="switcher-menu-gradient" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Gradient Menu
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                                name="menu-colors" id="switcher-menu-transparent" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Transparent Menu
                            </span>
                        </div>
                    </div>
                    <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2">Note:</b>If you
                        want to change color Menu
                        dynamically
                        change from below Theme Primary color picker.</div>
                </div>
                <div className="theme-colors">
                    <p className="switcher-style-head">Header Colors:</p>
                    <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-white !border" type="radio"
                                name="header-colors" id="switcher-header-light" checked />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Light Header
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio"
                                name="header-colors" id="switcher-header-dark" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Dark Header
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio"
                                name="header-colors" id="switcher-header-primary" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Color Header
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio"
                                name="header-colors" id="switcher-header-gradient"/>
                            <span 
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Gradient Header
                            </span>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                            <input className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                                name="header-colors" id="switcher-header-transparent" />
                            <span
                                className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                role="tooltip">
                                Transparent Header
                            </span>
                        </div>
                    </div>
                    <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2">Note:</b>If you
                        want to change color
                        Header dynamically
                        change from below Theme Primary color picker.</div>
                </div>
                <div className="theme-colors">
                    <p className="switcher-style-head">Theme Primary:</p>
                    <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                                id="switcher-primary" checked />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                                id="switcher-primary1" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                                id="switcher-primary2" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                                id="switcher-primary3" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                                id="switcher-primary4" />
                        </div>
                        <div className="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
                            <div className="theme-container-primary"></div>
                            <div className="pickr-container-primary"></div>
                        </div>
                    </div>
                </div>
                <div className="theme-colors">
                    <p className="switcher-style-head">Theme Background:</p>
                    <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-bg-1" type="radio" name="theme-background"
                                id="switcher-background" checked />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-bg-2" type="radio" name="theme-background"
                                id="switcher-background1" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-bg-3" type="radio" name="theme-background"
                                id="switcher-background2" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-bg-4" type="radio" name="theme-background"
                                id="switcher-background3" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio color-input color-bg-5" type="radio" name="theme-background"
                                id="switcher-background4" />
                        </div>
                        <div className="ti-form-radio switch-select ps-0 mt-1 color-bg-transparent">
                            <div className="theme-container-background hidden"></div>
                            <div className="pickr-container-background"></div>
                        </div>
                    </div>
                </div>
                <div className="menu-image theme-colors">
                    <p className="switcher-style-head">Menu With Background Image:</p>
                    <div className="flex switcher-style space-x-3 rtl:space-x-reverse flex-wrap gap-3">
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio bgimage-input bg-img1" type="radio" name="theme-images"
                                id="switcher-bg-img" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio bgimage-input bg-img2" type="radio" name="theme-images"
                                id="switcher-bg-img1" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio bgimage-input bg-img3" type="radio" name="theme-images"
                                id="switcher-bg-img2" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio bgimage-input bg-img4" type="radio" name="theme-images"
                                id="switcher-bg-img3" />
                        </div>
                        <div className="ti-form-radio switch-select">
                            <input className="ti-form-radio bgimage-input bg-img5" type="radio" name="theme-images"
                                id="switcher-bg-img4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ti-offcanvas-footer sm:flex justify-between">
            <a href="https://themeforest.net/item/ynex-laravel-tailwind-admin-dashboard-template/49617469"
                target="_blank" className="w-full ti-btn btn-wave ti-btn-primary-full m-1">Buy Now</a>
            <a href="https://themeforest.net/user/spruko/portfolio" target="_blank"
                className="w-full ti-btn btn-wave ti-btn-secondary-full m-1">Our Portfolio</a>
            <a href="javascript:void(0);" id="reset-all" className="w-full ti-btn btn-wave ti-btn-danger-full m-1">Reset</a>
        </div>
    </div>

                    {/* <!-- END SWITCHER --> */}
                    {/* <!-- LOADER --> */}
                    {/* <div id="loader">
        <img src="/build/assets/images/media/loader.svg" alt="" />
    </div> */}
                    {/* <!-- END LOADER --> */}
                    {/* <!-- PAGE --> */}
                    <div className="page">
                        {/* <!-- HEADER --> */}
                        <HeaderMenu></HeaderMenu>

                        {/* <!-- END HEADER --> */}

                        {/* <!-- SIDEBAR --> */}

                        <SideBarMenu></SideBarMenu>

                        {/* <!-- END SIDEBAR --> */}

                        {/* <!-- MAIN-CONTENT --> */}
                        <div className="content">
                            <div className="main-content">
                                {children}
                            </div>
                        </div>
                        {/* 
        <!-- END MAIN-CONTENT -->

        <!-- SEARCH-MODAL --> */}

                        <div id="search-modal" className="hs-overlay ti-modal hidden mt-[1.75rem]">
                            <div className="ti-modal-box">
                                <div
                                    className="ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]">
                                    <div className="ti-modal-body">

                                        <div className="input-group border-[2px] border-primary rounded-[0.25rem] w-full flex">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                className="input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]"
                                                id="Search-Grid"><i className="fe fe-search header-link-icon text-[0.875rem]"></i></a>

                                            <input type="search"
                                                className="form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent"
                                                placeholder="Search" aria-label="Username" />

                                            <a aria-label="anchor" href="javascript:void(0);"
                                                className="flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]"
                                                id="voice-search"><i className="fe fe-mic header-link-icon"></i></a>
                                            <div className="hs-dropdown ti-dropdown">
                                                <a aria-label="anchor" href="javascript:void(0);"
                                                    className="flex items-center hs-dropdown-toggle ti-dropdown-toggle btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>

                                                <ul className="absolute hs-dropdown-menu ti-dropdown-menu !-mt-2 !p-0 hidden">
                                                    <li><a className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                        href="javascript:void(0);">Action</a></li>
                                                    <li><a className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                        href="javascript:void(0);">Another action</a></li>
                                                    <li><a className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                        href="javascript:void(0);">Something else here</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                        href="javascript:void(0);">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <p
                                                className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2">
                                                Are You Looking For...</p>

                                            <span
                                                className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                    className="fe fe-user me-2"></i>People<a href="javascript:void(0)"
                                                        className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                            className="fe fe-x"></i></a></span>
                                            <span
                                                className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                    className="fe fe-file-text me-2"></i>Pages<a href="javascript:void(0)"
                                                        className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                            className="fe fe-x"></i></a></span>
                                            <span
                                                className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                    className="fe fe-align-left me-2"></i>Articles<a href="javascript:void(0)"
                                                        className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                            className="fe fe-x"></i></a></span>
                                            <span
                                                className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                    className="fe fe-server me-2"></i>Tags<a href="javascript:void(0)"
                                                        className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                            className="fe fe-x"></i></a></span>

                                        </div>


                                        <div className="my-[1.5rem]">
                                            <p className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2">Recent Search
                                                :</p>

                                            <div id="dismiss-notifications-alert" role="alert"
                                                className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
                                                <a href="notifications.html"><span>Notifications</span></a>
                                                <a aria-label="anchor" className="ms-auto leading-none" href="javascript:void(0);"
                                                    data-hs-remove-element="#dismiss-notifications-alert"><i
                                                        className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></a>
                                            </div>

                                            <div id="dismiss-alerts-alert" role="alert"
                                                className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
                                                <a href="alerts.html"><span>Alerts</span></a>
                                                <a aria-label="anchor" className="ms-auto leading-none" href="javascript:void(0);"
                                                    data-hs-remove-element="#dismiss-alerts-alert"><i
                                                        className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></a>
                                            </div>

                                            <div id="dismiss-mail-alert" role="alert"
                                                className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert">
                                                <a href="mail.html"><span>Mail</span></a>
                                                <a aria-label="anchor" className="ms-auto lh-1" href="javascript:void(0);"
                                                    data-hs-remove-element="#dismiss-mail-alert"><i
                                                        className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ti-modal-footer !py-[1rem] !px-[1.25rem]">
                                        <div className="inline-flex rounded-md  shadow-sm">
                                            <button type="button"
                                                className="ti-btn-group btn-wave !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10">
                                                Search
                                            </button>
                                            <button type="button"
                                                className="ti-btn-group btn-wave  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]">
                                                Clear Recents
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Footer */}
                        <Footer></Footer>
                        {/* <!-- END FOOTER --> */}
                    </div>

                    <div className="scrollToTop">
                        <span className="arrow"><i className="ri-arrow-up-s-fill text-xl"></i></span>
                    </div>
                    <div id="responsive-overlay"></div>
                                   
                </body>

            </html>
        </>
    );
}
