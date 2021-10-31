const formatDate = (date: string) => {
  try {
    return new Date(date).toLocaleString();
  } catch {
    return null;
  }
};


export default formatDate
