import React from 'react';
import { CircleHelp } from 'lucide-react';

const ShowImage = () => {
  return (
    <div className="flex w-1/4 flex-col ">
      <div className="flex">
        <div className="mr-2 flex-shrink-0">Your photo</div>
        <div className="p-1">
          <CircleHelp size={16} />
        </div>
      </div>
      <div className="text-xs text-slate-500">
        This will be displayed on your profile.
      </div>
    </div>
  );
};

export default ShowImage;
