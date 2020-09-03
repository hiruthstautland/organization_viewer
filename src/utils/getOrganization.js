const API_URL_DEVELOPMENT = process.env.API_URL_DEVELOPMENT;
const API_DEVELOPMENT = process.env.API_DEVELOPMENT;

export async function getOrganizationInfo(orgNrArr, getObj) {
  let organizationobj;
  if (!getObj) organizationobj = "";
  try {
    const response = await fetch(
      `${API_URL_DEVELOPMENT}/${API_DEVELOPMENT}/${orgNrArr}/${organizationobj}`,
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
