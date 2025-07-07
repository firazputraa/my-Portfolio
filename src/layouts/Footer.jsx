const Footer = () => {
    return(
        <footer className="bg-sky-950 text-white py-4 text-sm md:text-lg lg:text-xl sticky">
            <div className="container justify-around flex text-center mx-auto">
                <p>&copy; {new Date().getFullYear()} <span className='italic'>Firaz</span>Putra. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;