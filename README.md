# Project Planning App

A simple React application for managing a developer team and planning coding tasks based on team capacity.

# Description

This project was created as a school assignment with a limited time scope (6 hours).  
The goal was to build a React app that allows users to:

- Manage a team of developers (junior / senior)
- Calculate daily coding capacity based on team composition
- Plan a project by entering required code lines and time limit
- Automatically validate whether the project plan is feasible

If the plan is feasible, the action button becomes active and allows approval.  
If not, the the action button remains red and disabled.

# Technologies Used

- React
- JSX
- CSS

# Features

- Add and remove developers from the team
- Distinguish between junior and senior developers
- Automatic calculation of daily coding capacity
- Real-time validation of project feasibility
- Input validation (positive numbers only)
- Clean and responsive layout

# Capacity Logic

- Junior developer: **100 lines of code per day**
- Senior developer: **200 lines of code per day**

Total daily capacity is calculated dynamically based on the current team.

# Author

Hana Červenková
January 2026
