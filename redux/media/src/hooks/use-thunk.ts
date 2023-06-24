import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";
import { User } from "../types/User";

const useThunk = (thunk: any) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const runThunk = useCallback(
    (arg?: User) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: any) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error] as const;
};

export { useThunk };
