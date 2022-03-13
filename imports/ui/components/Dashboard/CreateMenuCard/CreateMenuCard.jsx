import React, {useState} from 'react';
import "./CreateMenuCard.scss"

const CreateMenuCard = () => {
    const [loading, setLoading] = useState(false);
    const createMenuHandler = () => {
        setLoading(true)
    }

    return (
        <div className="CreateMenuCard">
            <div className="card"
                 onClick={createMenuHandler}
            >
                <div className="plus-wrapp with-spinner">
                    {
                        loading ?
                            <div className="spinner-wrapp">
                                <div className="spinner-border spinner-border"></div>
                            </div>
                            :
                            <i className="fas fa-plus"></i>
                    }
                </div>
            </div>
        </div>
    )
};
export default CreateMenuCard;
