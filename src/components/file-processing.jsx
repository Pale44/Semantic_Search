import './../style/main.css'


function Uploading() {
    return (
        <>
            <div className="uploading-container">
                <div class="loading-wave">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
                <p>Please wait while we are uploading <br /> your file and extracting data</p>
            </div>
            <div className="cancel-btn-container">
                <button>Cancel</button>
            </div>
        </>
    );
}

export default Uploading;