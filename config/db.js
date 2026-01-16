import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URl);
    console.log('connected to the MONGODB database ${conn.connection.host}'.bgMagenta.white);
  } catch (error) {
    console.log("error in MONGODB ${error}".bgred.white);
  }
};

export default connectDB;
