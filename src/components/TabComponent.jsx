import React, { useState } from 'react';
// import FirstTab from './FirstTab';
// import SecondTab from './SecondTab';
// import ThirdTab from './ThirdTab';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <div className={`tab-button tab-button-1 ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tab 1</div>
        <div className={`tab-button ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Tab 2</div>
        <div className={`tab-button tab-button-3 ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Tab 3</div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <div>
            <h2 className='head'>First Tab</h2>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae ad quam voluptate, temporibus commodi nemo culpa qui molestias aliquid veritatis incidunt beatae dolor pariatur accusamus, atque earum dignissimos quibusdam.
            </div>
        </div> }
        {activeTab === 2 && <div>
            <h2 className='head'>Second Tab</h2>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae ad quam voluptate, temporibus commodi nemo culpa qui molestias aliquid veritatis incidunt beatae dolor pariatur accusamus, atque earum dignissimos quibusdam.
            </div>
        </div> }
        {activeTab === 3 && <div>
            <h2 className='head'>Third Tab</h2>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae ad quam voluptate, temporibus commodi nemo culpa qui molestias aliquid veritatis incidunt beatae dolor pariatur accusamus, atque earum dignissimos quibusdam.
            </div>
        </div>}
      </div>
    </div>
  );
};

export default TabComponent;
