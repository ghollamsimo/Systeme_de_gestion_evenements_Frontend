import React, {useEffect} from "react";
import {EventTable} from "../tables/EventTable.tsx";
import {NavbarDashboard} from "../components/NavbarDashboardComponent.tsx";
import {Stats} from "../components/StatsComponent.tsx";
import {UsersTable} from "../tables/UsersTabel.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/Store.ts";
import {index, stats} from "../redux/slices/EventSlice.ts";
import {indexUsers} from "../redux/slices/AuthSlice.ts";

export const DashboardPage: React.FC = () => {
    const dispatch = useDispatch();
    const stat = useSelector((state: RootState) => state.event.dataObj);
    const events = useSelector((state: RootState) => state.event.datalist)
    const users = useSelector((state) => state.auth.datalist);
    console.log('dkdkjod', users)
    useEffect(() =>{
        dispatch(stats())
        dispatch(index())
        dispatch(indexUsers())
    }, [dispatch])
    return (
        <div className="min-h-screen">
            <main className="flex-1">
             <NavbarDashboard/>
                <div className="p-6">
                    <EventTable events={events}/>
                    <UsersTable users={users}/>
                </div>
            </main>
        </div>
    );
};
