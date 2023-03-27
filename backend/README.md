# BEFORE A PR

Always run `npm run lint` in order to format the entire project.

# DB SEEDING

```
npx prisma db push # pushes the schema to the database
npx prisma generate # creates the prisma client (used inside PrismaService, it is the class through which we make our queries)
npx prisma db seed # seeds the database
```

Right now quizzes are not seeded in the db, only companies, company accounts, participant accounts and the admin account.
