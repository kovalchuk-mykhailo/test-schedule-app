const url = "https://europe-west3-project-277412.cloudfunctions.net/function-1";

const getResponseJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getScheduleData = async () => {
  const resp = await getResponseJson(url);
  return resp.status ? resp.schedule : [];
};
