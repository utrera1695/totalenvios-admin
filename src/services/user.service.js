import global from './global';
import * as axios from 'axios';

const URL = global.URL;
const headers = {
  Authorization: localStorage.getItem('token')
};

async function SaveUser(data) {
  try {
    return await axios.post(URL + '/api/user', data, {
      headers
    });
  } catch (error) {
    console.log(error);
    alert('Ya existe un doctor con el mismo email');
  }
}
async function DeleteUser(id) {
  try {
    return await axios.delete(URL + '/api/user?id=' + id, {
      headers
    });
  } catch (error) {
    console.log(error);
  }
}
async function UpdateUSer(data, id) {
  try {
    return await axios.put(URL + '/api/user?id=' + id, data, {
      headers
    });
  } catch (error) {
    console.log(error);
  }
}
async function UploadPic(file) {
  try {
    return await axios.post(URL + '/api/upload/single', file, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function Login(email, password) {
  try {
    return await axios.post(URL + '/api/user/login', {
      email: email,
      password: password
    });
  } catch (error) {
    console.log(error);
  }
}

async function Logout() {
  try {
    localStorage.clear();
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
async function StatusApi() {
  try {
    return await axios
      .get(URL + '/api/status', {
        headers
      })
      .catch(err => {
        localStorage.clear();
        window.location.reload();
      });
  } catch (error) {
    console.log(error);
  }
}
export default {
  DeleteUser,
  UploadPic,
  SaveUser,
  UpdateUSer,
  Login,
  Logout,
  StatusApi
};
