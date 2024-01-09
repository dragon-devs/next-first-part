import React from 'react';
import {number} from "prop-types";

interface Props {
  params: {id: number; photoId: number}
}
const UserPhotoDetail = ({ params: {id, photoId}} : Props) => {
  return (
      <div>
        <div className="glass">Glass</div>

        UserPhotoDetail {id} {photoId}
      </div>
  );
};

export default UserPhotoDetail;