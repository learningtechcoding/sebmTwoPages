import React from 'react';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';

const HowToRegister = () => {
    return (
        <div>
            <div className='levelstylefirstregis' > 
            <SectionOne />
            </div>

         <div className='levelstylefirst' >
            <SectionTwo />
            </div>
              
         <div className='levelstylefirst' >
         <SectionFour />
            </div>
              
               <div className='levelstylefirst' >
               <SectionThree />
               </div>
         
        </div>
    );
}

export default HowToRegister;
