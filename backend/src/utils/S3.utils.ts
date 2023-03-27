import { S3 } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
dotenv.config();

export function getS3PublicUrl(key: string) {
  return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}

export function getS3Instance() {
  return new S3({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
}
