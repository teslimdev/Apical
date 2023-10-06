import React, { useState } from "react";
import classNames from "classnames";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-4 py-2 mx-1 font-semibold border-b-2 border-transparent hover:border-[#222222] focus:outline-none",
        {
          "border-b-[#222222]": isActive,
        }
      )}
    >
      {label}
    </button>
  );
};

const TabContent = ({ children, isActive }) => {
  return isActive ? <div>{children}</div> : null;
};

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div>
        {/* {tabs.map((tab) => (
          <TabContent key={tab.id} isActive={activeTab === tab.id}>
            {tab.content.map((element) => {
            <p>{element}</p>;

              // console.log(element);
              
            })}

            
          </TabContent>
        ))} */}

        {tabs.map((tab) => (
          <TabContent key={tab.id} isActive={activeTab === tab.id}>
            {tab.content.map((element, index) => (
              <p key={index} className="py-5">{element}</p>
))}
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
