export const getMatch = (queryString) => {
  //FOR $MATCH
  const queryObj = { ...queryString };
  const removeField = ["page", "sort", "limit", "fields"];
  removeField.forEach((el) => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(
    /\b(gte|gt|lte|lt|ne|eq)\b/g,
    (match) => `$${match}`
  );

  return JSON.parse(queryStr);
};

export const getProject = (queryString) => {
    //FOR $MATCH
    const fields = this.queryString.fields.split(",").join(" ");
    this.query = this.query.select(fields);
  
    return queryStr;
  };
  
