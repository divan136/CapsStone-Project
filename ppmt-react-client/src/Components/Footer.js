const Footer = () => {
    const currentDate =new Date();
    return (
        <div>
            <p>Copyright&copy; {currentDate.getFullYear()}</p>
        </div>
    )
}

export default Footer;
