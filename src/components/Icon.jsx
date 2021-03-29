import React from 'react';
export default function Icon({icon, text}) {
  return (
    <div className="flex flex-row justify-end">
      <div className="flex flex-col items-center justify-center">
        {text && (
          <>
            <img className="w-10 h-10 m-2" src={icon} alt={text} />
            <p className="text-sm text-black p-2">{text}</p>
          </>
        )}
        {!text && (
          <img
            className="object-cover h-12 w-30 rounded-lg shadow-lg"
            src={icon}
            alt={text}
          />
        )}
      </div>
    </div>
  );
}
