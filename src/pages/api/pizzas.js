import { createClient } from "@supabase/supabase-js";
import supabase from "../../../bd";


export default async function GetClient(request, response) {
  const pizzasObj = await supabase.from("menu").select("*, pizza_tag!inner(*)");
  const pizzasData = pizzasObj.data;

  response.json({
    pizzasData,
  });
}
