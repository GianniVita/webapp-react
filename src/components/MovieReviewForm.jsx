export default function MovieReviewForm() {


    return (
        <section>
            <div className="container">
                <h3>Leave Your Review</h3>

                <form>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelper"
                            placeholder="John Vital"
                        />
                        <small id="nameHelper" className="form-text text-muted">Type your name to review!</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Vote/Rate</label>
                        <select
                            className="form-select form-select-sm"
                            name="vote"
                            id="vote"
                            style={{ maxWidth: '200px' }}>

                            <option value="1">⭐ 1 Star</option>
                            <option value="2">⭐⭐ 2 Stars</option>
                            <option value="3">⭐⭐⭐ 3 Stars</option>
                            <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                            <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">Review</label>
                        <textarea className="form-control" name="review" id="review" rows="5" placeholder="Write your Movie review here ... ... ... ..."></textarea>
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