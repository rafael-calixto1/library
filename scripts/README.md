## Importing SQL Scripts into MySQL using cmd

### Introduction
These SQL scripts are designed to set up tables and add books to your MySQL database. Follow the steps below to import each file into your MySQL server.

### Prerequisites
Ensure you have MySQL installed and running on your system before proceeding.

### Step-by-Step Guide

#### React-SpringBoot-Add-Tables-Script-1.sql
This script initializes the necessary tables for the application.
1. Open your terminal or command prompt.
2. Log in to your MySQL server using \`mysql -u your_username -p\`.
3. Enter your MySQL password when prompted.
4. Choose the database where you want to import the tables: \`use your_database_name;\`
5. Import the script: \`source /path/to/React-Springboot-Add-Tables-Script-1.sql;\`

#### React-SpringBoot-Add-Books-Script-2.sql to React-SpringBoot-Add-Books-Script-5.sql
These scripts add book data to the tables created.
1. Follow steps 1-3 from the previous section to log in to MySQL.
2. Choose the same database used for the tables: \`use your_database_name;\`
3. Import each script individually:
   - \`source /path/to/React-SpringBoot-Add-Books-Script-2.sql;\`
   - \`source /path/to/React-SpringBoot-Add-Books-Script-3.sql;\`
   - \`source /path/to/React-SpringBoot-Add-Books-Script-4.sql;\`
   - \`source /path/to/React-SpringBoot-Add-Books-Script-5.sql;\`



### Conclusion
You've successfully imported the necessary SQL scripts into your MySQL database. Verify the tables and book data to ensure the import was successful.
