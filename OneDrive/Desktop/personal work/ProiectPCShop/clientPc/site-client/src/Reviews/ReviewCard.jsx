import React from 'react';
import './ReviewCard.css'; // Importăm fișierul CSS pentru stiluri

const formatDate = (dateString) => {
    const date = new Date(dateString); // Conversie la obiect Date
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    return date.toLocaleString('ro-RO', options); // Format în limba română
};


const ReviewCard = ({ username, bodyReview, rating, dataCrearii }) => {
    // Funcție pentru a genera stelele în funcție de rating
    const formattedDate = formatDate(dataCrearii);
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'filled' : 'empty'}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className='container-central'>
            <div className="review-card">
                <div className="review-header">
                    <div className="user-info">
                        <div className="user-avatar">
                        
                            <span>{username[0]}</span>
                        </div>
                        <div className="user-name">
                            <strong>{username}</strong>
                        </div>
                    </div>
                    <div className="review-date">
                        <span>{formattedDate}</span>
                    </div>
                </div>

                <div className="review-body">
                    <p>{bodyReview}</p>
                </div>

                <div className="review-rating">
                    <div className="stars">
                        {renderStars(rating)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
