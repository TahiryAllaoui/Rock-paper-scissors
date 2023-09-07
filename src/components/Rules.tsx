import '../style/Rules.scss';

const Rules = () => {
    const handleClick = () => {
        let container = document.querySelector('.rules .container') as HTMLElement;
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
    };
    const handleClose = () => {
        let container = document.querySelector('.rules .container') as HTMLElement;
        container.style.display = 'none';
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