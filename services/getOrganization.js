const BRREG_API = process.env.BRREG_API;
const fetch = require("node-fetch");

async function getOrganization(orgNrArr, getObj) {
  let orgArr = await Promise.all(
    orgNrArr.map(async (orgNr) => await getResp(orgNr, getObj))
  );
  return orgArr;
}

async function getResp(orgNr, getObj) {
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
      return { errMsg, errValidation };
    }
    // if (data.status == 400) throw data;
    return getObj ? customObject(data) : customArray(data);
  } catch (error) {
    console.log("Cant get the organization(s)", error);
    return `Cant get the organization(s)`;
  }
}

//TODO: make a function that only returns the data to be displayed instead of dragging around the whole object(s)
function customArray(data) {
  return {
    organisasjonsnummer: data.organisasjonsnummer || false,
    navn: data.navn || false,
    kommune: data.forretningsadresse.kommune || false,
    hjemmeside: data.hjemmeside || false,
    kode: data.naeringskode1 ? data.naeringskode1.kode : false,
    antallAnsatte: data.antallAnsatte === 0 ? "0" : data.antallAnsatte,
  };
}

function customObject(data) {
  return {
    0: data.organisasjonsnummer || false,
    1: data.navn || false,
    2: data.forretningsadresse.kommune || false,
    3: data.hjemmeside || false,
    4: data.naeringskode1 ? data.naeringskode1.beskrivelse : false,
    5: data.antallAnsatte,
  };
}
module.exports = getOrganization;
