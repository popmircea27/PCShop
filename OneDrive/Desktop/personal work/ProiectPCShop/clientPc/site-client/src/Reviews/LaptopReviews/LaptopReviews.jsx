import React, { useState, useEffect } from 'react';
import LaptopReviewsService from '../../service/LaptopReviewsService';
import ReviewCard from '../ReviewCard';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom'; // Importă useNavigate pentru redirecționare
import "../ReviewCard.css";

// Function to fetch user ID by username from the backend
const getUserIdByUsername = async (username) => {
    try {
        const response = await fetch(`http://localhost:8080/api/users/${username}/id`);
        const userId = await response.json();
        return userId;
    } catch (error) {
        console.error("Error fetching user ID:", error);
        return null;
    }
};

const LaptopReviews = ({ laptopId }) => {
    const navigate = useNavigate(); // Folosește hook-ul useNavigate pentru redirecționare
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [averageRating, setAverageRating] = useState(0); // Media rating-ului
    const [newReview, setNewReview] = useState({
        bodyReview: '',
        rating: 1
    }); // State pentru review-ul nou
    const [showReviewForm, setShowReviewForm] = useState(false); // Hook pentru a controla vizibilitatea formularului

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsData = await LaptopReviewsService.getReviewsByLaptop(laptopId);
                setReviews(reviewsData);
                calculateAverageRating(reviewsData); // Calculează media rating-ului
            } catch (err) {
                setError('Nu s-au putut încărca recenziile');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [laptopId]);

    const calculateAverageRating = (reviewsData) => {
        const totalRating = reviewsData.reduce((acc, review) => acc + review.rating, 0);
        const average = totalRating / reviewsData.length;
        setAverageRating(average.toFixed(2)); // Setează media cu două zecimale
    };

    // Funcție de actualizare a review-ului
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleRatingChange = (e) => {
        setNewReview((prevReview) => ({
            ...prevReview,
            rating: e.target.value,
        }));
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const username = Cookies.get('username');

        if (!username) {
            navigate('/login');
            return;
        }

        try {
            const userId = await getUserIdByUsername(username);

            if (!userId) {
                setError('Nu am putut obține ID-ul utilizatorului');
                return;
            }

            const numericRating = parseInt(newReview.rating, 10);

            // Generarea manuală a datei fără format ISO și fără „Z”
            const now = new Date();
            const dataCreare = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

            const reviewData = {
                laptopId: parseInt(laptopId), // Corectez structura pentru laptopId
                userId: userId,  // Corectez aici și trimit doar userId
                bodyReview: newReview.bodyReview,
                rating: numericRating,
                dataCreare: dataCreare, // trimitem data în formatul corect
            };


            // Printează body-ul trimis către endpoint
            console.log("Review Data Trimis la endpoint:", reviewData);

            // Adaugă review-ul folosind serviciul LaptopReviewsService
            await LaptopReviewsService.addReview(laptopId, reviewData);

            // După adăugarea review-ului, actualizează lista de recenzii
            setReviews((prevReviews) => [...prevReviews, reviewData]);
            setNewReview({ bodyReview: '', rating: 1 }); // Resetează formularul
        } catch (error) {
            setError('A apărut o eroare la adăugarea review-ului.');
            console.error('Error:', error);
        }
    };





    // Funcție pentru a comuta vizibilitatea formularului
    const toggleReviewForm = () => {
        const username = Cookies.get('username');


        if (!username) {
            navigate('/login'); // Redirecționează la login dacă nu e logat
        } else {
            setShowReviewForm(prevState => !prevState); // Inversează valoarea hook-ului doar dacă e logat
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Mesaj de încărcare
    }

    if (error) {
        return <div>{error}</div>; // Mesaj de eroare
    }

    return (
        <div className='body-mare-reviews'>
            <div className='revies-body'>
                <div className='text-body'>
                    <h3>Recenzii</h3>
                    <div className='rating-summary'>
                        <h4>Rating Mediu: {averageRating} stele</h4>
                        <div className='review-stats'>
                            <span>{reviews.length} recenzii</span>
                        </div>
                        <div className='star-rating'>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={index < Math.round(averageRating) ? 'filled' : 'empty'}>★</span>
                            ))}
                        </div>
                    </div>
                    <button className='add-review-btn' onClick={toggleReviewForm}>
                        {showReviewForm ? 'Ascunde Formular' : 'Adaugă un Review'}
                    </button>
                </div>

                {/* Formular pentru adăugarea unui review */}
                {showReviewForm && Cookies.get('username') && (
                    <div className="add-review-form">
                        <h4>Adaugă un Review</h4>
                        <textarea
                            name="bodyReview"
                            placeholder="Scrie un review..."
                            value={newReview.bodyReview}
                            onChange={handleInputChange}
                        />
                        <div className='rating-style'>
                            <label htmlFor="rating">Rating: </label>
                            <input
                                type="range"
                                id="rating"
                                name="rating"
                                min="1"
                                max="5"
                                value={newReview.rating}
                                onChange={handleRatingChange}
                            />
                            <span>{newReview.rating} stele</span>
                        </div>
                        <button className='buttonSubmit' onClick={handleSubmitReview}>Trimite Review</button>
                    </div>
                )}

                <div className='lista-reviews'>
                    {reviews.length === 0 ? (
                        <p>Nu există recenzii pentru acest laptop.</p>
                    ) : (
                        <ul>
                            {reviews.map((review) => (
                                <li key={review.id}>
                                    <ReviewCard
                                        username={review.user ? review.user.username : 'Utilizator necunoscut'}  // Check if user exists
                                        bodyReview={review.bodyReview}
                                        rating={review.rating}
                                        dataCrearii={review.dataCreare}
                                    />
                                </li>
                            ))}

                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LaptopReviews;
