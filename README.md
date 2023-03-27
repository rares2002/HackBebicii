# MOFT-tank-pe-NEST

## SETUP

### Install

Pentru proiect aveti nevoie de urmatoarele chestii:

1. `node`
1. `npm`
1. `mysql`

Pentru 1 si 2, daca nu le aveti instalate deja recomand sa le instalati
prin [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), asta
este un mic utilitar care va permite sa updatati/schimbati versiunea
de node/npm f usor. O data instalat `nvm`, puteti sa il rulati ca
[aici](https://github.com/nvm-sh/nvm#installing-and-updating).

Pentru 3, cel mai bine urmariti un tutorial ca [acesta](https://phoenixnap.com/kb/install-mysql-ubuntu-20-04#ftoc-heading-6)
si daca apar probleme dm me.

De asemenea, trebuie sa creati baza de date din consola mysql (trebuie sa rulati `mysql -u root -p` ca sa intrati in ea) si sa creeati baza de date folosind comanda `create database moft;`.

In plus ce ar mai fi folositor este sa instalati nestjs/cli global cu:

```
npm i -g @nestjs/cli
```

in terminal.

### Project Setup

Copiati `.env.example` intr-un fisier nou `.env`. Aici o sa puneti configuratiile
specifice sistemului vostru (e.g. parola de la mysql).

Campurile care ar trebui schimbate sunt:

- `MAIL_USER`
- `MAIL_PASS`

Pentru testarea de mailuri recomand [mailtrap](https://mailtrap.io/). Dupa ce va
logati puteti sa intrati la sectiunea email testing si sa creeati un nou proiect
si sa va scrieti credentialele voastre. Orice mail trimis il veti vedea in
inboxul proiectului.

- `DATABASE_URL`

Asta e linkul cu care prisma se va conecta la mysql. Formatul este
`mysql://{username}:{password}@localhost:3306/{db_name}?schema=public`, schimbati
in functie de cum v-ati configurat baza de date.

Rulati `npm install`, evident.

### Prisma setup

Trebuie sa rulati

```
npx prisma db push # asta updateaza schema din baza de date
npx prisma generate # asta updateaza PrismaService-ul care e folosit in cod
```

## LA TREABA

Acum puteti sa rulati proiectul cu

```
npm run start:dev
```

Pentru a genera boiler plateul pentru un modul puteti folosi

```
nest generate resource {Nume Modul}
```

Dupa ce terminati si vreti sa dati un commit, rulati intotdeauna

```
npm run format
```

### Mail & S3

Pentru trimiterea de mailuri aveti un model in `src/utils/mail.ts`,
unde puteti adauga functii in plus pentru trimiterea altor mailuri.

Pentru S3 recomand sa va uitati la CompanyService din targ.
