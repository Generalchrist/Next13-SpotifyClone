import { Song } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useState } from "react";

const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);
    const {supabaseClient} = useSessionContext();
    
}