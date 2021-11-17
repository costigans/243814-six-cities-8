import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Property} from '../../types/property';
import BookmarkButton from '../bookmark-button/bookmark-button';
import RatingBar from '../rating-bar/rating-bar';

type PlaceProps = {
  property: Property,
  onPage: string,
  setActiveOffer: any //TODO: подобрать тип
}

//TODO: пропсы размеров фото

function Place({property, onPage, setActiveOffer}: PlaceProps): JSX.Element {
  const offerUrl = `/offer/${property.id}`;
  const firstPhoto = property.photos[0];

  const isMainPage = onPage === 'main';
  const isFavoritesPage = onPage === 'favorites';

  const cardClass = classNames({
    'place-card': true,
    'cities__place-card': isMainPage,
    'favorites__card': isFavoritesPage,
  });

  const imageWrapperClass = classNames({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': isMainPage,
    'favorites__image-wrapper': isFavoritesPage,
  });

  const infoClass = classNames({
    'place-card__info': true,
    'favorites__card-info': isFavoritesPage,
  });

  let photoWidth = 150;
  let photoHeight = 110;

  if (isMainPage) {
    photoWidth = 260;
    photoHeight = 200;
  }

  return (
    <article
      className={cardClass}
      onMouseEnter={() => setActiveOffer(property.id)}
      onMouseLeave={() => setActiveOffer(null)}
    >
      {property.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={imageWrapperClass}>
        <Link to={offerUrl}>
          <img className="place-card__image" src={firstPhoto.src} width={photoWidth} height={photoHeight} alt={firstPhoto.altText} />
        </Link>
      </div>
      <div className={infoClass}>
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
