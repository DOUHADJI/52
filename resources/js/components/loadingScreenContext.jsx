import { createContext, useEffect, useState } from "react";

const loadingContext = createContext();

const LoadingScreenProvider = ({ children }) => {
    const [isLoading, setIsloading] = useState(true);
    const context = { isLoading, setIsloading };
    const [hideLoading, setHideLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHideLoading(true);
        }, 1500);
    }, [isLoading]);

    return (
        <loadingContext.Provider value={context}>
            {hideLoading ? <div>{ children }</div> :  <div className="flex h-screen w-screen justify-center items-center gap-8">
                        <div className="loadingDiv"></div>
                        <div>les jeux du cirque</div>
                    </div>}
        </loadingContext.Provider>
    );
};

export default LoadingScreenProvider