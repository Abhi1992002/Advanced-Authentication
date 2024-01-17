"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // check if fields are right
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validateFields.data;

  // encrypting the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // checking if the email is not taken
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  // creating user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //   send verification token to email

  return { success: "User Created" };
};
