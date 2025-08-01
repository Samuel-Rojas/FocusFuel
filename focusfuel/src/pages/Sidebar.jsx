const mockUser = {
    name: "Samuel Rojas",
    weeklyFocus: { hours: 5, minutes: 30 }, 
    lastEntrySnipped: "last Session: 45 mins - Mood: Great"
};

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen flex flex-col shadow-lg">
            <div className="mb-8 text-center">
                <div className="text-xl font-semibold mb-2">{mockUser.name}</div>
                <div className="text-sm text-gray-300">
                    Focus This Week: {mockUser.weeklyFocus.hours}h {mockUser.weeklyFocus.minutes}m
                </div>
                <div className="text-xs text-gray-400 mt-1">{mockUser.lastEntrySnipped}</div>
            </div>

            <nav className="flex-grow">
                <ul className="space-y-2">
                    <li>
                        <a href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-200">
                            <span className="ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/flow" className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-200">
                            <span className="ml-2">Flow</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}