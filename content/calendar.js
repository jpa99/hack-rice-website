export const title = "Schedule";

export const dayOne = "Friday, 9/14";
export const dayTwo = "Saturday, 9/15";
export const dayThree = "Sunday, 9/16";

export const friday = [
  {
    time: "4:30 PM",
    title: "Early Registration",
    detail: "Registration begins for Rice students."
  },
  {
    time: "5–6:30 PM",
    title: "Main Registration",
    detail: "Come to the Grand Hall to check into the event."
  },
  {
    time: "5–7:00 PM",
    title: "Sponsor Setup",
    detail: "Sponsors will arrive, register & set up their tables."
  },
  {
    time: "7 PM",
    title: "Opening Ceremonies",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
  },
  {
    time: "7:30 PM",
    title: "Dinner & Form Teams",
    detail:
      "Enjoy food from Thai Cottage and meet other hackers to form teams (if you haven't already)."
  },
  {
    time: "8 PM",
    title: "Hacking Begins!",
    detail: "Start building your project!."
  },
  {
    time: "11 PM",
    title: "Late Night...",
    detail: "Tiff's Treats cookies..."
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "9 AM",
    title: "Breakfast",
    detail: "Bagels from Einstein Bros!"
  },
  {
    time: "12 PM",
    title: "Lunch",
    detail: "Potbelly Sandwiches for lunch."
  },
  {
    time: "8 PM",
    title: "Dinner",
    detail: "Tacos-a-Go-Go for our happy hackers!"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
  {
    time: "8:30 AM",
    title: "Judges Arrive",
    detail: "Judges will have arrived, prepared to evaluate hackers & projects."
  },
  {
    time: "9 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on DevPost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judging commences at the tables in the Grand Hall."
  },
  {
    time: "11 AM",
    title: "Brunch",
    detail: "Kolaches from Kolache Factory..."
  },
  {
    time: "1 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded"
  },
  {
    time: "2 PM",
    title: "Finale!",
    detail:
      "Hope you had a wonderful event, and we look forward to HackRice 9 :)"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});
