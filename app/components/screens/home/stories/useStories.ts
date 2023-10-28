import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase";
import { IStory } from "./types";

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "stories")),
      (snapshot) => {
        setStories(
          snapshot.docs.map((d) => {
            const story: IStory = {
              _id: d.id,
              ...d.data(),
              heading: d.data().heading || "",
              images: d.data().images || [],
            };
            return story;
          })
        );
        setIsLoading(false);
      }
    );
  }, []);

  return { stories, isLoading };
};
