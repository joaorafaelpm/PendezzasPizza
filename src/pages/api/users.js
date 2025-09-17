import supabase from "../../../bd";


export default async function GetClient(request , response) {
  
  const supabaseClient = await supabase.from("usuarios").select("*")
  const clients = supabaseClient.data
  
  response.json({
    clients
  });
  
}

