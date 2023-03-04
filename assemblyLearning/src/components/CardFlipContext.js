import { createContext } from 'react';

export const CardFlipContext = createContext({
    flipped:false,
    toggleFlip: () => {},
});
