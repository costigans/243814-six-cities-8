import {Property} from '../../types/property';
import Place from '../place/place';

type ListPlacesProps = {
  properties: Property[]
};

function ListPlaces({properties}: ListPlacesProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {properties.map((property) => {
        const keyValue = property.id;

        return <Place key={keyValue} property={property} />;
      })}
    </div>
  );
}

export default ListPlaces;
