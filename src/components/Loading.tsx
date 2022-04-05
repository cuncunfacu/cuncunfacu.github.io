import React from 'react';

const Loading: React.FC = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex:100,
                opacity: 0.5
            }}>
            <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status"></div>
        </div>
    )
}

export default Loading;