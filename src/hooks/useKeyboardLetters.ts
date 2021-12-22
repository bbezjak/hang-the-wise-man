import { useState } from 'react';
import { useEffect } from 'react';
import { isCharLetter } from './../helpers/isCharLetter';

export const useKeyboardLetters = () => {

    const [letter, setLetter] = useState(null as null | string);

    useEffect(() => {
        function updateLetter(event: KeyboardEvent): void {
            if(isCharLetter(event.key)) {
                setLetter(event.key);
            }
        }

        document.addEventListener('keyup', updateLetter);

        return () => document.removeEventListener('keyup', updateLetter);
    })

    return letter;
}