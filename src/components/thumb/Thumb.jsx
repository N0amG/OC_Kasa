import './thumb.scss';

export default function Thumb({ logement }) {
    return (
        <div className="thumb">
            <img src={logement.cover} alt={logement.title} />
            <div className="thumb-body">
                <h3>{logement.title}</h3>
            </div>
        </div>
    );
}