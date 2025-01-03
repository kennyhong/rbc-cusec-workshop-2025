# Java Challenge (5-15 minutes)

In this challenge, you will be creating a simple application that will read in a csv file of stocks from a **two year period** and performing simple tasks, **only** using **GitHub Co-Pilot**.

# RULES

You may **ONLY** use GitHub Co-Pilot to generate and fix code. You cannot manually create or fix code. If the response of GitHub Co-Pilot is not what you want, use prompts to correct your code.

All the functions you create can be called in the main java function. The object should be different file but feel free to put the functions in the main java file (no need to create services).

**SHOW YOUR PROMPTS**: We'll be checking your prompts to see if they match up with your program. You can copy and paste the responses to your prompts in any place within your program, but everything has to be done through co-pilot. For example, you can split the tasks into smaller steps and put it all together at the end.

## Task 1
Create a Stock class that matches the headers of the csv file provided with the Java challenge folder. (You're welcomed to use external packages and libraries if you can tell co-pilot to set everything up...)

## Task 2
Create a function that reads in the csv file into a collection of the recently created Stock class as you see fit.
Within that function, print the following output in the console:

```
Number of stocks in collection: ###
```

## Task 3
Create a function that calculates the **performance** of stocks (if you don't know the formula... try asking co-pilot! You'll have all the information necessary to calculate it).
Create another function that determines the **Top 5** most performing stock within that collection and print it in the console. Here's an example of what it should look like:

```
1. STK     Performance: +XX%
2. STK     Performance: +XX%
3. STK     Performance: +XX%
4. STK     Performance: +XX%
5. STK     Performance: +XX%
```

If you want you can also print out the 5 most underperforming stocks within the collection as well!

```
1. STK     Performance: -XX%
2. STK     Performance: -XX%
3. STK     Performance: -XX%
4. STK     Performance: -XX%
5. STK     Performance: -XX%
```

This task is flexible in the sense that you are free to determine the top 5/worst 5 however you like, as long as you **ONLY** use GitHub co-pilot!