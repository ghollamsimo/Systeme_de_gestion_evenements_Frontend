import React from "react";
import {EventTable} from "../tables/EventTable.tsx";
import {NavbarDashboard} from "../components/NavbarDashboardComponent.tsx";
import {Stats} from "../components/StatsComponent.tsx";
import {UsersTable} from "../tables/UsersTabel.tsx";

export const DashboardPage: React.FC = () => {

    return (
        <div className="min-h-screen">
            <main className="flex-1">
             <NavbarDashboard/>
                <div className="p-6">
                    <Stats/>
                    <EventTable/>
                    <UsersTable/>
                </div>
            </main>
        </div>
    );
};
