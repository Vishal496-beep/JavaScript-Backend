import mongoose from 'mongoose'  //step1

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    Email : {
       type: String,
       required: true,
       unique: true,
       lowecase: true
    },
    Password: {
      type: String,
      required: true
    }
    

  }, {timestamps: true}
  ) //step2: we use schema using new keyword and store it in a variable

export const User = mongoose.model('User', userSchema) //step3: we gotta export like this everytime with almost everymodel;('User', userSchema): ther 'User' the moment it will go in database it will chenge into plural like user will becom users