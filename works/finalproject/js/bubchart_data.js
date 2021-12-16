

function bub_data(d)
{
        d[0].pace_acceleration = parseFloat(d[0].pace_acceleration);
        d[0].pace_sprint_speed	 = parseFloat(d[0].pace_sprint_speed);

        d[0].shooting_finishing = parseFloat(d[0].shooting_finishing);
        d[0].shooting_shot_power = parseFloat(d[0].shooting_shot_power);
        d[0].shooting_long_shots = parseFloat(d[0].shooting_long_shots);
        d[0].shooting_positioning = parseFloat(d[0].shooting_positioning);
        d[0].shooting_penalties = parseFloat(d[0].shooting_penalties);

        d[0].passing_crossing = parseFloat(d[0].passing_crossing);
        d[0].passing_short_passing = parseFloat(d[0].passing_short_passing);
        d[0].passing_curve = parseFloat(d[0].passing_curve);
        d[0].passing_fk_accuracy = parseFloat(d[0].passing_fk_accuracy);
        d[0].passing_long_passing = parseFloat(d[0].passing_long_passing);
        d[0].passing_vision = parseFloat(d[0].passing_vision);

        d[0].dribbling_dribbling = parseFloat(d[0].dribbling_dribbling);
        d[0].dribbling_ball_control = parseFloat(d[0].dribbling_ball_control);
        d[0].dribbling_agility = parseFloat(d[0].dribbling_agility);
        d[0].dribbling_reactions = parseFloat(d[0].dribbling_reactions);
        d[0].dribbling_balance = parseFloat(d[0].dribbling_balance);
        d[0].dribbling_composure = parseFloat(d[0].dribbling_composure);

        d[0].defending_heading_accuracy = parseFloat(d[0].defending_heading_accuracy);
        d[0].defending_interceptions = parseFloat(d[0].defending_interceptions);
        d[0].defending_marking_awareness = parseFloat(d[0].defending_marking_awareness);
        d[0].defending_standing_tackle = parseFloat(d[0].defending_standing_tackle);
        d[0].defending_sliding_tackle = parseFloat(d[0].defending_sliding_tackle);

        d[0].physic_aggression = parseFloat(d[0].physic_aggression);
        d[0].physic_jumping = parseFloat(d[0].physic_jumping);
        d[0].physic_stamina = parseFloat(d[0].physic_stamina);
        d[0].physic_strength = parseFloat(d[0].physic_strength);

        d[0].goalkeeping_diving = parseFloat(d[0].goalkeeping_diving);
        d[0].goalkeeping_handling = parseFloat(d[0].goalkeeping_handling);
        d[0].goalkeeping_kicking = parseFloat(d[0].goalkeeping_kicking);
        d[0].goalkeeping_positioning = parseFloat(d[0].goalkeeping_positioning);
        d[0].goalkeeping_reflexes = parseFloat(d[0].goalkeeping_reflexes);

        var mainBuble = [];
        var bub_data = d[0];
        var char = "_";

        for(i=0;i<Object.keys(bub_data).length;i++)
        {   
            if(typeof(bub_data[Object.keys(bub_data)[i]])=="number" && Object.keys(bub_data)[i].includes(char))
            {
                myString = Object.keys(bub_data)[i]
                mainBuble.push({"name": myString,"group":myString.substring(0, myString.indexOf('_')),"value":bub_data[myString]})
            }
        }
        mainBubblechart(mainBuble)
}