/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { firestore } from "src/firebase";
import { createTRPCRouter, publicProcedure } from "crud/server/api/trpc";
import { getDocs, collection } from "firebase/firestore";

const sampleCollection = collection(firestore, "sample");

type User = {
  id: string;
  name: string;
  nickname: string;
  address: string;
};

export const getapi = createTRPCRouter({
  getSample: publicProcedure.query(async () => {
    const users = [] as User[];

    await getDocs(sampleCollection).then((response) => {
      response.forEach((doc) => {
        const data = doc.data();

        users.push({
          id: doc.id,
          name: data.name,
          nickname: data.nickname,
          address: data.address,
        });
      });
    });

    return { users };
  }),
});
