// cat.schema.js (JavaScript)
const { Prop, Schema, SchemaFactory } = require('@nestjs/mongoose');

@Schema()
class Cat {
  @Prop()
  name;

  @Prop()
  age;

  @Prop()
  breed;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
