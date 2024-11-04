import supabase, { supabaseUrl } from "./supabase";

export async function getFriends() {
    const {data,error} = await supabase.from("friends").select("*");
    if(error){ throw new Error(error.message)}
    return data;
}

// export async function createFriend (friend) {
//     const {error } = await supabase.from("friends").insert([{...friend}]).select();
//     if(error) {throw new Error (error.message)}
// }
//https://vhbqdebzwitgkiedgkoc.supabase.co/storage/v1/object/public/avatars/avatar-1447bed6-777a-4572-bfac-8aea0b1eb6f1-0.3620885902466795

export async function createFriend (friend) {
    //creating friend and avatar as url in friends table.
    const avatarUrl = `${Math.random()}-${friend.avatar.name}`.replace("/","");
    
    const avatarPath = `${supabaseUrl}/storage/v1/object/public/avatars/${avatarUrl}`;

        const {data,error } = await supabase.from("friends").insert([{...friend, avatar:avatarPath}]).select();

    if(error) {throw new Error (error.message)}

    // storing avatar image in avatar bucket
    const{error:error2} = await supabase.storage.from("avatars").upload(`${avatarUrl}`, friend.avatar);

    //3. If image is not uploaded we would want to delete the friend itself which we can get hold of via data in 21 line.
    if(error2) {
        await supabase.from("friends").delete().eq("id",data.id);
        throw new Error ("Avatar could not be uploaded and friend has not been created.");
    } 
}




export async function getFriend(id) {
 const {data, error} = await supabase.from("friends").select("*").eq("userId", id);
 if(error) throw new Error(error.message)
    return data;
}