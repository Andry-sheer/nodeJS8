import mongoose from "mongoose";

const fieldsSchema = new mongoose.Schema({
  ccy : {
    type : String,
    required : [true, 'field ccy is required'],
    minLength : [3, 'field ccy must be bigger than 3 charts'],
    maxLength : [20, 'field ccy must be lower or equals 20 charts'],
    uppercase : true,
    trim : true
  },
  base_ccy : {
    type : String,
    required : [true, 'field base_ccy is required'],
    minLength : [3, 'field base_ccy must be bigger than 3 charts'],
    maxLength : [20, 'field base_ccy must be lower or equals 20 charts'],
    uppercase : true,
    trim : true
  },
  buy : {
    type : Number,
    required : [true, 'field buy is required'],
    min : [0, 'field buy must be bigger than 0']
  },
  sale : {
    type : Number,
    required : [true, 'field buy is required'],
    min : [0, 'field buy must be bigger than 0']
  },
  time : {
    type : Date,
    default: Date.now
  }
});

const restApiSchema = new mongoose.Schema({
    valuta: {
      type : fieldsSchema,
      required : true
    }
  },
  {
    timestamps : true,
    optimisticConcurrency : true
  }
);

export default mongoose.model('RestApi', restApiSchema);