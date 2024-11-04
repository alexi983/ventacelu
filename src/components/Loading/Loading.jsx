import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <PacmanLoader color="#36d7b7" size={25} />
        </div>
    );
};

export default Loading;
