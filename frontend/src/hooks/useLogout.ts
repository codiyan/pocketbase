import React from "react"
import {pb} from "../services/pocketbase"
import { useNavigate } from 'react-router-dom';


export default function useLogout() {
    const navigate = useNavigate();

    async function logout() {
        pb.authStore.clear();
        navigate("/login");
    }
    return logout
}