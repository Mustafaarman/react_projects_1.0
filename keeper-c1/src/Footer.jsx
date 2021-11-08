import React from "react";

const currentYear = new Date();

const footerdesign = {
    color: "gray"
}

function Footer() {
    return (
        <div className="footerdiv" style={footerdesign}>
            <p>Copy Right {currentYear.getFullYear()}</p>
        </div>
    );
}


export default Footer;