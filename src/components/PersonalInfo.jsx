import React, { useState } from 'react';
import NoUser from '../images/NoUser.jpg';
import { updateImage } from '../utils/Slice';
import { useDispatch, useSelector } from 'react-redux';
import ImageDrop from './ImageDrop';
import ShowImage from './ShowImage';
import SuccessModal from './SuccessModal';

const PersonalInfo = () => {
  let { fname, lname, email, bdate, phonenum, image } = useSelector(
    (state) => state.user,
  );
  const [isOpen, setIsOpen] = useState(false);

  const [userFName, setUserFName] = useState(fname);
  const [userLName, setUserLName] = useState(lname);
  const [userEmail, setUserEmail] = useState(email);
  const [userBdate, setUserBdate] = useState(bdate);
  const [userPhoneNum, setUserPhoneNum] = useState(phonenum);

  const [imageUrl, setImageUrl] = useState(image ? image : NoUser); // State to store the uploaded image URL
  const dispatch = useDispatch();

  const handleOnChange = (field, e) => {
    if (field === 'userFName') setUserFName(e.target.value);
    if (field === 'userLName') setUserLName(e.target.value);
    if (field === 'userEmail') setUserEmail(e.target.value);
    if (field === 'userBdate') setUserBdate(e.target.value);
    if (field === 'userPhoneNum') setUserPhoneNum(e.target.value);
  };

  const handleSave = () => {
    dispatch(
      updateImage({
        fname: userFName,
        lname: userLName,
        email: userEmail,
        image: imageUrl,
        bdate: userBdate,
        phonenum: userPhoneNum,
      }),
    );
    setIsOpen(true);
  };

  return (
    <div className="w-10/12">
      <div>
        <p className="text-xl">Personal Info</p>
        <p className="text-slate-400">
          Update your photo and personal details here.
        </p>
      </div>
      <div className="mt-10 border-t-2 py-5">
        <div className="flex">
          <div className="w-1/4">Name</div>
          <div className="w-3/4">
            <input
              onChange={(e) => handleOnChange('userFName', e)}
              value={userFName}
              type="text"
              className="mr-[1%] w-[35%] rounded-md border border-slate-300 p-2"
              data-testid="First Name"
            />
            <input
              onChange={(e) => handleOnChange('userLName', e)}
              value={userLName}
              type="text"
              className="w-[35%] rounded-md border border-slate-300 p-2"
              data-testid="Last Name"
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 py-5">
        <div className="flex">
          <div className="w-1/4">Email Address</div>
          <div className="w-3/4">
            <input
              onChange={(e) => handleOnChange('userEmail', e)}
              type="email"
              value={userEmail}
              className="w-[71%] rounded-md border border-slate-300 p-2"
              data-testid="Email Address"
            />
          </div>
        </div>
      </div>

      <div className="flex w-auto border-t-2 py-5">
        <div className="flex w-full ">
          <ShowImage />
          <ImageDrop
            imageUrl={imageUrl}
            handleSetImage={(value) => setImageUrl(value)}
          />
        </div>
      </div>
      <div className="border-t-2 py-5">
        <div className="flex">
          <div className="w-1/4">Date of Birth</div>
          <div className="w-3/4">
            <input
              onChange={(e) => handleOnChange('userBdate', e)}
              value={userBdate}
              type="text"
              className="w-[71%] rounded-md border border-slate-300 p-2"
              data-testid="Date of Birth"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 py-5">
        <div className="flex">
          <div className="w-1/4">Phone Number</div>
          <div className="w-3/4">
            <select className="h-10 w-[10%] rounded-l-lg border border-slate-300 text-center">
              <option value="AE">AE</option>
            </select>
            <input
              onChange={(e) => handleOnChange('userPhoneNum', e)}
              value={userPhoneNum}
              type="text"
              className="h-10 w-[61%] rounded-r-lg
              border border-slate-300 p-2"
              data-testid="Phone Number"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 py-5">
        <div className="flex justify-end">
          <div className="flex-grow"></div>
          <button className="mr-4 rounded-lg border border-slate-300 px-4 py-2 font-bold text-slate-600 hover:bg-red-600">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-sky-600 px-4 py-2 font-bold text-white hover:bg-green-600"
          >
            Save
          </button>
          <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
