import global from './global';
import * as axios from 'axios';

const URL = global.URL;
const headers = {
  Authorization: localStorage.getItem('token')
};

const GetPromotions = async () => {
  try {
    return await axios.get(URL + '/image?type=P');
  } catch (error) {
    console.log(error);
  }
};
const GetSlider = async () => {
  try {
    return await axios.get(URL + '/image?type=S');
  } catch (error) {
    console.log(error);
  }
};

const SaveImages = async data => {
  try {
    return await axios.post(URL + '/image', data, {
      headers
    });
  } catch (error) {
    console.log(error);
  }
};

const DeleteImages = async id => {
  try {
    return await axios.delete(URL + '/image?id=' + id, {
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
      url: URL + '/upload',
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