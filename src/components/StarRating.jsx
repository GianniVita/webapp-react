export default function StarRating({vote}){
   
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

    return(

        <div className="vote">
            {getStarVote(vote)}
        </div>
    )
}