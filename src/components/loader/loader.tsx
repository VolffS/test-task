import './loader.scss'
export const Loader = () => {
    return (
        <div className="loader-background">
            <div className="loading-container">
                <div className="loading-spinner">

                </div>
            </div>
        </div>
    );
};

export const endLoader = () => {
    setTimeout(() => {
        console.log("re");
        return ( <Loader/>)
    }, 5000)

}