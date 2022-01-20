export async function deleteData(url = "") {
    const response = await fetch(url, {
       method: "DELETE",
       mode: "cors",
       cache: "default",
    });
    return response.json();
 }
 