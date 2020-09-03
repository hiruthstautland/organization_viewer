const API_URL_DEV = process.env.API_URL_DEV;

export async function getOrganizationInfo(orgArr) {
  try {
    const response = await fetch(`${API_URL_DEV}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orgArr),
    });
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
