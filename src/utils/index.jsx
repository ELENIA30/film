export async fuction GetData () {
    const response = await fetch ("https://edgemony-backend.herokuapp.com/movies")
    const data = await response.json();
    return data;
}