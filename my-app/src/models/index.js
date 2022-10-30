// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Story, Comment, Term, Post, User } = initSchema(schema);

export {
  Story,
  Comment,
  Term,
  Post,
  User
};