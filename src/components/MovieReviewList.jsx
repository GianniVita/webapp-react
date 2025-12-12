export default function MovieReviewList({ reviews }) {

    function getStarVote(vote) {

        let stars = []
        for (let i = 1; i <= vote; i++) {
            stars.push(<i key={`filled-${i}`} className="bi bi-star-fill"></i>)
        }

        for (let i = 1; i <= 5 - vote; i++) {
            stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
        }

        return stars

    }
   
   
   
    return (

        <section id="reviewsList">
            <div className="container">
                <h3 className="mb-4">Reviews</h3>

                {reviews && reviews.map(review =>

                    <div className="card p-3 mb-3" key={review.id}>
                        <strong>{review.name}</strong>
                        <p>
                            {review.text}
                        </p>
                        <div className="vote">
                            {getStarVote(review.vote)}
                        </div>
                    </div>
                )}

            </div>
        </section>

    )
}