import "./SearchCard.css";
function SearchCard({ name, model, brand, specification, price }) {
    return (
        <>
            <div className="container-Search">
                <h4>{name || model}</h4>
                <p>{brand}</p>
                <div className='a1'>
                    <p>{specification}</p>
                    <p className="price">Price: {price} $</p>
                </div>
            </div>

        </>
    );
}

export default SearchCard;