class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
    this.totalCount;
  }

  filter() {
    const queryObject = { ...this.queryString };
    const excludedFields = ["page", "limit", "sort", "fields"];
    excludedFields.forEach((current) => delete queryObject[current]);

    if (queryObject.search && queryObject.search.length > 1) {
      const field = "name";
      queryObject[field] = { $regex: queryObject.search, $options: "i" };

      delete queryObject.search;
    }

    let queryStr = JSON.stringify(queryObject);

    //use regex to modify queryObject for mongodb aggregations
    queryStr = queryStr.replace(/\b(lt|lte|gt|gte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" "); //from sort=name,-createdAt to sortBy = name -createdAt
      this.query.sort(sortBy);
    } else {
      this.query.sort("-createdBy");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query.select(fields);
    } else {
      this.query.select("-__v");
    }
    return this;
  }

  // async count() {
  //   const docCount = this.query.countDocuments();
  //   this.totalCount = await docCount;
  //   console.log(docCount, this.totalCount);
  //   return this;
  // }

  paginate() {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 10;
    const skip = (page - 1) * limit;

    this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
