import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    timeslot: {
      type: String,
      required: true,
    },
    game: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      def: "Waiting",
    },
    shop: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
