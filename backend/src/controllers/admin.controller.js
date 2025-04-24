import { Admin } from "../models/admins.model.js";

const generateAccessAndRefreshToken = async (userId) => {
  const admin = await Admin.findById(userId);

  const accessToken = admin.generateAccessToken();
  const refreshToken = admin.generateRefreshToken();

  admin.refreshToken = refreshToken;
  await admin.save({ validateBeforeSave: false });
  // console.log(refreshToken)
  return { accessToken, refreshToken };
};

const registerAdmin = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (!fullName) {
    return res.json({
      success: false,
      message: "Please enter your Fullname.",
    });
  }

  if (!email) {
    return res.json({
      success: false,
      message: "Please enter your valid email.",
    });
  }

  if (!password) {
    return res.json({
      success: false,
      message: "Please enter your Password.",
    });
  }

  if (!confirmPassword) {
    return res.json({
      success: false,
      message: "Please enter your Confirm Password.",
    });
  }

  if (password !== confirmPassword) {
    return res.json({
      success: false,
      message:
        "Please try again. Your Password and Confirm Password is not same",
    });
  }

  const existedAdmin = await Admin.findOne({ email });

  if (existedAdmin) {
    return res.json({
      success: false,
      message: "User already existed.",
    });
  }

  const admin = await Admin.create({
    fullName,
    email,
    password: password,
  });

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    admin._id
  );

  const createdAdmin = await Admin.findById(admin._id).select(
    "-password -refreshToken"
  );

  if (!createdAdmin) {
    return res.json({
      success: false,
      message: "Something went wrong in database call. Please try again. ",
    });
  }

  const refreshTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  };

  const accessTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  };

  return res
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json({
      success: true,
      message: "User created successfully.",
    });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({
      success: false,
      message: "Please enter your valid email.",
    });
  }

  if (!password) {
    return res.json({
      success: false,
      message: "Please enter your Password.",
    });
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.json({
      success: false,
      message: "User does not exist.",
    });
  }

  try {
    const isPasswordValid = await admin.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Please enter correct Password.",
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "Please use login with google option.",
    });
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    admin._id
  );

  const loggedInAdmin = await Admin.findById(admin._id).select(
    "-password -refreshToken"
  );

  const refreshTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  };

  const accessTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json({
      success: true,
      message: "Logged in successfully.",
    });
};

const logoutAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(
    req.admin._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );

  const refreshTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
  };

  const accessTokenOptions = {
    httpOnly: "true",
    secure: "true",
    sameSite: "None",
  };

  return res
    .clearCookie("accessToken", accessTokenOptions)
    .clearCookie("refreshToken", refreshTokenOptions)
    .json({
      status: true,
      message: "User logout successfully.",
    });
};

export { registerAdmin, loginAdmin, logoutAdmin };
