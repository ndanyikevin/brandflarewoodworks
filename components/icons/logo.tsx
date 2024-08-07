import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    // <svg
    //   width="177"
    //   height="50"
    //   viewBox="0 0 177 50"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M44.88 39V38.6L45.68 38.28C46.2133 38.0933 46.56 37.84 46.72 37.52C46.9067 37.2 47 36.7733 47 36.24V15.36C47 14.8267 46.92 14.4 46.76 14.08C46.6 13.76 46.24 13.5067 45.68 13.32L44.88 13V12.6H55.16V13L54.36 13.32C53.8267 13.5067 53.4667 13.76 53.28 14.08C53.12 14.4 53.04 14.8267 53.04 15.36V36.24C53.04 36.7733 53.12 37.2 53.28 37.52C53.4667 37.8133 53.8267 38.0667 54.36 38.28L55.16 38.6V39H44.88ZM56.8313 39V38.6L57.3913 38.44C58.3246 38.1733 58.7913 37.52 58.7913 36.48V23.96C58.7913 23.3733 58.6979 22.9467 58.5113 22.68C58.3246 22.3867 57.9646 22.1867 57.4313 22.08L56.8313 21.92V21.52L63.6713 19.2L64.0713 19.6L64.3913 22C65.3246 21.1733 66.3779 20.4933 67.5513 19.96C68.7246 19.4267 69.8846 19.16 71.0313 19.16C72.7913 19.16 74.1379 19.64 75.0713 20.6C76.0313 21.56 76.5113 23.0267 76.5113 25V36.52C76.5113 37.56 77.0179 38.2133 78.0313 38.48L78.3913 38.6V39H68.9513V38.6L69.4713 38.44C70.4046 38.1467 70.8713 37.4933 70.8713 36.48V23.72C70.8713 22.0133 70.0179 21.16 68.3113 21.16C67.1379 21.16 65.8579 21.7467 64.4713 22.92V36.52C64.4713 37.56 64.9379 38.2133 65.8713 38.48L66.2313 38.6V39H56.8313ZM87.3609 39.6C85.6543 39.6 84.3209 39.1733 83.3609 38.32C82.4276 37.4667 81.9609 36.1067 81.9609 34.24V20.56H79.2009V20.16L80.1609 20C80.9876 19.8133 81.6943 19.5467 82.2809 19.2C82.8943 18.8533 83.4943 18.3867 84.0809 17.8L87.3609 14.16H87.7609L87.6409 19.76H92.1209V20.56H87.6009V34.96C87.6009 35.8933 87.8009 36.6 88.2009 37.08C88.6276 37.56 89.1609 37.8 89.8009 37.8C90.3609 37.8 90.8543 37.6667 91.2809 37.4C91.7076 37.1067 92.1343 36.72 92.5609 36.24L92.9609 36.64C92.4276 37.5467 91.6943 38.2667 90.7609 38.8C89.8276 39.3333 88.6943 39.6 87.3609 39.6ZM104.137 19.16C105.87 19.16 107.35 19.52 108.577 20.24C109.804 20.9333 110.737 21.8933 111.377 23.12C112.044 24.32 112.377 25.6933 112.377 27.24C112.377 27.5333 112.364 27.84 112.337 28.16C112.31 28.4533 112.257 28.72 112.177 28.96H100.257C100.284 31.84 100.79 33.92 101.777 35.2C102.79 36.4533 104.284 37.08 106.257 37.08C107.59 37.08 108.67 36.8667 109.497 36.44C110.324 36.0133 111.097 35.3867 111.817 34.56L112.217 34.92C111.39 36.3867 110.284 37.5333 108.897 38.36C107.537 39.1867 105.897 39.6 103.977 39.6C102.084 39.6 100.404 39.2 98.9369 38.4C97.4702 37.5733 96.3235 36.4 95.4969 34.88C94.6702 33.36 94.2569 31.5467 94.2569 29.44C94.2569 27.2533 94.7369 25.4 95.6969 23.88C96.6569 22.3333 97.8835 21.16 99.3769 20.36C100.897 19.56 102.484 19.16 104.137 19.16ZM104.017 19.96C103.244 19.96 102.577 20.2 102.017 20.68C101.484 21.1333 101.057 21.96 100.737 23.16C100.444 24.3333 100.284 26 100.257 28.16H107.097C107.364 25.2533 107.257 23.16 106.777 21.88C106.297 20.6 105.377 19.96 104.017 19.96ZM114.37 39V38.6L114.97 38.44C115.504 38.28 115.864 38.04 116.05 37.72C116.264 37.4 116.37 36.9867 116.37 36.48V23.96C116.37 23.3733 116.264 22.9467 116.05 22.68C115.864 22.3867 115.504 22.1867 114.97 22.08L114.37 21.92V21.52L121.25 19.2L121.65 19.6L122.01 23.04V23.36C122.384 22.6133 122.864 21.9333 123.45 21.32C124.064 20.68 124.73 20.16 125.45 19.76C126.197 19.36 126.93 19.16 127.65 19.16C128.664 19.16 129.437 19.44 129.97 20C130.504 20.56 130.77 21.2667 130.77 22.12C130.77 23.0267 130.504 23.7333 129.97 24.24C129.464 24.72 128.85 24.96 128.13 24.96C127.01 24.96 126.024 24.4 125.17 23.28L125.09 23.2C124.824 22.8267 124.517 22.6267 124.17 22.6C123.824 22.5467 123.504 22.7067 123.21 23.08C122.944 23.32 122.717 23.6133 122.53 23.96C122.37 24.28 122.21 24.6533 122.05 25.08V36.24C122.05 37.3067 122.517 37.9733 123.45 38.24L124.73 38.6V39H114.37ZM132.027 39V38.6L132.587 38.44C133.52 38.1733 133.987 37.52 133.987 36.48V23.96C133.987 23.3733 133.893 22.9467 133.707 22.68C133.52 22.3867 133.16 22.1867 132.627 22.08L132.027 21.92V21.52L138.867 19.2L139.267 19.6L139.587 22C140.52 21.1733 141.573 20.4933 142.747 19.96C143.92 19.4267 145.08 19.16 146.227 19.16C147.987 19.16 149.333 19.64 150.267 20.6C151.227 21.56 151.707 23.0267 151.707 25V36.52C151.707 37.56 152.213 38.2133 153.227 38.48L153.587 38.6V39H144.147V38.6L144.667 38.44C145.6 38.1467 146.067 37.4933 146.067 36.48V23.72C146.067 22.0133 145.213 21.16 143.507 21.16C142.333 21.16 141.053 21.7467 139.667 22.92V36.52C139.667 37.56 140.133 38.2133 141.067 38.48L141.427 38.6V39H132.027ZM165.272 39.6C163.245 39.6 161.485 39.1867 159.992 38.36C158.498 37.5067 157.338 36.3067 156.512 34.76C155.712 33.2133 155.312 31.4 155.312 29.32C155.312 27.24 155.738 25.44 156.592 23.92C157.472 22.4 158.658 21.2267 160.152 20.4C161.672 19.5733 163.378 19.16 165.272 19.16C167.165 19.16 168.858 19.5733 170.352 20.4C171.845 21.2 173.018 22.36 173.872 23.88C174.752 25.4 175.192 27.2133 175.192 29.32C175.192 31.4267 174.778 33.2533 173.952 34.8C173.152 36.32 172.005 37.5067 170.512 38.36C169.045 39.1867 167.298 39.6 165.272 39.6ZM165.272 38.8C166.205 38.8 166.952 38.5333 167.512 38C168.072 37.4667 168.472 36.52 168.712 35.16C168.978 33.8 169.112 31.88 169.112 29.4C169.112 26.8933 168.978 24.96 168.712 23.6C168.472 22.24 168.072 21.2933 167.512 20.76C166.952 20.2267 166.205 19.96 165.272 19.96C164.338 19.96 163.578 20.2267 162.992 20.76C162.432 21.2933 162.018 22.24 161.752 23.6C161.512 24.96 161.392 26.8933 161.392 29.4C161.392 31.88 161.512 33.8 161.752 35.16C162.018 36.52 162.432 37.4667 162.992 38C163.578 38.5333 164.338 38.8 165.272 38.8Z"
    //     fill="#292F36"
    //   />
    //   <path
    //     d="M0 42.0003H13.4588V32.499C13.4588 30.4853 15.0898 28.8543 17.1035 28.8543C19.1172 28.8543 20.7482 30.4853 20.7482 32.499V42.0003H33.9975V8C15.2211 8 0 23.2211 0 42.0003Z"
    //     fill="#CDA274"
    //   />
    // </svg>
    <div>
      <div className="block sm:hidden">
        <Image src="/logos/hd_black_no_bg.png" alt="Brandflare Woodworks" width={170} height={50} />
      </div>
      <div className="hidden sm:block">
        <Image src="/logos/hd_black_no_bg.png" alt="Brandflare Woodworks" width={300} height={100} />
      </div>
    </div>
    
  );
};

export default Logo;
