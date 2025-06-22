import React from 'react';
import Link from 'next/link';
import SidebarMenu from 'app/utils/sidebarMenu';

const SideBar: React.FC = () => {
    const menu = new SidebarMenu();
    const menuList = menu.getMenuList();

    return (
             <aside className="app-sidebar" id="sidebar">

            {/* <!-- Start::main-sidebar-header --> */}
            <div className="main-sidebar-header">
                <a href="index.html" className="header-logo">
                    <img src="/build/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
                    <img src="/build/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo"/>
                    <img src="/build/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/>
                    <img src="/build/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark"/>
                    <img src="/build/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white"/>
                    <img src="/build/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white"/>
                </a>
            </div>
            {/* <!-- End::main-sidebar-header -->

            <!-- Start::main-sidebar --> */}
            <div className="main-sidebar" id="sidebar-scroll">

                   <nav className="main-menu-container nav nav-pills flex-column sub-open">
                    <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg></div>
                    <ul className="main-menu">
                        {menuList?.length > 0 &&
                            menuList.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.type === 'heading' && (
                                        <li className="slide__category">
                                            <span className="category-name">{item.title}</span>
                                        </li>
                                    )}
                                    {item.type === 'single' && (
                                        <li className="slide">
                                            <Link href={item.link} className="side-menu__item">
                                                <i className={`${item.icon} side-menu__icon icon-24`}></i>
                                                <span className="side-menu__label">{item.title}</span>
                                            </Link>
                                        </li>
                                    )}
                                    {item.type === 'multi' && (
                                        <li className="slide has-sub">
                                            <a  href="#" onClick={e => e.preventDefault()} className="side-menu__item cursor-pointer">
                                                <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                                <i className={`${item.icon} side-menu__icon icon-24`}></i>
                                                <span className="side-menu__label">{item.title}</span>
                                            </a>
                                            <ul className="slide-menu child1">
                                                {item.sub_menu.map((subItem:any, subIndex:any) => (
                                                    <li key={subIndex} className="slide">
                                                        <Link href={subItem.link} className="side-menu__item">
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                    </ul>
                  
               </nav>
                {/* <!-- End::nav --> */}

            </div>
            {/* <!-- End::main-sidebar --> */}

        </aside>
         
    );
};

export default SideBar;