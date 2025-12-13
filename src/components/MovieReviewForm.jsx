import { useState } from "react";
import axios from "axios";
import StarRatingInput from "./StarRatingInput";

export default function MovieReviewForm({ movieId, onReviewAdded }) {
    const [rating, setRating] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        text: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.text || rating === 0) {
            alert('Please fill all fields and select a rating');
            return;
        }

        const reviewData = {
            name: formData.name,
            text: formData.text,
            vote: rating
        };

        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, reviewData)
            .then(response => {
                console.log('Review added:', response.data);
                alert('Review added successfully!');
                // Reset form
                setFormData({ name: '', text: '' });
                setRating(0);
                // Ricarica le review
                if (onReviewAdded) {
                    onReviewAdded();
                }
            })
            .catch(error => {
                console.error('Error adding review:', error);
                alert('Error adding review. Please try again.');
            });
    };

    return (
        <section>
            <div className="container">
                <h3>Leave Your Review</h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelper"
                            placeholder="John Vital"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <small id="nameHelper" className="form-text text-muted">Type your name to review!</small>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Vote/Rate</label>
                        <StarRatingInput value={rating} onChange={setRating} />
                        <small className="form-text text-muted d-block mt-2">
                            {rating > 0 ? `You selected ${rating} star${rating > 1 ? 's' : ''}` : 'Click to rate'}
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            id="text"
                            rows="5"
                            placeholder="Write your Movie review here ... ... ... ..."
                            value={formData.text}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark">
                        Submit
                    </button>

                </form>

            </div>
        </section>
    )
}