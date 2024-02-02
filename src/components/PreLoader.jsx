import React from 'react'

const PreLoader = () => {
    return (
        <div className='preload-animate w-full h-screen flex items-center justify-center bg-gray-100'>
            <svg width="80" height="80" fill="#1253d5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><filter id="spinner-gF00"><feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="y"></feGaussianBlur><feColorMatrix in="y" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="z"></feColorMatrix><feBlend in="SourceGraphic" in2="z"></feBlend></filter></defs><g filter="url(#spinner-gF00)"><circle cx="4" cy="12" r="3"><animate attributeName="cx" calcMode="spline" dur="0.75s" values="4;9;4" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite"></animate><animate attributeName="r" calcMode="spline" dur="0.75s" values="3;8;3" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite"></animate></circle><circle cx="15" cy="12" r="8"><animate attributeName="cx" calcMode="spline" dur="0.75s" values="15;20;15" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite"></animate><animate attributeName="r" calcMode="spline" dur="0.75s" values="8;3;8" keySplines=".56,.52,.17,.98;.56,.52,.17,.98" repeatCount="indefinite"></animate></circle></g></svg>
        </div>
    )
}

export default PreLoader
