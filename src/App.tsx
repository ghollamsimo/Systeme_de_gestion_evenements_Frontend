import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./auth/LoginAuth.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {show} from "./redux/slices/AuthSlice.ts";
import {DashboardPage} from "./pages/DashboardPage.tsx";

function App() {
    const [user_id, setUser_id] = useState<string | null>(null);
    const [user_role, setUser_role] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
    };

    const decodeToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                return jwtDecode(token);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
        return null;
    };

    useEffect(() => {
        if (isLoggedIn()) {
            const decodedToken = decodeToken();
            if (decodedToken) {

                const userId = decodedToken?.id;
                const userRole = decodedToken?.role;

                if (!userId || !userRole) {
                    console.error("No user ID or role found in the token.");
                    return;
                }

                setUser_id(userId);
                setUser_role(userRole);
                dispatch(show(userId));
            }
        }
        setLoading(false);
    }, [dispatch]);


    const ProtectedRoute = ({role, children}: {role: string, children: JSX.Element}) => {

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!isLoggedIn() || user_role !== role) {
            return <Navigate to="/" replace />;
        }
        return children;
    };
  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={
                <ProtectedRoute role="participant">
                    <HomePage />
                </ProtectedRoute>
            } />

            <Route path="/dashboard" element={
                <ProtectedRoute role='organiser'>
                    <DashboardPage/>
                </ProtectedRoute>
            }/>
        </Routes>
    </>
  )
}

export default App
