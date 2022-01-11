# rock_paper_scissors

Rock Paper Scissors excercise from the Odin Project

Pseudo code:

Variables:
Computer_Score
Computer_Pick
Player_Score
Player_Pick
rps_array = [rock, paper, scissor]

1. Computer Play

from rps_array choose random index and return

or

from range 1 to 3,
if 1, rock; if 2, paper; if 3, scissors;

Either one should work for the purposes.

2. Play Round

Computer_Pick = Computer_Play()
Player_Pick = read input from user
if(all loss scenarios)
return loss message with Player_Pick and Computer_Pick
Computer_Score++
if(all win scenarios)
return win message with Player_Pick and Computer_Pick
Player_Score++
else
return tie message with Player_Pick
display current score

3. Game (5 times repeat)

while(Player_Score < 5 and Computer_Score < 5)
if player_score > computer_score
display "Player wins"
else
display "Computer wins"
