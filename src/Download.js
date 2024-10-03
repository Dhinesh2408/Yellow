import React, { useRef } from "react";

const Download = () => {
    const downloadLinkRef = useRef(null); // Create a ref to the link

    const handleDownload = (event) => {
        // Prevent default behavior
        event.preventDefault();
        
        // Trigger the download
        downloadLinkRef.current.click(); 
        
        // Show the alert message after a brief delay
        setTimeout(() => {
            alert("Your resume is downloading!");
        }, 100); // 100 milliseconds delay
    };

    return (
        <section id="download" className="download">
            <a 
                href="C:\\Users\\dhine\\Desktop\\dev 1\\86.pdf" // Make sure the path is correct
                className="download-btn"
                download
                ref={downloadLinkRef} // Assign the ref to the link
                style={{ display: "none" }} // Hide the actual link
            >
                Download Resume
            </a>
            <button className="download-btn" onClick={handleDownload}>
                Download Resume
            </button>
        </section>
    );
}

export default Download;
