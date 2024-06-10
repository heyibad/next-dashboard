import DashboardCard from "@/components/DashboardCard";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-between mb-5 gap-5">
            <DashboardCard
                title="POSTS"
                count={100}
                icon={<Newspaper className="text-slate-500" size={72} />}
            />
            <DashboardCard
                title="Categories"
                count={120}
                icon={<Folder className="text-slate-500" size={72} />}
            />
            <DashboardCard
                title="USER"
                count={654}
                icon={<User className="text-slate-500" size={72} />}
            />
            <DashboardCard
                title="Comments"
                count={1200}
                icon={<MessageCircle className="text-slate-500" size={72} />}
            />
        </div>
    );
}
