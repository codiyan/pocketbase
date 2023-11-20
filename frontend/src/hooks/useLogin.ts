import React from "react"
import {useState} from "react"
import {pb} from "../services/pocketbase"
import { useNavigate } from 'react-router-dom';


export default function useLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    async function login(data: any) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
    navigate("/");
  }
  return {login, loading}
}