import verifiedLogo from "../userAssets/verified.svg";
import "./verified.css";

const Verified = ({ status }) => {
    if (status === 'verified') {
        return ( // Adaugă `return` aici
            <div className="body-verif">
                <h1 className="text">Verified</h1>
                <img className="imageine" src={verifiedLogo} alt="Verified logo" />
            </div>
        );
    }
    return <p className="not-verified">❌ Not Verified</p>;
};

export default Verified;
