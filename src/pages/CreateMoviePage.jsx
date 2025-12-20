import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CreateMoviePage() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: ''
    });
    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crea FormData per inviare file e dati insieme
        const data = new FormData();
        data.append('title', formData.title);
        data.append('director', formData.director);
        data.append('genre', formData.genre);
        data.append('release_year', formData.release_year);
        data.append('abstract', formData.abstract); 
        if (imageFile) {
            data.append('image', imageFile);
        }

        console.log('Sending data to backend:', {
            title: formData.title,
            director: formData.director,
            genre: formData.genre,
            release_year: formData.release_year,
            abstract: formData.abstract,
            hasImage: !!imageFile
        });

        // Invia i dati al backend
        axios.post('http://localhost:3000/api/movies', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Movie created:', response.data);
                alert('Movie added successfully!');
                // Reindirizza alla dashboard
                navigate('/admin');
            })
            .catch(error => {
                console.error('Error creating movie:', error);
                console.error('Error response:', error.response?.data);
                console.error('Error status:', error.response?.status);
                alert('Error adding movie. Please try again. Check console for details.');
            });
    };

    return (
        <>
            <div className="banner bg-light p-4 mb-5">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-5">Add Movie</h1>
                </div>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="The Equalizer"
                            required
                        />
                        <small id="titleHelper" className="form-text text-muted">Add Movie's Title</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input
                            type="text"
                            className="form-control"
                            name="director"
                            id="director"
                            value={formData.director}
                            onChange={handleInputChange}
                            placeholder="John Vital"
                            required
                        />
                        <small id="directorHelper" className="form-text text-muted">Add Movie's Director</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="genre"
                            id="genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                            placeholder="Action, Drama, etc."
                            required
                        />
                        <small className="form-text text-muted">Add Movie's Genre</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="release_year" className="form-label">Release Year</label>
                        <input
                            type="number"
                            className="form-control"
                            name="release_year"
                            id="release_year"
                            value={formData.release_year}
                            onChange={handleInputChange}
                            placeholder="2024"
                            required
                        />
                        <small className="form-text text-muted">Add Movie's Release Year</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Choose Image</label>
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                        />
                        <div id="imageHelper" className="form-text">Upload the Movie's Image</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea
                            className="form-control"
                            name="abstract"
                            id="abstract"
                            rows="5"
                            value={formData.abstract}
                            onChange={handleInputChange}
                            placeholder="Write movie description here..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark">
                        <i className="bi bi-floppy me-2"></i> Save
                    </button>

                </form>
            </div>
        </>
    )
}