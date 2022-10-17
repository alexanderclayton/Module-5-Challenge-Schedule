# Alex Clayton's Work Day Scheduler

## Introduction
This project was developed by Alex Clayton as part of the KU Coding Bootcampt 05-Third-Party APIs Challenge.  This is a Work Day Scheduler that allows the user to add notes to rows with corresponding hours of the day.  As each hour passes, the background color of the row will change from green (future hour), to red (current hour), to grey (past hour).  Notes are saved into each row using local storage.  This project uses a number of 3rd party APIs for styling (bootstrap) and some javascript functions (moment.js and jQuery).  

## What's in the project?
The acceptance criteria for this project are as follows:

1.  WHEN I open the planner
    THEN the current day is displayed at the top of the calendar

    I used moment.js to set the date and time.  I then used a setInterval() function to keep a running output of the time display in the header.

2.  WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours

    I created a series of division in the HTML page corresponding to each of the 24 hours in a day, and styled them with the included CSS sourcecode as well as some additional CSS I added to the style.css file.  I understand this only required "standard business hours" but I conduct my business all hours of the day so I included a row for each of the 24 hours in a day. 

3.  WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    This took a little jank, but I was able to come up with a solution...  I ended up declaring a variable for each textarea that was identified by the class name "description", so I had to loop through each element in that group.  Then I declared a variable corresponding to the ID of each of those divisions (which also required a loop) to determine if their corresponding hour was greater than, less than, or equal to the current hour of the day. I had to parseInt each of those values, as I needed to convert the returned value to a number so I could compare it to the number returned in my moment.js function to generate the value of the current hour.  For each of those loops, I set a series of if/else functions that added/removed the "future/present/past" classes to their corresponding divs.  Again, it was a little janky, but it got the job done...

4.  WHEN I click into a timeblock
    THEN I can enter an event

    This seemed to work simply because I set each of these timeblocks as "<textarea>" in the HTML file...  I originally created them as "<input>s" but the CSS file seemed to call for "<textarea>".

5.  WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage

    This was a javascript function we implemented in the previous unit challenge.  I used localStorage.setItem and localStorage.getItem to achieve this.

6.  WHEN I refresh the page
    THEN the saved events persist

    Another thing we implemented in the previous challenge that I used for this one.


    
## The completed project resembles the following image when deployed:

Full Size desktop view

![full size desktop view]()


## URL of the Deployed Application:

[Deployed Application]()
