import React, { useState } from 'react';
import './../style/main.css'

const ToggleIcons = () => {
  const [visibleIcon, setVisibleIcon] = useState(true);

  const toggleVisibility = () => {
    setVisibleIcon(prevVisible => !prevVisible); 
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div>
      {visibleIcon ? (
        <span onClick={toggleVisibility}>
          <DarkIcon />
        </span>
      ) : (
        <span onClick={toggleVisibility}>
          <LightIcon />
        </span>
      )}

    </div>
  );
};

const DarkIcon = () => <svg className='themeIcon' fill="#180609" width="18px" height="18px" viewBox="-0.7 -0.7 36.40 36.40" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg" stroke="#180609" stroke-width="0.77"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path></g></svg>;
const LightIcon = () => <svg className='themeIcon' width="21px" height="21px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#071300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Environment / Sun"> <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#161510" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>;

export default ToggleIcons;
