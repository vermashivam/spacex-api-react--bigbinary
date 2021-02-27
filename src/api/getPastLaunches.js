// https://api.spacexdata.com/v3/launches/past

export async function getPastLaunches(){
    let response = await fetch("https://api.spacexdata.com/v3/launches/past")
                        .then(res => {
                            if(res.ok) {
                                return res.json();
                              } else {
                                throw new Error('Something went wrong');
                              }})
                        .then(data => {
                            return data;
                        })
                        .catch(err =>
                            console.log(err));
    return response;
}