export const saveVariableToFile = (val: any, fileType: string, fileName: string) => {
  const element = document.createElement('a');
  const file = new Blob(val, { type: fileType });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
};
