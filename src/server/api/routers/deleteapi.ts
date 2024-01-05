import { z } from "zod";
import { firestore } from "src/firebase";
import { createTRPCRouter, publicProcedure } from "crud/server/api/trpc";
import { collection, deleteDoc, doc } from "firebase/firestore";

const sampleCollection = collection(firestore, "sample");

export const deletetapi = createTRPCRouter({
  deleteSample: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      const docDelete = doc(sampleCollection, input.id);

      void deleteDoc(docDelete);
    }),
});
