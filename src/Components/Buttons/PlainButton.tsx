import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface IButton{
    text?:string;
    handler?:() => void;
    textSm?:boolean | undefined;
}

const PlainButton = ({text, handler, textSm}:IButton) => {
    return (
        <button onClick={handler}
        className="transition ease-in-out duration-500 flex h-10 items-center font-medium text-primary hover:animate-pulse"
        >
            <span className={`py-2 tracking-normal group-hover:tracking-wider duration-300 border-b-2 border-surface hover:border-primary ${textSm ? "text-sm" : ""} ` }>
            {text && text}
            </span>
            <ArrowSmallRightIcon className="h-8 w-8  pl-2 group-hover:translate-x-2 duration-300" />
        </button>
    );
};

export default PlainButton;