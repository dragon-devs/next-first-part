'use client';
import React, {useState} from 'react';
import {CldUploadWidget, CldImage} from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
      <>
        {publicId &&
            <CldImage alt="an image." width={270} height={180} src={publicId} />
        }
        <CldUploadWidget
            uploadPreset="qorm0xd1"
            options={{
              sources: ['local'],
              multiple: false, // multiple files upload
              maxFiles: 5,
            }}
            onUpload={(results, widget) => {
              if (results.event !== 'success') return;
              const info = results.info as CloudinaryResult;
              setPublicId(info.public_id);
            }}
        >
          {({open}) =>
              <button
                  className="btn btn-primary"
                  onClick={() => open()}
              >Upload</button>}
        </CldUploadWidget>
      </>
  );
};

export default UploadPage;