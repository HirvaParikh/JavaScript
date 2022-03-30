export const validName = new RegExp('^[a-zA-Z ]+$');
export const validNumeric = new RegExp('^[0-9]+$');
export const validPhone = new RegExp('^([0-9]{10})+$');
export const validEmail = new RegExp('^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$');
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,12}$');
