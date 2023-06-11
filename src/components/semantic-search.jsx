import './../style/main.css'
import SemanticSearchIcon from './../assets/icons/search-2.png'
import GoogleDocs from './../assets/icons/google-docs-2.png'

function SemanticSearch() {
    return (
        <>
            <main>
                <div className="ss-parent">
                    
                    <section className="ss-div1">
                        
                    </section>

                    <section className="ss-div2">

                        <div className='ss-info-container'>
                            <div className='ss-icon-container ss-first-icon'>
                                <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#0089D6"> <path d="M7.47 12.412l3.348-.592.031-.007-1.722-2.049a291.474 291.474 0 01-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a788.95 788.95 0 012.934 5.066l2.95 5.115.023.039-10.948-.001 3.317-.587zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.37.37 0 01-.033.085L6.4 6.981 4.16 11.789l-1.63.002c-.897.001-1.63 0-1.63-.003z"></path> </g> </g></svg>
                            </div>
                            <h4>Data secured with Azure</h4>
                            <p>Your data is completely protected with the Azure software. Dont need to worry of getting your data stolen.</p>
                        </div>
                        <div className='ss-info-container'>
                            <div className='ss-icon-container ss-second-icon'>
                                <img width="32" src={SemanticSearchIcon} alt="semantic search icon" />
                            </div>
                            <h4>Semantic search</h4>
                            <p>Find what  you mean not what you search. Get your  necessary information quick and easy .</p>
                        </div>
                        <div className='ss-info-container'>
                            <div className='ss-icon-container ss-third-icon'>
                                <img width="32" src={GoogleDocs} alt="google doc icon" />
                            </div>
                            <h4>100% Document proessing</h4>
                            <p>Process any document or un- structured data type. Get any information out of your documents.</p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default SemanticSearch;