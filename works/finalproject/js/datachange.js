
// script for changing player data

function dataChange(pname)
{
    var playerName = document.getElementsByClassName("p_name");
    var d_pic = document.getElementsByClassName("p_pic");
    var playerAge = document.getElementsByClassName("p_age");
    var nc_flags = document.getElementsByClassName("n_flag");
    var nc_details = document.getElementsByClassName("n_details");
    var playerStats = document.getElementsByClassName("p_stats");

    var filterData = finalData.filter(function(d)
                                {
                                    return d.long_name == pname;
                                });
                          
    // changing name of player
    playerName[0].innerHTML = `<h3>${pname}</h3>`;

    // changing picture of player
    pic_data = `<img src="${filterData[0].player_face_url}" style="width: 180px;"></img>`
    d_pic[0].innerHTML = pic_data; 

    // changing of age, height and weight
    playerAge[0].innerHTML = ` <p>${filterData[0].age}y</p><p>${filterData[0].height_cm}cm • ${filterData[0].weight_kg}kgs</p>`;

    //changing of stats 
    playerStats[0].innerHTML = `<h3>${filterData[0].player_positions}</h3><p> Postion </p>`
    playerStats[1].innerHTML = `<h3>${filterData[0].preferred_foot}</h3><p> Prefered foot </p>`
    playerStats[2].innerHTML = `<h3>${filterData[0].overall}</h3><p> Overall rating </p>`
    playerStats[3].innerHTML = `<h3>€${filterData[0].value_eur}</h3><p> Networth </p>`

    // changing of nation and club details
    nc_flags[0].innerHTML = `<img src="${filterData[0].nation_flag_url}" style="width: 40px;"></img>`
    nc_flags[1].innerHTML = `<img src="${filterData[0].club_logo_url}" style="width: 40px;"></img>`

    nc_details[0].innerHTML = `<h3>${filterData[0].nationality}</h3> <p>${filterData[0].nation_position} • ${filterData[0].nation_jersey_number}</p>`
    nc_details[1].innerHTML = `<h3>${filterData[0].club_name}</h3> <p>${filterData[0].club_position} • ${filterData[0].club_jersey_number}</p>`                      

    rdrchart(filterData);
    bub_data(filterData);
}