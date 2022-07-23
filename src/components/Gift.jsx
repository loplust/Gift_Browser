import '../CSS_Components/Gift.css'

const Gift = ({ title, gifImage, gifUrl}) => (
    <div className="card" style={{width: "18rem"}}>

    <img src={gifImage} className="card-img-top" alt={title}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        Some quick example text to build on the card title and make up
                the bulk of the card's content.
        </p>

        <a href={gifUrl} className="btn btn-primary">
            Ver gift en el sitio
        </a>
        </div>
    </div>
)

export { Gift };