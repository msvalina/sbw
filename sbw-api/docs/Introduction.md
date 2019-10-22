Introduction
============

## sbw

Application for tracking and viewing exercise progressions from [startbodyweight.com](http://www.startbodyweight.com) routine.


Micro increments algorithm
===========================
Is used for calculating next level in progression session.
If we have e.g. last progression session a level of 7,6,6 and we performed the same, then next session will have level value incremented by one meaning 7,7,6.
If we have last progression session level of 7,6,6 but we have performed 7,5,5, then next session will have level value of 6,6,6, because level 7,6,6 equals to 19 reps, and we have performed 7,5,5 which is 17 reps so next time we should be able to perform 18 reps or 6,6,6.
Both examples assume that order in which this progression is done in relation to other progressions is not changed and repeat flag is not set.
If we have last progression session level of 7,6,6 and we have performed 7,6,6 and the progression was done first in order, then next time if the order has changed and progression has been moved from first position to third position in order the level value will be decreased by 2 (because now we have already done two progressions and we are tired) which is 17 reps, and increase by 1 which is 18 reps, meaning 6,6,6. So we are doing 6,6,6 instead of 7,7,6

Progression
===========
Short for exercise progression is a single exercise done in multiple sets with defined time for rest in between sets. Progression promises that if done right after completing goal user will be able to progress to next exercise in progression category.

### Routine

A name which represents collection of exercise progressions. Default value is "StartBodyweight basic routine".

### Position

Number which height tells where does the current progression stand in relation to other progressions in the same category.

### Goal

Final number of sets and repetitions. Number of digits present number of sets and each digit value presents number of repetitions for that set. So 888 means, 3 sets with 8 repetitions.

### Rest time

Number of seconds in between sets

### Category

Global progression category e.g. Squats, Pull Ups etc. in a routine.


Progression Session
===================
Is record in time of single exercise progression with information about level of particular progression session, actual performed number of sets and repetitions, custom user repeat flag and automatic next flag.

### Level

By default level is set to 444 at start of every new progression session for basic routine.

### Performed

Is an user input of actual number of sets and reps performed at the particular session

### Repeat Flag

Is an user input which tells sbw app to offer the same level of progression on next workout session

### Order

Is a number representing in which order was progression executed in relation to other progressions in same workout session. Min value is 1, max value depends on number of progressions in or 7 if all progressions from basic routine are done.

Workout Session
===============
Is collection of progression sessions done by user in one workout in specific time frame e.g. one hour, one progression session by another.

