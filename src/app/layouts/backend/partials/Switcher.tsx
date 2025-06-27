
import React  from 'react';

const LayoutSwitcher: React.FC = () => {

    return (

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
         
           
            <a href="javascript:void(0);" id="reset-all" className="w-full ti-btn btn-wave ti-btn-danger-full m-1">Reset</a>
        </div>
    </div>

    );
};

export default LayoutSwitcher;