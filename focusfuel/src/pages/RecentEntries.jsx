import EntryCard from "./EntryCard";

export default function RecentEntries() {
  const recentEntriesData = [
    {
      id: 1,
      date: "2023-10-27",
      focusedMins: 45,
      mood: "Great",
      reflection:
        "Felt very productive today, great flow during the morning session.",
    },
    {
      id: 2,
      date: "2023-10-26",
      focusedMins: 30,
      mood: "Good",
      reflection:
        "Managed to finish that difficult task. Need to remember to stretch more.",
    },
    {
      id: 3,
      date: "2023-10-25",
      focusedMins: 55, 
      mood: "Excellent",
      reflection: "Really focused on the new feature, made good progress.",
    },
  ];

  return (
    <div className="mt-2 p-6 border-2 shadow-lg rounded-2xl border-gray-100">
      <div className="flex justify-center p-2">
        <h1>Today's Focus: X Mins</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mt-4 space-y-4 md:space-y-0 md:space-x-4">
        {recentEntriesData.map(entry => (
          <EntryCard
            key={entry.id}
            date={entry.date}
            focusedMinutes={entry.focusedMins}
            mood={entry.mood}
            reflection={entry.reflection}
          />
        ))}
      </div>
    </div>
  );
}
