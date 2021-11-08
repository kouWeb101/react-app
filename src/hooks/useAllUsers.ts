import axios from "axios";
import { useCallback, useState } from "react";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState("");
  const getUsers = useCallback(() => {
    axios.get("");
  }, []);

  return { getUsers, loading, users };
};
