const API_URL_EXTERNAL_SERVER = process.env.API_URL_EXTERNAL_SERVER;
const fetch = require("node-fetch");

async function getOrganization(orgNrArr) {
  // TODO: return obj
  return Promise.all(orgNrArr.map((orgNr) => getOrganizationById(orgNr)));
}

async function getOrganizationById(orgNr) {
  try {
    const response = await fetch(`${API_URL_EXTERNAL_SERVER}/${orgNr}`, {
      method: "GET",
    });
    let data = await response.json();

    if (data.status == 400) {
      let errMsg = data.feilmelding;
      let errValidation;
      // console.log("Feilmelding:", errMsg);

      if (data.valideringsfeil) {
        errValidation = data.valideringsfeil[0].feilmelding;

        // console.log("Valideringsfeil:", errValidation);
      }
      throw new Error(errMsg, errValidation);
    }
    return customObject(data);
  } catch (error) {
    return `Cant get the organisation!`;
  }
}

function customObject(data) {
  let customObj = {
    organisasjonsnummer: data.organisasjonsnummer || false,
    navn: data.navn || false,
    kommune: data.forretningsadresse.kommune || false,
    hjemmeside: data.hjemmeside || false,
    kode: data.naeringskode1 ? data.naeringskode1.kode : false,
    antallAnsatte: data.antallAnsatte === 0 ? "0" : data.antallAnsatte,
  };

  let missingInfo = checkObj(customObj);
  return { customObj, missingInfo };
}

function checkObj(obj) {
  let missingInfo;
  for (let [key, value] of Object.entries(obj)) {
    if (value === false) {
      missingInfo = {
        missingField: key,
      };
    }
  }
  if (missingInfo) {
    missingInfo.organisasjonsnummer = obj.organisasjonsnummer;
    return missingInfo;
  }
}
module.exports = getOrganization;
