const Footer: React.FC = () => {

    return (
        
        <footer
            className="footer mt-auto xl:ps-[15rem] font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center">
            <div className="container">
                <span className="text-gray dark:text-defaulttextcolor/50"> Copyright © <span id="year"></span> <a
                        href="#" onClick={e => e.preventDefault()}
                        className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor">Ynex</a>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="#" onClick={e => e.preventDefault()}>
                        <span className="font-semibold text-primary underline">Spruko</span>
                    </a> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
    );
}
export default Footer;