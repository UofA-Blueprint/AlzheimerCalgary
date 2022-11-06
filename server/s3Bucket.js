import {S3Client, ListBucketsCommand, PutObjectCommand, HeadObjectCommand} from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AwsAccessKey || '',
        secretAccessKey: process.env.AwsSecretAccesKey || ''
    },
    region: process.env.AwsBucketRegion || '',
})

export const run = async () => {
    try {
      const data = await s3Client.send(new ListBucketsCommand({}));
      console.log("Success", data.Buckets);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
};



export const uploadPhoto = async (fileDetails) => {
  const uploadParams = {
    Bucket: process.env.AwsBucketName,
    Key: fileDetails.Key,
    Body: fileDetails.Body
  }
  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

run();