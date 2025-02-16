import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./userpanelStyle.css";
import userImg from "../user/userAssets/user.png";
import UserService from '../service/UserService'; // Import UserService
import photoPanel from "../user/userAssets/1.png";
import Verified from './userAssets/verified';
import Verify from './userAssets/Verify';
const UserPanel = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState(''); // State pentru secțiunea activă
    const [orders, setOrders] = useState([]); // State pentru comenzile utilizatorului

    const username = Cookies.get('username');

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (activeSection === 'ongoingOrders' && userDetails) {
            const fetchOrders = async () => {
                try {
                    const ordersData = await UserService.getOrdersByUsername(userDetails.username);
                    // Filtrarea comenzilor pentru a include doar cele cu livrare mai mare decât data curentă sau cu status "Procesing"
                    const filteredOrders = ordersData.filter(order => {
                        const currentDate = new Date();
                        const deliveryDate = new Date(order.dataLivrare); // Transformăm dataLivrare într-un obiect Date

                        // Verificăm dacă data livrării este mai mare decât data curentă sau statusul este "Procesing"
                        return deliveryDate > currentDate || order.status === 'Procesing';
                    });

                    setOrders(filteredOrders); // Setăm comenzile filtrate
                } catch (error) {
                    setError('Could not fetch orders.');
                }
            };
            fetchOrders();
        }
    }, [activeSection, userDetails]);



    useEffect(() => {
        axios.get("http://localhost:8080/api/laptops/reviews/stef")
            .then(response => setReviews(response.data))
            .catch(error => console.error("Error fetching reviews:", error));
    }, []);


    useEffect(() => {
        const fetchUserDetails = async () => {
            // Citește username-ul din cookies

            if (!username) {
                navigate('/login'); // Redirecționează la login dacă nu există un utilizator logat
                return;
            }

            try {
                const response = await axios.get(`/api/users/details/${username}`);
                setUserDetails(response.data);
            } catch (error) {
                setError('Could not fetch user details.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [navigate]);

    // Fetch orders when 'allOrders' section is selected
    useEffect(() => {
        if (activeSection === 'allOrders' && userDetails) {
            const fetchOrders = async () => {
                try {
                    const ordersData = await UserService.getOrdersByUsername(userDetails.username); // Call service
                    setOrders(ordersData); // Set the fetched orders
                } catch (error) {
                    setError('Could not fetch orders.');
                }
            };
            fetchOrders();
        }
    }, [activeSection, userDetails]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!userDetails) {
        return <p>No user details available.</p>;
    }

    const renderContent = () => {
        switch (activeSection) {
            case 'ongoingOrders':
                return (
                    <div>
                        <h3>Comenzi în decurs pentru {userDetails.username}</h3>
                        {orders.length === 0 ? (
                            <p>No ongoing orders found.</p>
                        ) : (
                            <ul>
                                {orders.map((order) => {
                                    let orderedItems;
                                    try {
                                        orderedItems = JSON.parse(order.orderedItems); // Parsing the JSON string into an object
                                    } catch (e) {
                                        console.error('Error parsing ordered items', e);
                                        orderedItems = { produse: [] }; // Fallback if parsing fails
                                    }

                                    return (
                                        <li key={order.orderId}>
                                            <p><strong>Order ID:</strong> {order.orderId}</p>
                                            <p><strong>Comand Number:</strong> {order.comandNumber}</p>
                                            <p><strong>Price:</strong> {order.price}</p>
                                            <p><strong>Start Date:</strong> {order.dataInceperii}</p>
                                            <p><strong>Delivery Date:</strong> {order.dataLivrare ? order.dataLivrare : "Procesing..."}</p>

                                            <div className='butoane-comanda'>
                                                <button className="detalii-comanda">Detalii Comanda</button>
                                                <button className="status">Status</button>
                                            </div>
                                            <hr className="solid"></hr>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );

            case 'allOrders':
                return (
                    <div>
                        <h3>All Orders for {userDetails.username}</h3>
                        {orders.length === 0 ? (
                            <p>No orders found.</p>
                        ) : (
                            <ul>
                                {orders.map((order) => {
                                    let orderedItems;
                                    try {
                                        orderedItems = JSON.parse(order.orderedItems); // Parsing the JSON string into an object
                                    } catch (e) {
                                        console.error('Error parsing ordered items', e);
                                        orderedItems = { produse: [] }; // Fallback if parsing fails
                                    }

                                    return (
                                        <li key={order.orderId}>
                                            <p><strong>Order ID:</strong> {order.orderId}</p>
                                            <p><strong>Comand Number:</strong> {order.comandNumber}</p>
                                            <p><strong>Price:</strong> {order.price}</p>
                                            <p><strong>Start Date:</strong> {order.dataInceperii}</p>
                                            <p><strong>Delivery Date:</strong> {order.dataLivrare ? order.dataLivrare : "Procesing..."}</p>

                                            <div className='butoane-comanda'>
                                                <button className="detalii-comanda">Detalii Comanda</button>
                                                <button className="status">Status</button>
                                            </div>
                                            <hr class="solid"></hr>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            case 'personalData':
                return (
                    <div>
                        <div>
                            <div className='align-container'>
                                <p><strong>Status Acc:</strong></p>
                                <Verified status={userDetails.status} />
                                <Verify status={userDetails.status} usernameVAL={userDetails.username} />
                            </div>
                            <p><strong>Name:</strong> {userDetails.username} </p>
                            <p><strong>Email:</strong> {userDetails.email}</p>
                            <p><strong>Address:</strong> {userDetails.address}</p>
                        </div>

                    </div>
                );
            case 'reviews':
                return (
                    <div>
                        <h3>Reviews for {userDetails.username}</h3>
                        <hr class="solid"></hr>
                        {reviews.length === 0 ? (
                            <p>No reviews found.</p>
                        ) : (
                            <ul>
                                {reviews.map((review) => (
                                    <li key={review.id}>
                                        {/* <p><strong>Title:</strong> {review.title}</p> */}
                                        <p><strong>Content:</strong> {review.laptop.brand} {review.laptop.model}</p>
                                        <p><strong>Rating:</strong> {review.rating}</p>
                                        <p><strong>Rating:</strong> {review.bodyReview}</p>
                                        <p><strong>Data:</strong> {new Date(review.dataCreare).toLocaleDateString("ro-RO", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                        <hr class="solid"></hr>

                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>);
            default:
                return <div><p>Select an option to display information.</p><img className='panelfoto' src={photoPanel} alt="userPhoto" /></div>;
        }
    };

    const handleLogout = () => {
        Cookies.remove('username'); // Șterge cookie-ul
        navigate('/login'); // Redirecționează către login
    };

    return (
        <div className='body-user'>
            <div className='body-card'>
                <div className='info-container'>
                    <div className='photo-container'>
                        <img className='photo-caracteristics' src={userImg} alt="userPhoto" />
                    </div>
                    <div className='acc-info'>
                        <h3>Welcome back, {userDetails.username}!</h3>
                        <h4>{userDetails.email}</h4>
                    </div>
                </div>
                <div className='options-content-container'>
                    <div className='container-buttons'>
                        <button className='button-opt' onClick={() => setActiveSection('ongoingOrders')}>Comenzi în decurs</button>
                        <button className='button-opt' onClick={() => setActiveSection('allOrders')}>Toate comenzile</button>
                        <button className='button-opt' onClick={() => setActiveSection('favorite')}>Favorite</button>
                        <button className='button-opt' onClick={() => setActiveSection('personalData')}>Date personale</button>
                        <button className='button-opt' onClick={() => setActiveSection('reviews')}>Review-urile mele</button>
                        <button className='log-out' onClick={handleLogout}>Log out</button>
                    </div>
                    <div className='tablework-container'>
                        {renderContent()}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserPanel;
