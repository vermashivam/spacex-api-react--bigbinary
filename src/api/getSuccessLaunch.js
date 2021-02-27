// https://api.spacexdata.com/v3/launches

export async function getSuccessLaunch(val){
    let response = await fetch("https://api.spacexdata.com/v3/launches/")
                        .then(res => {
                            if(res.ok) {
                                return res.json();
                              } else {
                                throw new Error('Something went wrong');
                              }})
                        .then(data => {
                            console.log(val)
                            return data.filter(eachLaunch => (eachLaunch.launch_success === (val === '1')));
                        })
                        .catch(err =>
                            console.log(err));
    return response;
}