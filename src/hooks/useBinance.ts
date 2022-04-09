import { useState, useEffect } from 'react';
import { binanceData } from '../api/binance';
import { TBinance } from '../types';

export const useBinance = () => {

    const [ bin, setBin ] = useState<TBinance[]>();
    const [ allbin, setAllBin ] = useState<TBinance[]>();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ position, setPosition ] = useState<number>(0);
    
    useEffect(() => {
        getCurrencies();
    }, []);

    const getCurrencies = async() => {
        setIsLoading(true);
        const resp = await binanceData.get<TBinance[]>('');
        setAllBin(resp.data);
        setBin(resp.data.slice(0, 40));
        setPosition(40);
        setIsLoading(false);
    }
    const paginateCurrencies = () => {
        setIsLoading(true);
        setBin(allbin?.slice(0, position + 40));
        setPosition(position + 40);
        setIsLoading(false);
    }

    return { bin, getCurrencies, paginateCurrencies, isLoading };
}