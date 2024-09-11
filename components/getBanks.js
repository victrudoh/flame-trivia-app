const seed = "373373373373";
const nubanLength = 10;
const serialNumLength = 9;


const getAccountBanks = (accountNumber, banks) => {

  let suggestedBanks = [];
  let otherBanks = [];

  banks && banks.map && banks.map(({ code, name }) => {
    if (isBankAccountValid(accountNumber, code)) {
      suggestedBanks.push({ code, name });
    } else {
      otherBanks.push({ code, name })
    }
  });

  return suggestedBanks;
}



const isBankAccountValid = (accountNumber, bankCode) => {
  if (!accountNumber || !accountNumber.length == nubanLength) {
    return false;
  }

  let serialNumber = accountNumber.substring(0, 9);
  let checkDigit = generateCheckDigit(serialNumber, bankCode);

  return checkDigit == accountNumber[9];
};

const generateCheckDigit = (serialNumber, bankCode) => {
  if (serialNumber.length > serialNumLength) {
    throw new Error(
      `Serial number should be at most ${serialNumLength}-digits long.`
    );
  }

  serialNumber = serialNumber.padStart(serialNumLength, "0");
  let cipher = bankCode + serialNumber;
  let sum = 0;

  // Step 1. Calculate A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
  cipher.split("").forEach((item, index) => {
    sum += item * seed[index];
  });

  // Step 2: Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
  sum %= 10;

  // Step 3. Subtract your result from 10 to get the Check Digit
  let checkDigit = 10 - sum;

  // Step 4. If your result is 10, then use 0 as your check digit
  checkDigit = checkDigit == 10 ? 0 : checkDigit;

  return checkDigit;
};

export default getAccountBanks;
