import StarRating from "./StarRating"

export default function MovieReviewCard({ review }) {

    return (

        <div className="card p-3 mb-3" >
            <strong>{review.name}</strong>
            <p>
                {review.text}
            </p>
            <StarRating vote={review.vote} />

        </div>


    )
}