const APP_API = "/api";
const BRREG_API = "https://data.brreg.no/enhetsregisteret/api/enheter";

export async function getOrganizationInfo(orgNrObj) {
  let orgObj = await Promise.all(
    orgNrObj.map(async (orgNr) => await getResp(orgNr))
  );
  return orgObj;
}

async function getResp(orgNr) {
  try {
    const response = await fetch(`${BRREG_API}/${orgNr}`, {
      method: "GET",
    });
    let data = await response.json();
    if (data.status == 400) {
      let errMsg = data.feilmelding;
      let errValidation;
      // log in error lib
      console.log("Feilmelding:", errMsg);

      if (data.valideringsfeil) {
        errValidation = data.valideringsfeil[0].feilmelding;
        //TODO: remove cons.log and log in error lib, and send to UI
        console.log("Valideringsfeil:", errValidation);
      }
      let errObj = { errMsg, errValidation };
      return errObj;
    }
    return data;
  } catch (error) {
    console.log("Cant get the organization(s)", error);
    return `Cant get the organization(s)`;
  }
}
