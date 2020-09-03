const API_URL = process.env.API_URL;
const PORT = process.env.PORT;
const api = "api";

export async function getOrganizationInfo(orgArr) {
  try {
    const response = await fetch(`${API_URL}${PORT}/${api}`, {
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
