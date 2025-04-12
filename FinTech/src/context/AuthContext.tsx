import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase, getCurrentUser } from "../lib/supabase";
import { User } from "../types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (
    email: string,
    password: string,
    userData: any
  ) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user: currentUser, error } = await getCurrentUser();
        if (error) throw error;
        setUser(currentUser as unknown as User);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user as unknown as User);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // const signIn = async (email: string, password: string) => {
  //   try {
  //     setLoading(true);
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });
  //     if (error) throw error;
  //     setUser(data.user as unknown as User);
  //     return { error: null };
  //   } catch (err) {
  //     console.error('Error signing in:', err);
  //     setError(err as Error);
  //     return { error: err };
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      const { user: currentUser, error: fetchError } = await getCurrentUser();
      if (fetchError) throw fetchError;

      setUser(currentUser as unknown as User);

      return { success: true, error: null };
    } catch (err) {
      console.error("Error signing in:", err);
      setError(err as Error);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };
  const signUp = async (email: string, password: string, userData: any) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
        },
      });
      if (error) throw error;
      return { error: null };
    } catch (err) {
      console.error("Error signing up:", err);
      setError(err as Error);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
    } catch (err) {
      console.error("Error signing out:", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
