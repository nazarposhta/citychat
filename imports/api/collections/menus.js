import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const MenuSchema = new SimpleSchema({
    name: {type: String},
    todos: {type: [Object]}
});

export const MenusCollection = new Mongo.Collection('menus');
