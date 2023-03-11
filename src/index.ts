
const toDepoch = (date?: Date | string | number) => {
  let year, month, day;
  if (!date) date = new Date()
  if (typeof date === 'number') {
    if (`${date}`.length === 8) {
      let str = `${date}`
      year = +str.substring(0, 4)
      month = +str.substring(4, 6)
      day = +str.substring(6, 8)
    } else if (`${date}`.length <= 5) {
      return date;
    } else {
      let dt = new Date(date)
      year = dt.getFullYear()
      month = dt.getMonth() + 1
      day = dt.getDate()  
    }
  } else if (typeof date === 'string' && date.match(/^\d{4}[-\/\\]\d{2}[-\/\\]\d{2}$/)) {
    let [y, m, d] = date.split(/[-\/\\]/)
    year = +y 
    month = +m 
    day = +d
  } else {
    let dt = new Date(date)
    year = dt.getFullYear()
    month = dt.getMonth() + 1
    day = dt.getDate()
  }
  let y = `${year}`.padStart(4, '0')
  let m = `${month}`.padStart(2, '0')
  let d = `${day}`.padStart(2, '0')
  let dt = new Date(`${y}-${m}-${d}T00:00:00Z`)
  return dt.getTime()/(1000*60*60*24)
}

const fromDepoch = (depoch: number) => {
  let dt = new Date(depoch * 1000*24*60*60)
  let str = dt.toISOString();
  let [year, month, date] = str.split('T')[0].split('-')
  let locale = new Date(str.substring(0, str.length - 1))
  let utc = new Date(str)
  let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][locale.getDay()]

  return {
    year: +year, 
    month: +month, 
    date: +date,
    day, 
    locale,
    utc
  };
}

export { toDepoch, fromDepoch }
