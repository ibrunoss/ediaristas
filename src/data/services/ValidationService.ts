const zipCode = (zipCode: string): boolean =>
  zipCode.replace(/\D/g, "").length === 8;

export default { zipCode };
