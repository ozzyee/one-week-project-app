export async function getData(url = "") {
    const response = await fetch(url, {
       method: "GET",
       mode: "cors",
       cache: "default",
    });
    return response.json();
 }
 