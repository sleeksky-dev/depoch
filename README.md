# Depoch - Unix Epoch for Dates

When dealing with time, example birthdays, storing in Date Time comes with its own issues. It's hard to ever get it right the first time.

Depoch is the Unix Epoch equivalent for Dates. It returns the number of days since Unix Epoch.

The main idea is to store this number in database for dates. It makes it easy to go forward, backward, compare etc.

## Usage

### Convert from date to depoch

```
const { toDepoch, fromDepoch } = require('depoch')
const dt = toDepoch('2023-01-01'); // 19358

toDepoch('2023-01-01T04:00:00'); // 19358

toDepoch('2023-01-01T04:00:00Z') // Depends on your time zone
```

### Convert from depoch to date
```
const dt = toDepoch('2023-01-01');
const obj = fromDepoch(dt); 
/* returns
{
  year: 2023,
  month: 1,
  date: 1,
  day: 'Sunday',
  locale: 2023-01-01T08:00:00.000Z,
  utc: 2023-01-01T00:00:00.000Z
}
*/
```



