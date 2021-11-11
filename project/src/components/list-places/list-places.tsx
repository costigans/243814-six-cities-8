import {useState} from 'react';
import {Property} from '../../types/property';
import Place from '../place/place';

type ListPlacesProps = {
  properties: Property[],
  parentClassName: string
};

function ListPlaces({properties, parentClassName}: ListPlacesProps): JSX.Element {
  const [, setActiveOffer] = useState(null);

  return (
    <>
      {properties.map((property) => {
        const keyValue = property.id;

        return (
          <Place
            key={keyValue}
            property={property}
            parentClassName={parentClassName}
            setActiveOffer={setActiveOffer}
          />
        );
      })}
    </>
  );
}

export default ListPlaces;
