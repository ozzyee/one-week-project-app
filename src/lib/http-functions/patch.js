export async function patch(url = "", data = {}) {
   const response = await fetch(url, {
      method: "PATCH",
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
