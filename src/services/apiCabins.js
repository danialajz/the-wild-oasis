import supabase from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
export default getCabins;

export async function createCabin(newCabin) {}
export async function deletecabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
