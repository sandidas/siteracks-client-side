import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface IButton{
    text?:string;
    handler?:() => void;
}

const PlainButton = ({text, handler}:IButton) => {
    return (
        <button onClick={handler}
        className="transition ease-in-out duration-500 flex h-10 items-center font-medium group-hover:text-primary"
        >
            <span className='tracking-normal group-hover:tracking-wider duration-300 border-b-2 hover:border-primary'>
            {text && text}
            </span>
            <ArrowSmallRightIcon className="h-8 w-8 text-primary pl-2 group-hover:translate-x-2 duration-300" />
        </button>
    );
};

export default PlainButton;