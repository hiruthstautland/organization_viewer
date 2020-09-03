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

    return data;
  } catch (error) {
    throw new Error("Error from Client", error);
  }
}
