import React from 'react'

function CertificationCard({ src, h3 }) {
    return (
        <a target="_blank">
            <img className="hover" src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
        </a>
    );
}

export default CertificationCard