// https://api.spacexdata.com/v3/launches

export async function getLaunchByDate(start,end){
    
        let response = await fetch("https://api.spacexdata.com/v3/launches/start="+start+"&end="+end)
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
                                {
                                    console.log(err);
                                    return null;
                                });
        return response;
    
}