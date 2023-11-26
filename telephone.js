function telephoneCheck(str) {
  let telephoneRegex =
    /^1?(\s)?(\d{3}|(\(\d{3}\)))(\s|-)?(\d{3})(\s|-)?(\d{4}$)/;

  return telephoneRegex.test(str);
}

console.log(telephoneCheck("1 (555)-555-5555"));
