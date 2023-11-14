import React from "react";
import "./NewBatch.css"

const NewBatch = () => {
    return (
        <div className="new-batch">
            <div className="new-batch-left">
                <p>For 2023, 2022 & 2021 graduates</p>
                <p>Batch Starting: 1st May 2023</p>
            </div>
            <div className="new-batch-right">
                <div className="new-batch-date">
                    <div className="new-batch-info">
                        <div className="new-batch-desc">
                            <img src="./images/elevation/top/free_class.webp" alt="free_class" />
                            <div>
                                <span>Free Webinar</span>
                                <span>17th April</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="new-batch-info">
                        <div className="new-batch-desc">
                            <img src="./images/elevation/top/Start+Assesment.webp" alt="Start+Assesment" />
                            <div>
                                <span>1:1 Counselling session</span>
                                <span>From 18th April</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="new-batch-info new-batch-info-last">
                        <div className="new-batch-desc">
                            <img src="./images/elevation/top/Batch+Starts.webp" alt="Batch+Starts" />
                            <div>
                                <span>Batch Start</span>
                                <span>01 May'23, Mon-Fri (7-10PM)</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewBatch