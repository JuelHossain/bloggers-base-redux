export default function randomDate() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = getRandomInt(0, 11).toString();
  const day = getRandomInt(1, 30).toString();
  const year = getRandomInt(2010, 2022).toString();

  const date = new Date(year, day, month);
  const fullDate = `${months[date.getMonth()]} ${date.getDate()} ${date
    .getFullYear()
    .toString()}`;
  return fullDate;
}
