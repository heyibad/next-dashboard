import React from "react";
import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    title: string;
    icon: React.ReactElement<LucideIcon>;
    count: number;
}

const DashboardCard = ({ title, icon, count }: DashboardCardProps) => {
    return (
        <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl font-bold text-slate-500 dark:text-slate-200">
                    {title}
                </h3>
                <div className="flex gap-5 justify-center item-center">
                    {icon}
                    <h3
                        className="text-3xl font-semibold
                    text-slate-500 dark:text-slate-200
                    "
                    >
                        {count}
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
