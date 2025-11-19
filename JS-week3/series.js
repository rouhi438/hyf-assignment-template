const seriesDurations = [
  {
    title: "Friends",
    days: 6,
    hours: 23,
    minutes: 12,
  },
  {
    title: "Modern Family",
    days: 11,
    hours: 20,
    minutes: 22,
  },
  {
    title: "Money Heist",
    days: 13,
    hours: 20,
    minutes: 53,
  },
   {
    title: "House Of Dragon",
    days: 14,
    hours: 16,
    minutes: 31,
  },
];

const averageLife = 80;

function getSeriesText(title) {
  const totalLifeMinutes = averageLife * 365 * 24 * 60;

  const series = seriesDurations.find(
    (item) => item.title.toLowerCase() === title.toLowerCase());

  if (!series) {
    return `Series "${title}" not found.`;
  }
  const seriesMinutes =
    series.days * 24 * 60 + series.hours * 60 + series.minutes;

  const percent = (seriesMinutes / totalLifeMinutes) * 100;

  return `${series.title} took ${percent.toFixed(2)}% of my life`;
}

// calc total Percent Function ===========================

function getTotalPercent() {
  const totalLifeMinutes = averageLife * 365 * 24 * 60;

  let totalSeriesMinutes = 0;

  seriesDurations.forEach((item) => {
    totalSeriesMinutes += item.days * 24 * 60 + item.hours * 60 + item.minutes;
  });

  const totalPercent = (totalSeriesMinutes / totalLifeMinutes) * 100;

  return `All series took ${totalPercent.toFixed(2)}% of my life`;
}

console.log(getSeriesText("friends"));        
console.log(getSeriesText("Modern Family"));   
console.log(getSeriesText("money Heist"));     
console.log(getSeriesText("Sherlock Holmes")); 
console.log(getSeriesText('house of dragon'))
console.log(getTotalPercent())        



































