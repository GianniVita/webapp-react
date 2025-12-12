export default function CreateMoviePage(){


    return(
        <>
                <div className="banner bg-light p-4 mb-5">
                    <div className="container d-flex justify-content-between align-items-center">
                        <h1 className="display-5">Add Movie</h1>
                        
                    </div>
                </div>
        <div className="container">
        <form>
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
                type="text"
                class="form-control"
                name="title"
                id="title"
                aria-describedby="titleHelper"
                placeholder="The Equalizer"
            />
            <small id="titleHelper" class="form-text text-muted">Add Movie's Title</small>
        </div>
         <div class="mb-3">
            <label for="director" class="form-label">Director</label>
            <input
                type="text"
                class="form-control"
                name="director"
                id="director"
                aria-describedby="directorHelper"
                placeholder="The Equalizer"
            />
            <small id="directorHelper" class="form-text text-muted">Add Movie's Director</small>
        </div>


        <div class="mb-3">
            <label for="image" class="form-label">Choose Image</label>
            <input
                type="file"
                class="form-control"
                name="image"
                id="image"
                placeholder=""
                aria-describedby="imageHelper"
            />
            <div id="imageHelper" class="form-text">Upload the Movie's Image</div>
        </div>
        


        
        </form>
        </div>
        
        
        
        
        </>



    )
}



// "title": "Inception",
//  "director": "Christopher Nolan",
//  "genre": "Science Fiction",
//  "release_year": 2010,
//  "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
//  "image": "inception.jpg",