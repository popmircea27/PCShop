import "./verified.css";
import axios from "axios";

const Verify = ({ status, usernameVAL }) => {
    const handleVerify = async () => {
        if (!usernameVAL) {
            console.error("Username is missing");
            return;
        }

        try {
            console.log(usernameVAL);
            const response = await axios.post("http://localhost:8080/api/users/send-verification", {
                username: usernameVAL,
            });
            console.log(response.data);
            alert("refresh the page after the validation.");
        } catch (error) {
            console.error("Error sending verification email:", error.message);
        }
    };

    if (status !== "verified") {
        return (
            <div className="body-verif">
                <button className="buttonStyle" onClick={handleVerify}>
                    <h1 className="text">Verify Now</h1>
                </button>
            </div>
        );
    }
    return null;
};

export default Verify;
