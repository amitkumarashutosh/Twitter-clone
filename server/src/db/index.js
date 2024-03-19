import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MONGO_DB IS CONNECTED SUCCESSFULLY! DB_HOST ${connection.host}`
    );
  } catch (error) {
    console.log(`FAILED TO CONNECT DATABASE , ${error}`);
  }
};

export default connectDB;
