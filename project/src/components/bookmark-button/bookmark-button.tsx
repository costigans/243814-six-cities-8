function BookmarkButton({isFavorite}: { isFavorite: boolean }): JSX.Element {
  return (
    <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
