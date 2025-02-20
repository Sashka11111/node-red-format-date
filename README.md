# Node-RED Date Formatter Node 🗓️

## Description

This node allows you to format a date into a user-defined format. It uses the `Moment.js` library for parsing and formatting dates. The node accepts a date as a string or timestamp and returns it as a formatted string according to the selected format. 🎉

## Features ✨

- Accepts a date in string or timestamp format.
- Uses `Moment.js` for parsing and formatting the date.
- Allows custom date format configuration.
- Returns the formatted result in `msg.payload`.

## Example 📝

### Input:

```json
{
  "payload": "2024-02-21"
}
```

Output:

```json
{
  "payload": "21/02/2024"
}
```
