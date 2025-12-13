import { useState } from "react";

export default function StarRatingInput({ value, onChange }) {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating-input" style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <i
                    key={star}
                    className={star <= (hover || value) ? "bi bi-star-fill text-warning" : "bi bi-star"}
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    style={{ marginRight: '5px' }}
                ></i>
            ))}
        </div>
    );
}
