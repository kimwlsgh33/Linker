// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Post, Terms, User } = initSchema(schema);

export {
  Tag,
  Post,
  Terms,
  User
};