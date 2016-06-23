import { Mongo } from 'meteor/mongo';

export const Lots = new Mongo.Collection('lots');
export const Orders = new Mongo.Collection('orders');
