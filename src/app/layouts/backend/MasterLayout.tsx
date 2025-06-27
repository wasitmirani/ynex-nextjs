
import { ReactNode, useEffect, useState } from 'react';
import LayoutSwitcher from "./partials/Switcher";
import HeaderMenu from "./partials/Header";
import SideBarMenu from "./partials/SideBarMenu";
import Footer from "./partials/Footer";
import SearchModal from './partials/SearchModal';
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
            { src: '/backend/assets/main.js', id: 'main-js' },
            { src: '/backend/assets/libs/%40popperjs/core/umd/popper.min.js', id: 'popper-js' },
            { src: '/backend/assets/libs/node-waves/waves.min.js', id: 'waves-js' },
            { src: '/backend/assets/libs/%40simonwep/pickr/pickr.es5.min.js', id: 'pickr-js' },
            { src: '/backend/assets/switch.js', id: 'switch-js' },
            { src: '/backend/assets/libs/preline/preline.js', id: 'preline-js' },
            { src: '/backend/assets/libs/simplebar/simplebar.min.js', id: 'simplebar-js' },
            { src: '/backend/assets/libs/apexcharts/apexcharts.min.js', id: 'apexcharts-js' },
            { src: '/backend/assets/sticky.js', id: 'sticky-js' },
            { src: '/backend/assets/ecommerce-dashboard-c398248f.js', id: 'ecommerce-dashboard-js' },
            { src: '/backend/assets/app-23e8aa1f.js', id: 'app-js' },
            { src: '/backend/assets/custom-switcher-c2a0a9d1.js', id: 'custom-switcher-js' },

        ];
        const moduleScripts = [
            { src: '/backend/assets/ecommerce-dashboard-c398248f.js', id: 'ecommerce-dashboard-js' },
            { src: '/backend/assets/app-23e8aa1f.js', id: 'app-js' },
            { src: '/backend/assets/custom-switcher-c2a0a9d1.js', id: 'custom-switcher-js' },
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
            }, 100); // Delay by 100ms
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

        <html lang="en" dir="ltr" data-nav-layout="vertical" className="light" data-header-styles="light" data-menu-styles="light">
            <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Author" content="Spruko Technologies Private Limited" />
                <meta name="Description" content="Laravel Tailwind CSS Responsive Admin Web Dashboard Template" />
                <meta name="keywords" content="admin dashboard" />
                <title> App Name -  </title>
                <link rel="icon" href="/backend/assets/images/brand-logos/favicon.ico" type="image/x-icon" />
                <link href="/backend/assets/iconfonts/icons.css" rel="stylesheet" />
                <link rel="preload" as="style" href="/backend/assets/app-698853b8.css" />
                <link rel="stylesheet" href="/backend/assets/app-698853b8.css" />
                <link href="/backend/assets/libs/node-waves/waves.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/backend/assets/libs/simplebar/simplebar.min.css" />
                <link rel="stylesheet" href="/backend/assets/libs/%40simonwep/pickr/themes/nano.min.css" />
                {/* <link rel="modulepreload" href="/backend/assets/custom-switcher-c2a0a9d1.js" /> */}
            </head>
            <body>
               
                {/* <!-- START SWITCHER --> */}

                <LayoutSwitcher></LayoutSwitcher>
                {/* <!-- END SWITCHER --> */}

                {/* <!-- LOADER --> */}
                <div id="loader">
                    <img src="/backend/assets/images/media/loader.svg" alt="" />
                </div>
                {/* <!-- END LOADER --> */}

                {/* <!-- PAGE --> */}
                <div className="page">
                  
                    <HeaderMenu></HeaderMenu>

                  
                    <SideBarMenu></SideBarMenu>

                 
                    <div className="content">
                        <div className="main-content fade-transition">
                            {children}
                        </div>
                    </div>
      

                    <SearchModal></SearchModal>

                    <Footer></Footer>
                
                </div>

                <div className="scrollToTop">
                    <span className="arrow"><i className="ri-arrow-up-s-fill text-xl"></i></span>
                </div>
                <div id="responsive-overlay"></div>

            </body>
        </html>
    );
}
