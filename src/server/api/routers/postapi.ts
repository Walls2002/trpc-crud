import { z } from "zod";
import { firestore } from "src/firebase";
import { createTRPCRouter, publicProcedure } from "crud/server/api/trpc";
import { addDoc, collection } from "firebase/firestore";

const sampleCollection = collection(firestore, "sample");

export const postapi = createTRPCRouter({
  postSample: publicProcedure
    .input(
      z.object({ name: z.string(), nickname: z.string(), address: z.string() }),
    )
    .mutation(({ input }) => {
      const user = {
        name: input.name,
        nickname: input.nickname,
        address: input.address,
      };

      void addDoc(sampleCollection, user);
      return { user };
    }),
});
