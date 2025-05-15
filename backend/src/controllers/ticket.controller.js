import { Ticket } from "../models/tickets.model.js";

const createTicket = async (req, res) => {
  try {
    const { mobileNumber, amount, date, startingTime, game, guest } = req.body;

    const verify = [mobileNumber, amount, date, startingTime, game, guest].filter(
      (item) => item == undefined || item == null
    );

    if (verify[0]) {
      return res.json({
        message: "All fields are required.",
        success: false,
      });
    }

    const endingTime = startingTime + 3600

    const existedTicket = await Ticket.aggregate([
      {
        $match: {
          game: game
        }
      },
      {
        $match: {
          $expr: {
            $and: [
              { $lt: ["$startingTime", startingTime] },
              { $gt: ["$endingTime", endingTime] }
            ]
          }
        },
      },
    ]);

    console.log(existedTicket);
    if (existedTicket[0]) {
      return res.json({
        message: "Already Booked.",
        success: true,
      });
    }

    const createTicket = await Ticket.create({
      mobileNumber,
      date,
      startingTime,
      endingTime,
      game,
      amount,
      guest,
      flag: "Waiting",
    });

    const ticket = await Ticket.findById(createTicket._id);

    if (!ticket) {
      return res.json({
        message: "Something went wrong during database call",
        success: false,
      });
    }

    return res.json({
      message: "Ticket booked",
      success: true,
    });
  } catch (error) {
    console.log("Error : ", error);
    return res.json({
      message: "Try again",
      success: false,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { ticketID } = req.body;

    let checkTicket = await Ticket.findById(ticketID);

    if (!checkTicket) {
      return res.json({
        message: "No ticket found",
        success: false,
      });
    }

    const ticket = await Ticket.findByIdAndDelete(ticketID);

    checkTicket = await Ticket.findById(ticketID);

    if (checkTicket) {
      return res.json({
        message: "Something went wrong during database call",
        success: false,
      });
    }

    return res.json({
      message: "Ticket deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error : ", error);
    return res.json({
      message: "Try again",
      success: false,
    });
  }
};

const getAllTicket = async (req, res) => {
  try {
    const getAllTicket = await Ticket.find();

    const numberOfTickets = getAllTicket.length;
    const earning = getAllTicket.reduce((acc, curr) => acc + curr.amount, 0);

    return res.json({
      message: "Fetch successfully",
      success: true,
      data: getAllTicket,
      numberOfTickets: numberOfTickets,
      earning: earning,
    });
  } catch (error) {
    console.log("Error : ", error);
    return res.json({
      message: "Try again",
      success: false,
    });
  }
};

const changeFlag = async (req, res) => {
  const { ticketID, flag } = req.body;

  const ticket = await Ticket.findOneAndUpdate(
    { _id: ticketID },
    { $set: { flag: flag } },
    { returnNewDocument: true }
  );

  const existedTicket = await Ticket.findById(ticketID);

  return res.json({
    message: "Flag updated successfully",
    success: true,
    data: existedTicket,
  });
};

const getTicketByDate = async (req, res) => {
  try {
    const { date } = req.body;
    const getTicket = await Ticket.aggregate([
      {
        $match: {
          date: date,
        },
      },
    ]);

    const numberOfTickets = getTicket.length;
    const earning = getTicket.reduce((acc, curr) => acc + curr.amount, 0);

    return res.json({
      message: "Fetch successfully",
      success: true,
      data: getTicket,
      numberOfTickets: numberOfTickets,
      earning: earning,
    });
  } catch (error) {
    console.log("Error : ", error);
    return res.json({
      message: "Try again",
      success: false,
    });
  }
};

export {
  createTicket,
  deleteTicket,
  getAllTicket,
  changeFlag,
  getTicketByDate,
};
