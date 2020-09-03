const API_URL_DEVELOPMENT = "/api";

export async function getOrganizationInfo(orgNrArr, getObj) {
  let orgObj;
  if (!getObj) orgObj = "";
  try {
    const response = await fetch(
      `${API_URL_DEVELOPMENT}/${orgNrArr}/${orgObj}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    if (data.msg) {
      console.log("getOrganizationInfo-error:", data.msg);
      return false;
    }
    return data;
  } catch (error) {
    // logg
    console.log(error);
    return "Couldn't get data";
  }
}
