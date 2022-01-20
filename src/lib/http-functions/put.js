export async function put(url = "", data = {}) {
   const response = await fetch(url, {
      method: "put",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
         "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
   });

   return response.json();
}
