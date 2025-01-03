# DATA Analytics challenge 

In this challenge you will have 2 types of data in CSV
the first challenge is Fraud transactions you need to detected how many Fraud transaction. The second is a text parsing challenge we need to find the most frequently use words.

# RULES

Use GitHub Co-Pilot to generate your code/answer i suggest you use Python for ease but you can use any other languages if you thing it can do the job. Since Copilot do not do deep analytics it would generate you the code for you.

## Challenge 1 Fraud detection Rules

High Transaction Amount
Transactions with amounts greater than $3000 were marked as fraudulent. These transactions represent a clear risk due to their high value.
Transaction Type:

Transactions of type "??????" were more likely to be marked as fraudulent. Specifically, a 50% chance of being fraudulent was assigned to transfers to simulate risky behavior.
(No hints you have to figure out which transactions type will most likely be use in bank for fraudulent activities)

Merchant Name:
Transactions involving merchants with "Ltd" in their name were slightly riskier, with a 30% chance of being marked as fraudulent. This simulates merchants that might have a history of fraud or are unusual.

# important hints: Set a random seed for reproducibility of 42 need to be use to maintain consistent so your answer would be always the same.

## Challenge 2 Text parsing most frequent use words

identify the most frequently used keywords in the chat messages.

i want the top 10

for extra i also want the longest keyword use 

# REQUIREMENTS

python install latest version

i suggest going to https://python-fiddle.com/ its a online IDE that can run all your python code without hassle to import missing libs
