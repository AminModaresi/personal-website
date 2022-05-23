export default {
  async postContact(store, payload) {
    const response = await fetch(
      "https://getform.io/f/4522b0a9-950b-4fbb-aacb-1e75ad628c2e",
      {
        method: "POST",
        body: payload,
      }
    );
    const responseData = response.json()
    if(!response.ok){
      throw new Error(responseData.error)
    }
  },
};
