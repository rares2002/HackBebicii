import { PrismaClient } from '@prisma/client';
import ShortUniqueId from 'short-unique-id';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const uidGenerator = new ShortUniqueId({ length: 6 });

function range(limit: number) {
  return [...Array(limit).keys()];
}

function randEnumValue<T>(enumObj: T): T[keyof T] {
  const enumValues = Object.values(enumObj);
  const index = Math.floor(Math.random() * enumValues.length);
  return enumValues[index];
}

function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function main() {
  console.log('Started Seeding');
  console.log('Done Seeding');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
