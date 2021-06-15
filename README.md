# rogueFitness

## Available Scripts

To get this project to work, you will want to git clone this project.
Once cloned you can navigate through the terminal to the project directory and npm install.
After you install all the NPM packages use...

### `npx react-native run-ios`

You can use "npm start" but I prefer to use "npx react-native run-ios" because I'm only using an iOS Simulator but also it give you a logging terminal.

### `Rules for the babysitter kata`

- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime (9:00PM)
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)

### `Features`

Calculate my nightly charge to pay the babysitter for their time

### `About my code`

Currently using two TextInputs to return a start time and end time.

Using onBlur to change my time-of-day depending on what the user inputs. The time periods are 5-11 will be in PM and 12-4 (or 12-16) will change to AM.
Also in my onBlur functions (handleStartTime,handleEndTime) I'm using Hooks to set the message to remind me that the babysitter only works from 5PM - 4AM. 

My handleSubmit funciton will make sure the startShift is never after the endShift. Something like startShift at 6PM / endShift at 5PM.
Next it will calculate the hours worked, and use the formulas (once perfected) to calculate the total pay.