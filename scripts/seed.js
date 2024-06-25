// scripts/seed_ideas_meanings.js
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const csv = require('csv-parser');

const prisma = new PrismaClient();

async function main() {
  const results = [];
  const filePath = path.join(__dirname, 'ideas.csv');

  // Read CSV file
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        try {
          // Check if Idea already exists
          const existingIdea = await prisma.idea.findUnique({
            where: { name: row.ideaName },
          });

          let idea;

          if (!existingIdea) {
            // Insert Idea
            idea = await prisma.idea.create({
              data: {
                name: row.ideaName,
                slug: row.ideaSlug,
                image: row.ideaImage,
                description: row.ideaDescription,
              },
            });
          } else {
            idea = existingIdea;
            console.log(`Idea with name "${row.ideaName}" already exists.`);
          }

          // Check if Meaning already exists
          const existingMeaning = await prisma.meaning.findUnique({
            where: { slug: row.meaningSlug },
          });

          if (!existingMeaning && idea) {
            // Insert Meaning related to the Idea
            await prisma.meaning.create({
              data: {
                ideaId: idea.id,
                name: row.meaningName,
                slug: row.meaningSlug,
                description: row.meaningDescription,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            });
            console.log(`Meaning for "${row.meaningName}" created.`);
          } else if (existingMeaning) {
            console.log(`Meaning with slug "${row.meaningSlug}" already exists.`);
          }
        } catch (error) {
          console.error(`An error occurred: ${error.message}`);
        }
      }

      console.log('Data processing completed.');
      await prisma.$disconnect();
    });
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});

