const BRREG_API = process.env.BRREG_API;
const fetch = require("node-fetch");

async function getOrganization(orgNrArr) {
  let orgArr = await Promise.all(
    orgNrArr.map(async (orgNr) => await getResp(orgNr))
  );
  return orgArr;
}

async function getResp(orgNr) {
  try {
    const response = await fetch(`${BRREG_API}/${orgNr}`, {
      method: "GET",
    });
    let data = await response.json();
    return customObject(data);
  } catch (error) {
    console.log("Cant get the organization(s)", error);
    return `Cant get the organization(s)`;
  }
}

//TODO: make a function that only returns the data to be displayed instead of dragging around the whole object(s)
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
  console.log(missingInfo);
  // return customObj;
  return { customObj, missingInfo };
}

function checkObj(obj) {
  let missingInfo;
  for (let [key, value] of Object.entries(obj)) {
    if (value === false) {
      missingInfo = {
        missing: key,
      };
    }
  }
  if (missingInfo) {
    missingInfo.organisasjonsnummer = obj.organisasjonsnummer;
    return missingInfo;
  }
}
module.exports = getOrganization;
