import React, { useState, useEffect } from 'react';
import './Styles/LightDarkToggle.css';

function LightDarkToggle() {
    const [isLightMode, setIsLightMode] = useState(false);

    const handleClick = () => {
      setIsLightMode(!isLightMode);
    };

    return (
        <div className="LightDarkToggle scale-10 float-right" onClick={handleClick}>
          <div className="Frame1 w-[150px] h-[20.0px] relative bg-white bg-opacity-0">
            <div className="Group5 w-[693px] h-[300px] left-[27px] top-[50px] absolute">
              <div className={`Rectangle1 w-[400px] h-[300px] left-[143px] top-0 absolute transition-colors duration-1000 ${isLightMode ? 'bg-blue-300' : 'bg-zinc-700'}`}/>
              <div className={`Ellipse1 w-[300px] h-[300px] left-[393px] top-0 absolute rounded-full transition-colors duration-1000 ${isLightMode ? 'bg-blue-300' : 'bg-zinc-700'}`}/>
              <div className={`Ellipse2 w-[300px] h-[300px] left-0 top-0 absolute rounded-full transition-colors duration-1000 ${isLightMode ? 'bg-blue-300' : 'bg-zinc-700'}`}/>
            </div>
            <div className={`Group6 w-[229px] h-[216px] left-[386px] top-[88px] absolute ${!isLightMode ? 'group-fade-in' : 'group-invisible'}`}>
              <div className="Line1 w-[11.31px] h-[0px] left-[48px] top-[11.31px] absolute origin-top-left -rotate-90 border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[16px] top-[79px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[25px] top-[77px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[99px] top-[48px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[108px] top-[46px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[135px] top-[177px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[144px] top-[175px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[1px] top-[206px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[10px] top-[204px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Group2 w-2.5 h-2.5 left-[184px] top-[32px] absolute">
                <div className="Line1 w-[11.31px] h-[0px] left-[1px] top-[2px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
                <div className="Line2 w-[12.81px] h-[0px] left-[10px] top-0 absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              </div>
              <div className="Line1 w-[11.31px] h-[0px] left-[220px] top-[120px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[229px] top-[118px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[151px] top-[92px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[160px] top-[90px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Line1 w-[11.31px] h-[0px] left-[68px] top-[142px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
              <div className="Line2 w-[12.81px] h-[0px] left-[77px] top-[140px] absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
              <div className="Group4 w-[219px] h-[216px] left-[5px] top-0 absolute">
                <div className="Line1 w-[11.31px] h-[0px] left-[38px] top-[2px] absolute origin-top-left rotate-45 border-2 border-amber-50"></div>
                <div className="Line2 w-[12.81px] h-[0px] left-[47px] top-0 absolute origin-top-left rotate-[141.34deg] border-2 border-amber-50"></div>
                <div className="Line3 w-3 h-[0px] left-0 top-[204px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line10 w-3 h-[0px] left-[184px] top-[32px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line9 w-3 h-[0px] left-[219px] top-[118px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line8 w-3 h-[0px] left-[98px] top-[46px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line7 w-3 h-[0px] left-[150px] top-[90px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line6 w-3 h-[0px] left-[15px] top-[77px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line5 w-3 h-[0px] left-[134px] top-[175px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
                <div className="Line4 w-3 h-[0px] left-[67px] top-[140px] absolute origin-top-left rotate-90 border-2 border-amber-50"></div>
              </div>
            </div>
            <div className={`Group8 origin-top-left w-[330px] h-[189px] left-[410px] top-[294px] absolute ${isLightMode ? 'group-fade-in' : 'group-invisible'}`}>
                <div className="Ellipse5 w-[66px] h-[46.95px] left-[-141.60px] top-[-0px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse6 w-[50.40px] h-[46.95px] left-[-174px] top-[-13.24px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse7 w-[50.40px] h-[46.95px] left-[-189.60px] top-[-0px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse8 w-[63.60px] h-[37.32px] left-[-224.40px] top-[-0px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse9 w-[63.60px] h-[37.32px] left-[-207.60px] top-[-22.87px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse10 w-[63.60px] h-[37.32px] left-0 top-[-95.10px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse11 w-9 h-[37.32px] left-[-45.60px] top-[-95.10px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse12 w-[66px] h-[37.32px] left-[-63.60px] top-[-84.27px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse13 w-9 h-[37.32px] left-[-73.20px] top-[-95.10px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse14 w-[151.20px] h-[37.32px] left-[-178.80px] top-[-132.42px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse15 w-9 h-[37.32px] left-[-264px] top-[-121.59px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse16 w-9 h-[37.32px] left-[-240px] top-[-121.59px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse17 w-9 h-[37.32px] left-[-199.20px] top-[-140.85px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse18 w-[75.60px] h-[37.32px] left-[-224.40px] top-[-140.85px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse19 w-9 h-[37.32px] left-[-240px] top-[-151.68px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse20 w-9 h-[37.32px] left-[-196.80px] top-[-132.42px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse21 w-9 h-[37.32px] left-[-218.40px] top-[-122.79px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
                <div className="Ellipse22 w-9 h-[37.32px] left-[-217.20px] top-[-151.68px] absolute origin-top-left -rotate-180 bg-emerald-50 rounded-full" />
            </div>
            <div className={`Ellipse3 w-[265px] h-[265px] left-[50px] top-[66px] absolute rounded-full transition duration-500 ${isLightMode ? 'bg-yellow-200 move-right' : 'bg-amber-50'}`} />
          </div> 
        </div>
    );
}

export default LightDarkToggle;
