import {useState} from 'react';
import {Property} from '../../types/property';
import Place from '../place/place';

type ListPlacesProps = {
  properties: Property[],
  onPage: string
};

function ListPlaces({properties, onPage}: ListPlacesProps): JSX.Element {
  const [, setActiveOffer] = useState(null);

  return (
    <>
      {properties.map((property) => {
        const keyValue = property.id;

        return (
          <Place
            key={keyValue}
            property={property}
            onPage={onPage}
            setActiveOffer={setActiveOffer}
          />
        );
      })}
    </>
  );
}

export default ListPlaces;
