import MovieReviewCard from "./MovieReviewCard"

export default function MovieReviewList({ reviews }) {

  
   
   
   
    return (

        <section id="reviewsList">
            <div className="container">
                <h3 className="mb-4">Reviews</h3>

                {reviews && reviews.map(review =>

                    <MovieReviewCard review={review} key={review.id} />
                )}

            </div>
        </section>

    )
}