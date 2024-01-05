import { z } from "zod";
import { firestore } from "src/firebase";
import { createTRPCRouter, publicProcedure } from "crud/server/api/trpc";
import { collection, updateDoc, doc } from "firebase/firestore";

const sampleCollection = collection(firestore, "sample");

export const updateapi = createTRPCRouter({
  updateSample: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        nickname: z.string(),
        address: z.string(),
      }),
    )
    .mutation(({ input }) => {
      const docUpdate = doc(sampleCollection, input.id);
      const user = {
        name: input.name,
        nickname: input.nickname,
        address: input.address,
      };

      void updateDoc(docUpdate, user);

      return { user };
    }),
});
