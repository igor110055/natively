import { useState, useEffect } from 'react';
import { Subscription } from 'rxjs';

import { binanceAll$ } from '../api/binance';
import { TBinance } from '../types';

let subscription = new Subscription();

export const useBinance = () => {

    const [ bin, setBin ] = useState<TBinance[]>();
    const [ allbin, setAllBin ] = useState<TBinance[]>();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ position, setPosition ] = useState<number>(0);

    useEffect(() => {
        getCurrencies();
        return(() => subscription.unsubscribe());
    }, []);

    const getCurrencies = (): void => {
        setIsLoading(true);
        subscription = binanceAll$.subscribe( data => {
            setAllBin(data);
            setBin(data.slice(0, 40));
            setPosition(40);
            setIsLoading(false);
        });
    };

    const paginateCurrencies = (): void => {
        setIsLoading(true);
        setBin(allbin?.slice(0, position + 40));
        setPosition(position + 40);
        setIsLoading(false);
    };

    return { bin, getCurrencies, paginateCurrencies, isLoading };
}