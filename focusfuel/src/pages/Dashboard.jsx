import QuoteDisplay from "./QuoteDisplay";
import RecentEntries from "./RecentEntries";
import QuickActions from "./QuickActions";

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full h-screen">
            <QuoteDisplay />
            <RecentEntries />
            <QuickActions />
        </div>
    )
}