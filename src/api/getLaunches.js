// https://api.spacexdata.com/v3/launches

export async function getAllLaunches(){
    let response = await fetch("https://api.spacexdata.com/v3/launches")
                        .then(res => res.json())
                        .then(data => {
                            return data;
                        })
                        .catch(err =>
                            console.log(err));
    return response;
}