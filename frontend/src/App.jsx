import React, { useState, useEffect } from 'react';
import './App.css'; 


const API_URL = '/api/GetObrasFunction'; 


const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <span className="modal-close" onClick={onClose}>&times;</span>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Arte em Tela Cheia" className="modal-image" />
            </div>
        </div>
    );
};


function App() {
    const [obras, setObras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [selectedImage, setSelectedImage] = useState(null); 

    useEffect(() => {
        const fetchObras = async () => {
            try {
                
                const url = window.location.hostname === 'localhost' 
                    ? 'http://localhost:7071/api/GetObrasFunction' 
                    : API_URL; 

                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                }

                const data = await response.json();
                setObras(data);
            } catch (err) {
                console.error("Erro ao carregar obras:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchObras();
    }, []);

    
    const handleCardClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    
    const handleCloseModal = () => {
        setSelectedImage(null);
    };


    if (loading) {
        return <h1 className="loading-message">Carregando Galeria...</h1>;
    }

    if (error) {
        return <h1 className="error-message">Erro ao buscar obras: {error}. Sua Azure Function está rodando?</h1>;
    }

    return (
        <div className="gallery-container">
            <header className="gallery-header">
                <h1>🖼️ Galeria de Artes </h1>
            </header>
            <div className="obras-list">
                {obras.length > 0 ? (
                    obras.map((obra) => (
                        
                        <div 
                            key={obra.Nome} 
                            className="obra-card"
                            onClick={() => handleCardClick(obra.URLImagem)}
                        >
                            <img src={obra.URLImagem} alt={obra.Nome} className="obra-image" />
                            <div className="obra-details">
                                <h2 className="obra-title">{obra.Nome}</h2>
                                <p className="obra-artist">Artista: **{obra.Artista}**</p>
                                {/* <p className="obra-description">{obra.Descricao}</p> */}
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="loading-message">Nenhuma obra encontrada. O DB está vazio?</h1>
                )}
            </div>

            {/* Renderiza o Modal se uma imagem estiver selecionada */}
            {selectedImage && (
                <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;