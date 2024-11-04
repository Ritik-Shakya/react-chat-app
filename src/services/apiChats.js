import supabase from "./supabase";

export async function  getChatsSID (sId) {
  const {data, error} = await supabase.from("chats").select("*").eq("sId", sId);

  if(error) throw new Error(error.message);
  return data;
}

export async function createChat (newMessage) {
    const { error} = await supabase.from("chats").insert([{...newMessage}]).select();
    if(error) throw new Error(error.message);
}