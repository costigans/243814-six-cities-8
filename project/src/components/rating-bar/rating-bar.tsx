function RatingBar({score}: { score: number }): JSX.Element {
  const STAR_VALUE = 20;
  const starsCount = Math.floor(score);

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${starsCount * STAR_VALUE}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default RatingBar;
