

function bub_data(d)
{
        d.pace_acceleration = parseFloat(d.pace_acceleration);
        d.pace_sprint_speed	 = parseFloat(d.pace_sprint_speed);

        d.shooting_finishing = parseFloat(d.shooting_finishing);
        d.shooting_shot_power = parseFloat(d.shooting_shot_power);
        d.shooting_long_shots = parseFloat(d.shooting_long_shots);
        d.shooting_positioning = parseFloat(d.shooting_positioning);
        d.shooting_penalties = parseFloat(d.shooting_penalties);

        d.passing_crossing = parseFloat(d.passing_crossing);
        d.passing_short_passing = parseFloat(d.passing_short_passing);
        d.passing_curve = parseFloat(d.passing_curve);
        d.passing_fk_accuracy = parseFloat(d.passing_fk_accuracy);
        d.passing_long_passing = parseFloat(d.passing_long_passing);
        d.passing_vision = parseFloat(d.passing_vision);

        d.dribbling_dribbling = parseFloat(d.dribbling_dribbling);
        d.dribbling_ball_control = parseFloat(d.dribbling_ball_control);
        d.dribbling_agility = parseFloat(d.dribbling_agility);
        d.dribbling_reactions = parseFloat(d.dribbling_reactions);
        d.dribbling_balance = parseFloat(d.dribbling_balance);
        d.dribbling_composure = parseFloat(d.dribbling_composure);

        d.defending_heading_accuracy = parseFloat(d.defending_heading_accuracy);
        d.defending_interceptions = parseFloat(d.defending_interceptions);
        d.defending_marking_awareness = parseFloat(d.defending_marking_awareness);
        d.defending_standing_tackle = parseFloat(d.defending_standing_tackle);
        d.defending_sliding_tackle = parseFloat(d.defending_sliding_tackle);

        d.physic_aggression = parseFloat(d.physic_aggression);
        d.physic_jumping = parseFloat(d.physic_jumping);
        d.physic_stamina = parseFloat(d.physic_stamina);
        d.physic_strength = parseFloat(d.physic_strength);

        d.goalkeeping_diving = parseFloat(d.goalkeeping_diving);
        d.goalkeeping_handling = parseFloat(d.goalkeeping_handling);
        d.goalkeeping_kicking = parseFloat(d.goalkeeping_kicking);
        d.goalkeeping_positioning = parseFloat(d.goalkeeping_positioning);
        d.goalkeeping_reflexes = parseFloat(d.goalkeeping_reflexes);

        var bub_data = [];

        console.log("f_dta",d);

        // for(i=0;i<33;i++)
        // {
        //     bub_data.push({"name":d.,"grp":"dt"});
        // }

        console.log("bub dta",bub_data);
    

}