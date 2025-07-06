"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import supabase from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteReservation(bookingId) {

  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay for testing purposes
  throw new Error("We testing the seOptemsteic hook if it work ");
  const session = await auth();
  if (!session) {
    throw new Error("User not authenticated");
  }


  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId)
    .eq("guestsId", session.user.guestId);

  if (error) {
    console.error("Error deleting reservation:", error);
    throw new Error("Failed to delete reservation");
  }

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("User not authenticated");
  }
  const bookingId = await formData.get("reservationId");
  const numGuests = await formData?.get("numGuests");
  const observation = await formData?.get("observation");

  const { error } = await supabase
    .from("bookings")
    .update({ numGuests, observation })
    .eq("id", bookingId)
    .eq("guestsId", session.user.guestId);

  if (error) {
    console.error("Error updating reservation:", error);
    throw new Error("Failed to update reservation");
  }
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
