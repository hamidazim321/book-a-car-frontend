const getFormData = (form) => {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
};

export default getFormData;
