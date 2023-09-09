import '../style/Rules.scss';

const Rules = () => {
    const handleClick = () => {
        let container = document.querySelector('.rules .container') as HTMLElement;
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.opacity = '0';
        container.style.zIndex = '1';

        setTimeout(() => {
            container.style.opacity = '1'
        }, 100);
    };
    const handleClose = () => {
        let container = document.querySelector('.rules .container') as HTMLElement;
        container.style.opacity = '1';
        setTimeout(() => {
            container.style.opacity = '0';
            container.style.zIndex = '-2';
        }, 200);
    };



    return (
        <div className="rules">
            <div className="my-button" onClick={handleClick}>RULES</div>
            <div className="container">
                <div className="rules-container">
                    <div className="rules-header">
                        <h2>RULES</h2>
                        <div className="close" onClick={handleClose}></div>
                    </div>
                    <div className="rules-item"></div>
                </div>
            </div>
        </div>
    );
};

export default Rules;