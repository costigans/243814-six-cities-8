import {Link} from 'react-router-dom';
import {Property} from '../../types/property';
import BookmarkButton from '../bookmark-button/bookmark-button';
import RatingBar from '../rating-bar/rating-bar';

type PlaceProps = {
  property: Property
}

function Place ({property}: PlaceProps): JSX.Element {
  const offerUrl = `/offer/${property.id}`;
  const firstPhoto = property.photos[0];

  return (
    <article className="cities__place-card place-card">
      {property.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={firstPhoto.src} width={firstPhoto.width} height={firstPhoto.height} alt={firstPhoto.altText} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{property.price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={property.isFavorite} />
        </div>
        <RatingBar score={property.rating} />
        <h2 className="place-card__name">
          <Link to={offerUrl}>{property.name}</Link>
        </h2>
        <p className="place-card__type">{property.type}</p>
      </div>
    </article>
  );
}

export default Place;
