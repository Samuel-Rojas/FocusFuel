
export default function EntryCard({date, focusedMinutes, mood, reflection}){
    return (
        <div className="border-2 border-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between w-full md:w-1/3 bg-gray-100 transition-all duration-700 hover:scale-105">
            <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
            <p className="text-lg font-medium mb-2">Minutes Focused: {focusedMinutes}</p>
            <p className="text-md font-semibold m-2 capitalize">Mood: {mood}</p>
            <p className="text-sm text-gray-700">{reflection}</p>
        </div>
    )
}