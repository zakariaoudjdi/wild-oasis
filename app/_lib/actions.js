"use server";

import { signIn, signOut, auth } from "@/app/_lib/auth";
import supabase from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
export async function updateProfileAction(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("User not authenticated");
  }
  const nationalID = formData.get("nationalID");
  const nationality = formData.get("nationality");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Invalid national ID format");
  }
  const updateGuest = {
    nationalID,
    nationality,
  };
  const { data, error } = await supabase
    .from("guests")
    .update(updateGuest)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error("Error updating profile:", error);
    throw new Error("Failed to update profile");
  }
  revalidatePath("/account/profile");
}
