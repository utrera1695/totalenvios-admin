import global from './global';
import * as axios from 'axios';

const URL = global.URL;
const headers = {
  Authorization: localStorage.getItem('token')
};

const GetPromotions = async () => {
  try {
    return await axios.get(URL + '/images/promotion');
  } catch (error) {
    console.log(error);
  }
};
const GetSlider = async () => {
  try {
    return await axios.get(URL + '/images/slider');
  } catch (error) {
    console.log(error);
  }
};

const SaveImages = async data => {
  try {
    return await axios.post(URL + '/images', data, {
      headers
    });
  } catch (error) {
    console.log(error);
  }
};

const DeleteImages = async id => {
  try {
    return await axios.delete(URL + '/images?id=' + id, {
      headers
    });
  } catch (error) {
    console.log(error);
  }
};

function UploadPic(file) {
  try {
    return axios({
      method: 'post',
      url: URL + '/images/upload',
      data: file,
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
  } catch (error) {
    console.log(error);
  }
}
export default {
  DeleteImages,
  SaveImages,
  GetSlider,
  GetPromotions,
  UploadPic
};