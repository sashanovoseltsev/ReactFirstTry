// NOTE: we wrap return in Promise not because result of await response.json() is a promise (await actually resolves promise),
// but because return type of async function must be wrapped into promise.

export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}

// below example is perfectly legal. Non-async function with return type of promise.

// export const getData = <T>(url: string): Promise<T> => {
//   return fetch(url).then(response => response.json()); 
// }