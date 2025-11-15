import axios from "axios";

const API_KEY = "wxe54t972ohyjn26l";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskid = await uploadImage(file);
    console.log("image uploaded,task id", taskid);

    const enhancedImageData = await fetchEnhancedImage(taskid);
    console.log("imae enhanced data:", enhancedImageData);
    // return enhancedImageData;
  } catch (error) {
    console.log("error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formdata = new FormData();
  formdata.append("image_file", file);
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formdata,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new error("Failed to upload image! Task id not found.");
  }
  return data.data.task_id;
};

const fetchEnhancedImage = async (taskid) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskid}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new error("Failed to fetch enhanced image! Image not found.");
  }
  return data.data;
};
