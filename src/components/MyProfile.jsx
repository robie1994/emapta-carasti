import React, { useEffect } from 'react';
import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Analytics from './Analytics';
import UserTabs from './UserTabs';
import { handleStatusChange } from '../utils/utils';
const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [headerText, setHeaderText] = useState();

  useEffect(() => {
    setHeaderText(handleStatusChange(selectedTab));
  }, [selectedTab]);

  return (
    <div className="border-r-1 mx-2 mb-4 h-[95%] min-w-[80%]  overflow-auto rounded-md border bg-white p-5">
      <p className="text-xl font-bold">{headerText}</p>
      <div className="flex w-auto pr-4 pt-3 ">
        <div className="flex w-11/12 flex-col gap-y-2 text-sm">
          <UserTabs
            selectedTab={selectedTab}
            setSelected={(index) => setSelectedTab(index)}
          />
          <div className="h-full w-full rounded-xl ">
            {selectedTab === 0 ? (
              <PersonalInfo />
            ) : selectedTab === 3 ? (
              <Analytics />
            ) : (
              'This feature is still under development.'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
