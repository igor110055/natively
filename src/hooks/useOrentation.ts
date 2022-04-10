import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

type Orientation = 'P' | 'L';

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

export function useOrientation(): Orientation {

    const [orientation, setOrientation] = useState<Orientation>(
        isPortrait() ? 'P' : 'L',
    );

    useEffect(() => {
        const callback = () => setOrientation(isPortrait() ? 'P' : 'L');
        const subscription = Dimensions.addEventListener('change', callback);
        return () => {
            subscription.remove();
        };
    }, []);

    return orientation;
}