import React from 'react'

function Loader() {
  return (
    <>
      <div className="relative w-12 h-12 border-[5px] border-white rounded-full inline-block box-border animate-[pulse_1s_linear_infinite]">
        <span className="absolute left-1/2 top-1/2 w-12 h-12 border-[5px] border-main rounded-full box-border inline-block animate-[scaleUp_1s_linear_infinite] transform -translate-x-1/2 -translate-y-1/2"></span>

        <style>
          {`
      @keyframes scaleUp {
        0% { transform: translate(-50%, -50%) scale(0); }
        60%, 100% { transform: translate(-50%, -50%) scale(1); }
      }
     
    `}
        </style>
      </div>
    </>
  );
}

export default Loader