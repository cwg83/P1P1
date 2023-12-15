module.exports = mongoose => {

  const schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      cards: []
    },
    { timestamps: true }
  )


  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Cube = mongoose.model("cube", schema);

  return Cube;
};