import React from 'react';
import { CircleAlert } from 'lucide-react';
import jpgUpload from '../images/jpgUpload.PNG';

const ImageDrop = ({ imageUrl, handleSetImage }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      handleSetImage(e.target.result); // Set the uploaded image URL as state
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="flex w-3/4 ">
      <div
        className="mx-5 h-16 w-16 rounded-full "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className="flex w-8/12 items-center
             justify-center rounded-xl border
             border-sky-500 px-2 py-3"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="flex w-full cursor-pointer flex-col "
        >
          <div className="flex items-center justify-center">
            <span
              className="flex w-8 items-center justify-center
                   rounded-md border border-slate-200 p-1"
            >
              <CircleAlert />
            </span>
          </div>
          <div className="flex w-full  px-2">
            <div className="text-md flex w-11/12 flex-col">
              <div className="w-full ">
                <p>
                  <span className="font-semibold text-cyan-500">
                    Click to upload
                  </span>{' '}
                  or drag and drop
                </p>
              </div>
              <div className="w-full">
                <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
            <div>
              <img src={jpgUpload} alt="" className=" ml-2 size-14" />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageDrop;
