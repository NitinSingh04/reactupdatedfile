import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadImageOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                folder: "Images",
                resourse_type: "image"
            })
        
        fs.unlinkSync(localFilePath)  // remove the locally saved temporary file as the upload operation got successful
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


const deleteResourse = async (avatar) => {await cloudinary.uploader
    .destroy(avatar,
    { resource_type: 'image' })}





export { uploadImageOnCloudinary, deleteResourse }