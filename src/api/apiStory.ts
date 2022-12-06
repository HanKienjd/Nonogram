import axiosClient from "./axiosClient";

export const getAllStory = async (params?: string) => {
  const url = "/api/story";
  const response = await axiosClient.get(url, { params });
  return response;
};
