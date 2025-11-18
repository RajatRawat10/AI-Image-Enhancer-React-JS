import axios from "axios";

const API_KEY = "wxe54t972ohyjn26l";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskid = await uploadImage(file);
    console.log("Image uploaded, task id:", taskid);

    const enhancedImageData = await PollForEnhancedImage(taskid);
    console.log("Enhanced image data:", enhancedImageData);

    return enhancedImageData;

  } catch (error) {
    console.log("Error enhancing image:", error.message);
    throw error;
  }
};


// 1) Upload image to API
const uploadImage = async (file) => {
  const formdata = new FormData();
  formdata.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formdata,
    {
      headers: {
        // "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task id not found.");
  }

  return data.data.task_id;
};


// 2) Fetch enhanced image result
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
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};


// 3) Polling API until processing is completed
const PollForEnhancedImage = async (taskid, retries = 0) => {
  const result = await fetchEnhancedImage(taskid);

  // Check processing state
  if (result.state === 4) {   // if 4 = still processing
    console.log("Processing... attempt");

    if (retries >= 15) {
      throw new Error("Maximum retries reached. Please try again later.");
    }

    // Wait 2 sec
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskid, retries + 1);
  }

  // Completed
  return result;
};
